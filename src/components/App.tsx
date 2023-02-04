import { View } from 'react-native';

import s from '@styles/AppStyles';

import { Task } from './Task';
import { Button } from './Button';

const App = () => {
  return (
    <View style={s.container}>
      <Task />

      <View style={s.buttonContainer}>
        <Button />
        <Button />
      </View>

      <View style={s.buttonContainer}>
        <Button />
        <Button />
      </View>

      <View style={s.buttonContainer}>
        <Button />
        <Button />
      </View>
    </View>
  );
};

export default App;
