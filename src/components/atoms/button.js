import {StyleSheet, Text, TouchableHighlight} from 'react-native';

import React from 'react';

const Button = ({title, action}) => (
  <TouchableHighlight style={styles.button} onPress={action}>
    <Text style={styles.text}>{title}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'aqua',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
