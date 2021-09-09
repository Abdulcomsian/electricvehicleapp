import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import Navigator from './navigator';
const App = () => {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Navigator />
    </SafeAreaProvider>
  );
};
export default App;
