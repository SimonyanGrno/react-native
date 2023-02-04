import React from 'react';
import { Pressable, Text } from 'react-native';

import s from './style';

const Button = () => {
  const handlePress = () => {};

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
      onPress={handlePress}
    >
      <Text style={s.text}>Number</Text>
    </Pressable>
  );
};

export { Button };
