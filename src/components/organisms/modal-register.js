import {Alert, Modal, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'atoms';

import React from 'react';

class ModalRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      confirmPassword: '',
    };
  }

  onRegister() {
    Alert.alert('button click!');
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.IsVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Register Form</Text>
            <Input
              placeholder={'Username'}
              onChange={userName => this.setState({userName})}
              value={this.state.userName}
            />

            <Input
              secureTextEntry={true}
              placeholder={'Password'}
              onChange={password => this.setState({password})}
              value={this.state.password}
            />

            <Input
              secureTextEntry={true}
              placeholder={'Confirm Password'}
              onChange={confirmPassword => this.setState({confirmPassword})}
              value={this.state.confirmPassword}
            />

            <Button title={'Register'} action={this.onRegister.bind(this)} />

            <Text style={styles.textHighlight} onPress={this.props.changeModal}>
              Have a account?
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textHighlight: {
    color: 'aqua',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default ModalRegister;
