import { FC } from 'react';
import { View, Text } from 'react-native';

import s from './style';

interface IProps {
  message: string;
  type: 'success' | 'error';
}

export const Message: FC<IProps> = ({ message, type }) => (
  <View
    style={[
      s.container,
      {
        backgroundColor: s[type].backgroundColor,
      },
    ]}
  >
    <Text style={[s.text]}>{message}</Text>
  </View>
);
