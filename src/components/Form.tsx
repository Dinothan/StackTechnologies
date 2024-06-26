import React, {useState, useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Background from './Layout';
import Header from './Header';
import ErrorComponent from './Error';
import TextInput from './TextInput';
import {theme} from '../core/theme';
import Button from './Button';
import LinkText from './LinkText';

interface FormProps {
  buttonLabel: string;
  navButtonLabel: string;
  navText: string;
  onLoginPressed: (
    username: string,
    password: string,
    setErrorMessage: (error: string) => void,
  ) => void;
  navigation: any;
}

const Form = ({
  onLoginPressed,
  buttonLabel,
  navButtonLabel,
  navText,
  navigation,
}: FormProps) => {
  const [username, setUsername] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [errorMessage, setErrorMessage] = useState('');

  // Memoized navigation handler
  const onPressNavigation = useCallback(() => {
    // navigation.navigate(navButtonLabel);
  }, [navigation, navButtonLabel]);

  // Memoized onChange handlers
  const onChangeUsername = useCallback((value: string) => {
    if (value.trim().length > 0) {
      setUsername({value: value, error: ''});
    } else {
      setUsername({value: '', error: 'Please enter username'});
    }
  }, []);

  const onChangePassword = useCallback((value: string) => {
    if (value.trim().length > 0) {
      setPassword({value: value, error: ''});
    } else {
      setPassword({value: '', error: 'Please enter password'});
    }
  }, []);

  return (
    <Background>
      <Header>Stack Technologies</Header>
      {errorMessage && <ErrorComponent message={errorMessage} />}
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={onChangeUsername}
        error={!!username.error}
        errorText={username.error}
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={onChangePassword}
        error={!!password.error}
        secureTextEntry
        errorText={password.error}
      />

      {navButtonLabel === 'Signup' && <LinkText text="Forgot your password?" />}

      <Button
        mode="contained"
        onPress={() =>
          onLoginPressed(username.value, password.value, setErrorMessage)
        }>
        {buttonLabel}
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>{navText} </Text>
        <TouchableOpacity onPress={onPressNavigation}>
          <Text style={styles.link}>{navButtonLabel}</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default Form;
