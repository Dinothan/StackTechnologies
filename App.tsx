import React from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <SafeAreaView style={appStyles.container}>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
          </SafeAreaView>
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}

const appStyles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
