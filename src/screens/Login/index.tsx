/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { useAuth } from '../../context';

export default function LoginScreen({ navigation }) {
  const {login} = useAuth()
  const [dadosDoBackend, setDadosDoBackend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3333/funcionarios');
        setDadosDoBackend(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
    fetchData();
  }, []);
  
  const [user, setUser] = useState({
    login: '',
    senha: '',
  });
  console.log(user);

  const refreshUser = () => (
    setUser({login: '', senha: ''})
  )

  const handleLogin = () => {
    const foundUser = dadosDoBackend.find(
      (func) => func.email === user.login && func.cpf === user.senha
    );
  
    if (foundUser) {
      login(foundUser);
      navigation.navigate('Main', { user: foundUser });
      Alert.alert('Login efetuado com sucesso');
      refreshUser();
    } else {
      refreshUser();
      Alert.alert('Usuário não encontrado');
    }
  };
  
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
            <TextInput
              placeholder="Escreva seu Nome"
              value={user.login}
              style={{ paddingLeft: 10 }}
              onChangeText={(text) => setUser({ ...user, login: text })}
            />
          </View>
          <Text style={styles.mainText}>Senha</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Escreva seu CPF"
              value={user.senha}
              style={{ paddingLeft: 10 }}
              onChangeText={(text) => setUser({ ...user, senha: text })}
            />
          </View>
          <TouchableOpacity
            onPress={() => handleLogin()}
            style={styles.button}
          >
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
