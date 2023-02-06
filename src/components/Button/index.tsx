import { FC, memo, useState } from 'react';
import { Pressable, Text } from 'react-native';

import s from './style';

interface IProps {
  title: number | string;
  onPress: () => void;
  needToChangeActiveState?: boolean;
}

const Button: FC<IProps> = memo(
  ({ title, onPress, needToChangeActiveState = true }) => {
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
      if (needToChangeActiveState) {
        setIsActive(prev => !prev);
      }

      onPress();
    };

    return (
      <Pressable
        style={({ pressed }) => [
          s.container,
          s.default,
          isActive && s.selected,

          !needToChangeActiveState && pressed && s.pressed,
        ]}
        onPress={handlePress}
      >
        <Text style={[s.text]}>{title}</Text>
      </Pressable>
    );
  },
);

export { Button };
