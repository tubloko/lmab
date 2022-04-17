import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useReactiveVar } from '@apollo/client';
import { registerFieldsVar } from '../common/reactiveVariables';
import { REGISTER, SIGN_UP_WITH_GOOGLE } from '../common/mutations/authMutations';
import { signIn } from '../common/utils';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';
import { Box, Button, Input, Pressable, Stack } from 'native-base';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAt, faEye, faEyeSlash, faUser } from '@fortawesome/free-solid-svg-icons';
//todo add error handling
const Register = () => {
  const [show, setShow] = useState(false);
  const onCompleted = ({ register }) => {
    if (register.user) {
      signIn(register.user.token);
    }
  };
  const [register, registerData] = useMutation(REGISTER, { onCompleted });
  const [signUpWithGoogle, signUpWithGoogleData] = useMutation(SIGN_UP_WITH_GOOGLE, { onCompleted });
  const registerFields = useReactiveVar(registerFieldsVar);

  const handleTextChange = (value, inputName) => {
    registerFieldsVar({
      ...registerFields,
      [inputName]: value,
    });
  };

  const handleRegister = () => {
    const { name, email, password, accessToken } = registerFields;
    if (accessToken) {
      signUpWithGoogle({
        variables: {
          name,
          email,
          password,
          accessToken
        }
      });
    } else {
      register({
        variables: {
          name,
          email,
          password,
        }
      });
    }
  };

  return (
    <AuthLayout>
      <Stack space={4} w="100%" alignItems="center">
        <Input
          onChangeText={value => handleTextChange(value, 'name')}
          value={registerFields.name}
          color={'yellow.50'}
          w={300}
          size="2xl"
          InputLeftElement={<Box ml={2}>
            <FontAwesomeIcon icon={faUser} size={20} color={'#fefce8'} />
          </Box>}
          placeholder="Name"
        />
        <Input
          onChangeText={value => handleTextChange(value, 'email')}
          value={registerFields.name}
          color={'yellow.50'}
          w={300}
          size="2xl"
          InputLeftElement={<Box ml={2}>
            <FontAwesomeIcon icon={faAt} size={20} color={'#fefce8'} />
          </Box>}
          placeholder="Email"
        />
        <Input
          onChangeText={value => handleTextChange(value, 'password')}
          value={registerFields.password}
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
          isLoading={signUpWithGoogleData.loading || registerData.data}
          isLoadingText="Submitting"
          onPress={handleRegister}
        >
          Submit
        </Button>
      </Stack>
    </AuthLayout>
  );
};

export { Register };
