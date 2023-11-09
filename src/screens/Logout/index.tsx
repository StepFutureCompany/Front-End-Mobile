/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Logout({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logo}>
        <Image source={require('../../assets/img/logo.png')} style={styles.imagem} />
      </View>
      <View />
      <View style={styles.form}>
        <Text style={styles.mainText}>
          Voce tem certeza que deseja realmente sair do seu perfil?
        </Text>
        <View style={{ flex: 1, flexDirection: 'row', gap: 20 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.button}
          >
            <Text style={styles.textButton}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    marginTop: 50,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    flex: 1,
    flexDirection: 'column',
    textAlignVertical: 'center',
  },
  button: {
    backgroundColor: '#1ca6f1',
    width: 100,
    height: 30,
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 16,
  },
  mainText: {
    marginTop: 40,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#D8D8D8',
    width: 290,
    height: 200,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 30,
    borderWidth: 2,
    borderRadius: 16,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#1ca6f1',
  },
  imagem: {
    width: '100%',
    height: '40%',
  },
});
