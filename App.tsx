import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import WelcomeScreen from './src/screens/Welcome';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={appStyles.container}>
          <WelcomeScreen />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const appStyles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
