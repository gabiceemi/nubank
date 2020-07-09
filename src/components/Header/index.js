/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/Nubank_Logo.png';

export default function Heaer() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Gabriela</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
