import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Layout from '../components/Layout';
import {useAppSelector} from '../hooks/hooks';

const HomeScreen: FC = () => {
  const username = useAppSelector(state => state.auth.username);

  return (
    <Layout>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Hi {username} Welcome to </Text>
          <Header>Stack Technologies</Header>
        </View>
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

export default HomeScreen;
