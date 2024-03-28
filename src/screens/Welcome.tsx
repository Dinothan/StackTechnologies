import React, {FC, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import AlertComponent from '../components/Alert';
import Layout from '../components/Layout';

const WelcomeScreen: FC = ({navigation}: any) => {
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  const showAlert = () => {
    setIsAlertVisible(true);
  };

  const hideAlert = () => {
    navigation.navigate('Login');
    setIsAlertVisible(false);
  };

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Welcome to </Text>
          <Header>Stack Technologies</Header>
        </View>

        <Button mode="contained" onPress={showAlert}>
          Login
        </Button>

        <AlertComponent
          title="Stack Technologies"
          description={"Please click 'Ok' to Login"}
          visible={isAlertVisible}
          hideAlert={hideAlert}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {paddingBottom: 20},
  textStyle: {textAlign: 'center', fontSize: 16, fontWeight: 'bold'},
});

export default WelcomeScreen;
