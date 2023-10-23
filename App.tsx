import React, { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { RadioButton } from 'react-native-paper';

const data = [
  { id: 1, text: 'Janeiro' },
  { id: 2, text: 'Fevereiro' },
  { id: 3, text: 'Março' },
  { id: 4, text: 'Abril' },
  { id: 5, text: 'Maio' },
  { id: 6, text: 'Junho' },
  { id: 7, text: 'Julho' },
  { id: 8, text: 'Agosto' },
  { id: 9, text: 'Setembro' },
  { id: 10, text: 'Outubro' },
  { id: 11, text: 'Novembro' },
  { id: 12, text: 'Dezembro' },
];

export default function DataFunc() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('./src/assets/img/logo.png')} style={styles.imagem} />
        <Text style={{ marginHorizontal: 30, color: 'black', fontSize: 18 }}>
          Nome: Ryan Alberto de Alencar
        </Text>
        <Text style={{ marginHorizontal: 30, color: 'black', fontSize: 18, marginBottom: 50 }}>
          Locação: 01
        </Text>
        <View style={styles.form}>
          <View>
            {data.map((item) => (
              <View key={item.id}>
                <RadioButton.Item
                  color={'black'}
                  label={item.text}
                  value={item.text}
                  status={selected === item.id ? 'checked' : 'unchecked'}
                  onPress={() => setSelected(item.id)}
                  labelStyle={{ color: 'black', fontSize: 14 }}
                  style={{ width: 350, borderRadius: 16 }}
                />
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: 350,
            height: 40,
            backgroundColor: 'white',
            alignContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 16,
            borderColor: 'black',
            borderWidth: 2,
            marginBottom: 50,
          }}
        >
          <Text style={{ top: 8, color: 'black' }}>Baixar PDF</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
    marginBottom: 10,
  },
});
