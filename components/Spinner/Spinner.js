import React from 'react';
import { Text } from 'react-native';
import { HStack, Spinner as NBSpinner, Heading } from 'native-base';

const Spinner = () => (
  <HStack space={2} alignItems="center" justifyContent="center">
    <NBSpinner />
    <Heading color="primary.500" fontSize="md">
      <Text>
        Loading
      </Text>
    </Heading>
  </HStack>
);

export { Spinner };