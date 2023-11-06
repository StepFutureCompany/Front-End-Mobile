import React from 'react';
import { Image, SafeAreaView, StyleSheet } from 'react-native';

export default function Start() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={require('../../assets/img/logo.png')} style={styles.imagem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1ca6f1',
    alignContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: '60%',
    top: 130,
  },
});
