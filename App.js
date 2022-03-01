import React from 'react';
import {Text, View} from 'react-native';
import Login from './components/Login';

const App = () => {
  return (
    <View>
      {/* <Text>The Demo Project</Text> */}
      <Login data={'Some data'} />
    </View>
  );
};

export default App;
