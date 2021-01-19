import React from 'react';
import {
  StyleSheet,
  Button,
  NativeModules,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const {Test} = NativeModules;

  const onPress = () => {
    Test.startSdkProcess((err, task) => {
      if (err) {
        console.log(err);
      } else {
        console.log(task);
      }
    });
  };

  return (
    <TouchableOpacity style={styles.main}>
      <Button title="Autenticar" onPress={onPress} style={styles.button} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
