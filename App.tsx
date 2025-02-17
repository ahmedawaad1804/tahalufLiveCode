import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigation} from './src/StackNavigation';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'green', flex: 1},
});

export default App;
