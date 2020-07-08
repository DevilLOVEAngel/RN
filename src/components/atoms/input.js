import {StyleSheet, TextInput} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';

const Input = props => {
  const {value, placeholder, isSecureText, onChange, inputStyle} = props;

  return (
    <TextInput
      style={{...styles.input, ...inputStyle}}
      placeholder={placeholder}
      secureTextEntry={isSecureText}
      onChangeText={onChange}
      value={value}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isSecureText: PropTypes.bool,
  inputStyle: PropTypes.object,
  onChange: PropTypes.func,
};

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
