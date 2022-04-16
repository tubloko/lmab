import React from 'react';
import { useMutation } from '@apollo/client';
import { View, Text, TextInput, Button } from 'react-native';
import { useReactiveVar } from '@apollo/client';
import { registerFieldsVar } from '../common/reactiveVariables';
import { REGISTER, SIGN_UP_WITH_GOOGLE } from '../common/mutations/authMutations';
import { signIn } from '../common/utils';
//todo add error handling
const Register = () => {
  const onCompleted = ({ register }) => {
    if (register.user) {
      signIn(register.user.token);
    }
  };
  const [register] = useMutation(REGISTER, { onCompleted });
  const [signUpWithGoogle] = useMutation(SIGN_UP_WITH_GOOGLE, { onCompleted });
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
    <View>
      <Text>
        Register
      </Text>
      <View>
        <Text>Name</Text>
        <TextInput
          editable={!registerFields.isDisabled}
          onChangeText={value => handleTextChange(value, 'name')}
          value={registerFields.name}
        />
        <Text>Email</Text>
        <TextInput
          editable={!registerFields.isDisabled}
          onChangeText={value => handleTextChange(value, 'email')}
          value={registerFields.email}
        />
        <Text>Password</Text>
        <TextInput
          onChangeText={value => handleTextChange(value, 'password')}
          value={registerFields.password}
        />
        <Button title={'Send'} onPress={handleRegister} />
      </View>
    </View>
  );
};

export { Register };
