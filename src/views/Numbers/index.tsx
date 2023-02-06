import { FC, memo, useState } from 'react';
import { View } from 'react-native';

import { Button } from '@components/Button';
import { INumbers } from '@utils/helpers';

import s from './styles';

interface IProps {
  numbers: INumbers[];
  setSum: React.Dispatch<React.SetStateAction<number>>;
  hasGameFinished: boolean;
}

export const Numbers: FC<IProps> = memo(
  ({ numbers, setSum, hasGameFinished }) => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const handlePress = (number: number, id: string) => {
      if (!hasGameFinished) {
        const itemIndex = selectedItems.findIndex(item => item === id);
        const hasItemSelected = itemIndex !== -1;

        setSum(prev => (hasItemSelected ? prev - number : prev + number));
        setSelectedItems(prev => {
          if (hasItemSelected) {
            return prev.filter((_, index) => index !== itemIndex);
          } else {
            return [...prev, id];
          }
        });
      }
    };

    return (
      <View style={s.container}>
        {numbers.map(({ id, number }) => (
          <Button
            key={id}
            onPress={() => handlePress(number, id)}
            title={number}
            needToChangeActiveState={!hasGameFinished}
          />
        ))}
      </View>
    );
  },
);
