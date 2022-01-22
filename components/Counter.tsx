import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useStore} from '../store';

export const Counter: React.FC = () => {
  const {count, increaseCount, decreaseCount} = useStore();

  return (
    <SafeAreaView>
      <View style={styles.rootView}>
        <Text>{count}</Text>
        <View style={styles.buttonView}>
          <Button title="Increase Count" onPress={increaseCount} />
          <Button title="Decrease Count" onPress={decreaseCount} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
});
