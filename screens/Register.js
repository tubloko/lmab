import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { useReactiveVar } from '@apollo/client';
import { registerFieldsVar } from '../common/reactiveVariables';

const Register = () => {
  const registerFields = useReactiveVar(registerFieldsVar);

  const handleTextChange = (value, inputName) => {
    registerFields({
      ...registerFields,
      [inputName]: value,
    });
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
      </View>
    </View>
  );
};

export { Register };
