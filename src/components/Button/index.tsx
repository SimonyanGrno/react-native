import { FC } from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';

import s from './style';

interface IProps {
  title: number | string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const Button: FC<IProps> = ({ title, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        s.container,
        {
          backgroundColor: pressed
            ? s.pressed.backgroundColor
            : s.default.backgroundColor,
          color: pressed ? s.pressed.color : s.default.color,
        },
      ]}
      onPress={onPress}
    >
      <Text style={s.text}>{title}</Text>
    </Pressable>
  );
};

export { Button };
