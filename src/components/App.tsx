import { useState, useLayoutEffect } from 'react';
import { View } from 'react-native';

import { generateTaskNumber, generateNumbers } from '@utils/helpers';

import { Task } from './Task';
import { Button } from './Button';

import s from './styles';

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [taskNumber, setTaskNumber] = useState(0);

  useLayoutEffect(() => {
    initData();
  }, []);

  const initData = () => {
    const tmpNumbers = generateNumbers();
    const tmpTaskNumber = generateTaskNumber(tmpNumbers);

    setNumbers(tmpNumbers);
    setTaskNumber(tmpTaskNumber);
  };

  const handleNumberPress = () => {};

  return (
    <View style={s.container}>
      <Task taskNumber={taskNumber} />

      {numbers.map((number, index) => (
        <Button
          onPress={handleNumberPress}
          key={index}
          style={s.button}
          title={number}
        />
      ))}

      <Button title="Refresh" onPress={initData} />
    </View>
  );
};

export default App;
