/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

let number = Math.round(Math.random() * 10);
let count = 0;

const App = () => {
  const [text, setText] = React.useState('123');

  React.useEffect(() => {
    initNumber();
    console.warn('初始化', number);
  }, []);

  function initNumber() {
    number = Math.round(Math.random() * 10);
  }

  function doGuess() {
    count++;
    const numberValue = parseInt(text);
    if(numberValue === number) {
      Alert.alert(`猜中,你一共猜了${count}次.`);
    }else if (numberValue < number) {
      Alert.alert('猜小了');
    }else {
      Alert.alert('猜大了');
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput value={text} onChangeText={setText} style={styles.input}></TextInput>
        <Button title='猜' onPress={doGuess}></Button>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'black',
    margin: 30,
    height: 50,
    fontSize: 20,
    paddingLeft: 10,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
