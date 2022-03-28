import React, {useState} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const App = () => {
  const [val, setVal] = useState(0);
  const [buttonPressedVal, setButtonPressedVal] = useState(0);

  const updateData = () => {
    setVal(val + 5);
    setButtonPressedVal(buttonPressedVal + 1);
  };

  return (
    <View style={styles.body}>
      <Text>Total Value {val}</Text>
      <Button title="Add 5" onPress={updateData}></Button>
      <Text>Button Pressed {buttonPressedVal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
