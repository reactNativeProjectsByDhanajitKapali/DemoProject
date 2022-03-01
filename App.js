import React from 'react';
import {Button, Text, View, SafeAreaView} from 'react-native';
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
      data: 'Some class state',
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text>{this.state.data}</Text>
        <Button
          title="Change State"
          onPress={() => {
            this.setState({data: 'State Changed'});
          }}
        />
      </SafeAreaView>
    );
  }
}

export default App;
