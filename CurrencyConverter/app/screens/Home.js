import React, { Component } from "react";
import { StatusBar } from "react-native";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';

class Home extends Component {
  handlePressBaseCurrency = () => {
    console.log('Press Base Currency');
  };

  handlePressQuoteCurrency = () => {
    console.log('Press Quote Currency');
  };

  handleTextChange = (text) => {
    console.log('Change Text', text);

  }

  render () {
    return (
<Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
    <InputWithButton
      buttonText={TEMP_BASE_CURRENCY}
      onPress={this.handlePressBaseCurrency}
      defaultValue={TEMP_BASE_PRICE}
      keyboardType="numeric"
      onChangeText={this.handleTextChange}
    />
    <InputWithButton
      buttonText={TEMP_QUOTE_CURRENCY}
      onPress={this.handlePressQuoteCurrency}
      defaultValue={TEMP_QUOTE_PRICE}
      editable={false}
    />
  </Container>
    );
  }
}

export default Home;
