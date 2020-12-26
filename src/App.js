/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Styled from 'styled-components/native';
import Counter from './Components/Screens/Counter';

const App = () => {
  return (
    <Container>
      <Counter title="This is a counter app" initValue={1} />
    </Container>
  );
};

const Container = Styled.View`
flex:1;
background-color:#EEE
`;

export default App;
