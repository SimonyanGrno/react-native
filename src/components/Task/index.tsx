import { FC } from 'react';
import { Text } from 'react-native';

import s from './style';

interface IProps {
  taskNumber: number;
}

export const Task: FC<IProps> = ({ taskNumber }) => (
  <Text style={s.container}>{taskNumber}</Text>
);
