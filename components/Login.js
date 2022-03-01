import React from 'react';
import {View, Text} from 'react-native';

const Login = props => {
  return (
    <View>
      <Text>
        Login Screen
        {props.data}
      </Text>
    </View>
  );
};

export default Login;
