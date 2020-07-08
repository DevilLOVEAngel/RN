import {StyleSheet, Text, TouchableHighlight} from 'react-native';

import React from 'react';

const Button = ({title, action, buttonStyle, textStyle}) => (
  <TouchableHighlight
    style={{...buttonStyle, ...styles.button}}
    onPress={action}>
    <Text style={{...textStyle, ...styles.text}}>{title}</Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderColor: '#19CC95',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  text: {
    color: '#19CC95',
    textAlign: 'center',
  },
});

export default Button;
