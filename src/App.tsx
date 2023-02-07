import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView } from 'react-native';

import { generateNumbers, generateTaskNumber, INumbers } from '@utils/helpers';
import { Numbers } from '@views/Numbers';

import { Button, Message, Task } from './components';
import s from './styles';

type GameStatus = 'playing' | 'win' | 'lost';
type Layout = 'Portrait' | 'Landscape';

const App = () => {
  const [numbers, setNumbers] = useState<INumbers[]>([]);
  const [taskNumber, setTaskNumber] = useState(0);
  const [sum, setSum] = useState(0);
  const [gameStatus, setGameStatus] = useState<GameStatus>('playing');
  const [layout, setLayout] = useState<Layout>('Portrait');
  const hasGameFinished = useMemo(() => gameStatus !== 'playing', [gameStatus]);

  useEffect(() => {
    if (sum === 0) {
      return;
    }

    if (sum > taskNumber) {
      setGameStatus('lost');
    } else if (sum === taskNumber) {
      setGameStatus('win');
    }
  }, [sum, taskNumber]);

  useLayoutEffect(() => {
    initData();
  }, []);

  const initData = () => {
    const tmpNumbers = generateNumbers();
    const tmpTaskNumber = generateTaskNumber(tmpNumbers);

    setNumbers(tmpNumbers);
    setTaskNumber(tmpTaskNumber);
  };

  const renderMessage = () => {
    if (!hasGameFinished) {
      return null;
    }

    const message = gameStatus === 'win' ? 'You win' : 'You lose';
    const type = gameStatus === 'win' ? 'success' : 'error';

    return (
      <Message
        message={`${message}, press restart button to play again`}
        type={type}
      />
    );
  };

  const handleRestartPress = () => {
    initData();

    setGameStatus('playing');
    setSum(0);
  };

  const handleLayoutChange = () => {
    const { height, width } = Dimensions.get('window');

    const isPortrait = height >= width;

    setLayout(isPortrait ? 'Portrait' : 'Landscape');
  };

  return (
    <SafeAreaView
      style={(s.container, [layout === 'Landscape' && s.landscape])}
      onLayout={handleLayoutChange}
    >
      <ScrollView contentContainerStyle={s.scroll}>
        <Task taskNumber={taskNumber} />

        {renderMessage()}

        <Numbers
          numbers={numbers}
          setSum={setSum}
          hasGameFinished={hasGameFinished}
        />

        {hasGameFinished && (
          <Button
            title="Restart"
            onPress={handleRestartPress}
            needToChangeActiveState={false}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
