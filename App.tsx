import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Counter} from './components/Counter';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.centerView}>
        <Counter />
        <Counter />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centerView: {
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default App;
