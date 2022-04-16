import React from 'react';
import { Heading, Center, VStack } from 'native-base';

const AuthLayout = ({ children }) => {

  return (
    <VStack bg='muted.900' flex={1}>
      <Center h="200">
        <Heading color='yellow.400'>Let's make a bet</Heading>
      </Center>
      <Center h="450" px={5}>
        {children}
      </Center>
    </VStack>
  );
};

export { AuthLayout };
