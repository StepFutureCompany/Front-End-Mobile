import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { useAuth } from '../../context';

export default function DataFunc() {
  const { user } = useAuth();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('../../assets/img/logo.png')} style={styles.imagem} />
        <View style={styles.form}>
          <Text style={styles.mainText}>Dados funcionarios</Text>
          <Text style={styles.inputTitle}>Nome completo</Text>
          <View style={styles.input}>
            <TextInput editable={false} value={user.nome} style={styles.inputValue} />
          </View>
          <Text style={styles.inputTitle}>Cidade</Text>
          <View style={styles.input}>
            <TextInput editable={false} value={user.cidade} style={styles.inputValue} />
          </View>
          <Text style={styles.inputTitle}>Cargo</Text>
          <View style={styles.input}>
            <TextInput editable={false} value={user.cargo} style={styles.inputValue} />
          </View>
          <Text style={styles.inputTitle}>Lotação</Text>
          <View style={styles.input}>
            <TextInput editable={false} value={user.ra.toString()} style={styles.inputValue} />
          </View>
          <Text style={styles.inputTitle}>PIS</Text>
          <View style={styles.input}>
            <TextInput editable={false} value={user.pis} style={styles.inputValue} />
          </View>
          <View style={styles.inputInfo}>
            <TextInput
              multiline
              value="Caso precise alterar alguma informação digira-se ao Departamento de Relações Humanas."
              editable={false}
              style={styles.inputValue}
            />
          </View>
        </View>
        {/* <Button title="Teste" onPress={() => getFunc()} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputValue: {
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
  },
  inputTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#D8D8D8',
    width: 230,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'gray',
    alignItems: 'flex-start',
  },
  inputInfo: {
    width: 230,
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'green',
    marginTop: 20,
  },
  mainText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
  form: {
    backgroundColor: 'white',
    width: 300,
    height: 650,
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
    width: 300,
    height: 100,
    alignSelf: 'center',
    marginBottom: 50,
  },
});
