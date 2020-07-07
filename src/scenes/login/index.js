import {SafeAreaView, Text, TouchableHighlight} from 'react-native';

import React from 'react';

const LoginScreen = ({navigation}) => (
  <SafeAreaView>
    <Text>Screen: Login</Text>

    <TouchableHighlight onPress={() => navigation.navigate('Home')}>
      <Text>Go to home</Text>
    </TouchableHighlight>
  </SafeAreaView>
);

export default LoginScreen;
