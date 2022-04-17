import React, { useState } from 'react';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';
import { Stack, Input, Box, Pressable, Button } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAt, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../common/mutations/authMutations';
import { signIn } from '../common/utils';
//todo handle errors
const Login = () => {
  const [login, data] = useMutation(LOGIN, {
    onCompleted: ({ login }) => {
      signIn(login.user.token);
    }
  });
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => login({
    variables: {
      email,
      password
    }
  });

  return (
    <AuthLayout>
      <Stack space={4} w="100%" alignItems="center">
        <Input
          onChangeText={setEmail}
          value={email}
          color={'yellow.50'}
          w={300}
          size="2xl"
          InputLeftElement={<Box ml={2}>
            <FontAwesomeIcon icon={faAt} size={20} color={'#fefce8'} />
          </Box>}
          placeholder="Email" 
        />
        <Input
          onChangeText={setPassword}
          value={password}
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
        <Button
          w={200}
          size="lg"
          variant="outline"
          color={'yellow.50'}
          isLoading={data.loading}
          isLoadingText="Submitting"
          onPress={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </AuthLayout>
  );
};

export { Login };
