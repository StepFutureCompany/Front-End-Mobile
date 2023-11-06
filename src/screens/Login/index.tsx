import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.logo}>
          <Image source={require('../../assets/img/logo.png')} style={styles.imagem} />
        </View>
        <View />
        <View style={styles.form}>
          <Text style={styles.mainText}>Login</Text>
          <View style={styles.input}>
            <TextInput placeholder="Escreva seu login" style={{ paddingLeft: 10 }} />
          </View>
          <Text style={styles.mainText}>Senha</Text>
          <View style={styles.input}>
            <TextInput placeholder="Escreva sua senha" style={{ paddingLeft: 10 }} />
          </View>
          <TouchableOpacity onPress={() => console.log('User logado')} style={styles.button}>
            <Text style={styles.textButton}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    width: '60%',
    height: '12%',
    marginTop: 30,
    borderWidth: 2,
    borderRadius: 16,
  },
  input: {
    backgroundColor: 'white',
    width: 230,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'gray',
    alignItems: 'flex-start',
  },
  mainText: {
    alignSelf: 'flex-start',
    paddingLeft: 35,
    paddingTop: 40,
  },
  form: {
    backgroundColor: '#D8D8D8',
    width: 300,
    height: 350,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    gap: 10,
    borderWidth: 2,
    borderRadius: 16,
    bottom: 30,
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
