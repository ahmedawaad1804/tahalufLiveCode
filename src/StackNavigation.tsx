import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {stackGenerator} from './AppBuilder/ComponentGenerator';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
    // screenOptions={{
    //   headerShown: false,
    //   animationDuration: isIOS ? 250 : 200,
    //   orientation: 'portrait',
    //   animation: isIOS
    //     ? undefined
    //     : I18nManager.isRTL
    //     ? 'slide_from_left'
    //     : 'slide_from_right',
    // }}
    >
      {stackGenerator()}
    </Stack.Navigator>
  );
};

export {StackNavigation, Stack};
