import {Alert, Modal, StyleSheet, Text, View} from 'react-native';
import {Button, Input} from 'atoms';

import React from 'react';

class ModalLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  onLogin() {
    Alert.alert('child event');
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.IsVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Login Form</Text>
            <Input
              placeholder={'Username'}
              onChange={userName => this.setState({userName})}
              value={this.state.userName}
            />

            <Input
              isSecureText={true}
              placeholder={'Password'}
              onChange={password => this.setState({password})}
              value={this.state.password}
            />

            <Button title={'Log in'} action={this.onLogin.bind(this)} />

            <Text style={styles.textHighlight} onPress={this.props.changeModal}>
              Don't have a account
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

export default ModalLogin;
