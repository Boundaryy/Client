import React from 'react';
import { globalStyles } from '../styles/global'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../components/Button.jsx'


export default function Index() {
  const router = useRouter()

  const handle = () => {
    router.push('/choose')
  }

  return (
    <View style={globalStyles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Button onPress={handle} title={"회원가입"}/>
      <Text style={globalStyles.footer}>©Barder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    marginBottom: 100,
    height: 146,
  },
});