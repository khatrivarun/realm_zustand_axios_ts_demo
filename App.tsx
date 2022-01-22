import React, {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';
import {Counter} from './components/Counter';
import {initRealm} from './database';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    initRealm()
      .then(() => {
        console.log('Realm Init Complete');
        setLoading(false);
      })
      .catch(error => {
        console.log('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.centerView}>
        {loading ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <View style={styles.centerView}>
            <Counter />
            <Counter />
          </View>
        )}
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
