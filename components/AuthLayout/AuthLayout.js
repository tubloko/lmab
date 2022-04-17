import React from 'react';
import { Heading, Center, VStack, Box, Pressable } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const AuthLayout = ({ children }) => {
  const { canGoBack, goBack } = useNavigation();

  return (
    <VStack bg='muted.900' flex={1}>
      <Box m={3} h="50">
        {canGoBack() && <Pressable onPress={goBack}>
          <FontAwesomeIcon size={35} icon={faArrowLeft} color={'#fefce8'}/>
        </Pressable>}
      </Box>
      <Center h="150">
        <Heading color='yellow.400'>Let's make a bet</Heading>
      </Center>
      <Center h="350" px={5}>
        {children}
      </Center>
    </VStack>
  );
};

export { AuthLayout };
