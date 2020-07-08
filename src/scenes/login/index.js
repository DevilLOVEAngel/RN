import {ModalLogin, ModalRegister} from 'organisms';
import {SafeAreaView, StyleSheet} from 'react-native';

import React from 'react';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      isModalLogin: true,
    };
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle() {
    this.setState({isModalLogin: !this.state.isModalLogin});
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ModalLogin
          IsVisible={this.state.isModalLogin}
          changeModal={this.onToggle}
        />

        <ModalRegister
          IsVisible={!this.state.isModalLogin}
          changeModal={this.onToggle}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'aqua',
  },
});

export default LoginScreen;
