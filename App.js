import React from 'react';
import {Button, Text, View, SafeAreaView, StyleSheet} from 'react-native';
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
        <Text style={{color: 'red'}}>Inline Style</Text>
        <Text style={[styles.colors, styles.fonts]}>StyleSheet Style</Text>
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
