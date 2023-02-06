import { FC } from 'react';
import { Text, View } from 'react-native';

import s from './style';

interface IProps {
  taskNumber: number;
}

export const Task: FC<IProps> = ({ taskNumber }) => (
  <View style={s.container}>
    <Text style={s.text}>{taskNumber}</Text>
  </View>
);
