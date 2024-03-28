import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation';
import Form from '../components/Form';
import {getLogin} from '../store/thunk/authThunk';
import {useAppDispatch} from '../hooks/hooks';
import {REACT_APP_USER_SECRET} from '@env';
import {loginSuccess} from '../store/slices/authSlice';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

type LoginScreenProps = {
  navigation: ProfileScreenNavigationProp;
};

const LoginScreen = ({navigation}: LoginScreenProps) => {
  const dispatch = useAppDispatch();

  // Function to handle login button press
  const onLoginPressed = async (
    username: string,
    password: string,
    setErrorMessage: (arg0: string) => void,
  ) => {
    // Validation
    if (!username.trim() && !password.trim()) {
      setErrorMessage('Please enter username and password');
      return;
    }
    if (!username.trim()) {
      setErrorMessage('Please enter username');
      return;
    }
    if (!password.trim()) {
      setErrorMessage('Please enter password');
      return;
    }

    // Attempt login
    const userCredential = {
      username,
      usersecret: REACT_APP_USER_SECRET,
      userpassword: password,
    };

    try {
      await dispatch(getLogin(userCredential));
      dispatch(loginSuccess(username));
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      onLoginPressed={onLoginPressed}
      buttonLabel="Login"
      navText="Don’t have an account?"
      navButtonLabel="Signup"
      navigation={navigation}
    />
  );
};

export default LoginScreen;
