import {SafeAreaView, StyleSheet, Text} from 'react-native';

import React from 'react';

const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>Screen: Home</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
});

export default HomeScreen;
