import React, { useState } from 'react';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';
import { Stack, Input, Box, Pressable } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [show, setShow] = useState(false);

  return (
    <AuthLayout>
      <Stack space={4} w="100%" alignItems="center">
        <Input
          color={'yellow.50'}
          w={300}
          size="2xl"
          InputLeftElement={<Box ml={2}>
            <FontAwesomeIcon icon={faAt} size={20} color={'#fefce8'} />
          </Box>}
          placeholder="Email" 
        />
        <Input
          color={'yellow.50'}
          w={300}
          size="2xl"
          type={show ? 'text' : 'password'} 
          InputRightElement={(
            <Pressable onPress={() => setShow(!show)}>
              <Box mr={2}>
                <FontAwesomeIcon icon={show ? faEye : faEyeSlash} size={20} color={'#fefce8'} />
              </Box>
            </Pressable>
          )}
          placeholder="Password" 
        />
      </Stack>;
    </AuthLayout>
  );
};

export { Login };
