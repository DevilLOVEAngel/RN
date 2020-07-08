import {StyleSheet, TextInput} from 'react-native';

import React from 'react';

const Input = ({value, placeholder, isSecureText, onChange}) => (
  <TextInput
    style={styles.input}
    placeholder={placeholder}
    secureTextEntry={isSecureText}
    onChangeText={onChange}
    value={value}
  />
);

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default Input;
