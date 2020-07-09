import {StyleSheet, Text, TouchableHighlight} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';

const Button = props => {
  const {title, action, buttonStyle, textStyle, isHidden} = props;

  return (
    <TouchableHighlight
      visible={!isHidden}
      style={{...buttonStyle, ...styles.button}}
      onPress={action}>
      <Text style={{...textStyle, ...styles.text}}>{title}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  isHidden: PropTypes.bool,
};

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
