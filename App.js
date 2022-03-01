import React from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
} from 'react-native';
import Login from './components/Login';

// const App = () => {
//   return (
//     <View>
//       {/* <Text>The Demo Project</Text> */}
//       <Login data={'Some data'} />
//     </View>
//   );
// };

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <SafeAreaView>
        <TextInput
          placeholder="Enter Your name"
          onChangeText={e => {
            this.setState({name: e});
          }}></TextInput>
        <Button
          title="Submit"
          onPress={() => {
            alert(this.state.name);
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  colors: {
    color: 'red',
    backgroundColor: 'green',
  },
  fonts: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
