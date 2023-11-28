import React, { useState } from 'react';
import {
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

export default function ListFunc({ navigation }) {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={require('../../assets/img/logo.png')} style={styles.imagem} />
        <View style={styles.form}>
          <Text style={{ fontSize: 25, color: 'black' }}>Holerite</Text>
          <View>
            {data.map((item) => (
              <View key={item.id}>
                <RadioButton.Item
                  color={'black'}
                  label={item.text}
                  value={item.text}
                  status={selected === item.id ? 'checked' : 'unchecked'}
                  onPress={() => setSelected(item.id)}
                  labelStyle={styles.radioLabel}
                  style={styles.radioButton}
                />
              </View>
            ))}
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Holerite', { selectedMonth: selected });
          }}
        >
          <Text style={styles.buttonText}>Mostrar Holerite</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  locText: {
    marginHorizontal: 30,
    color: 'black',
    fontSize: 18,
    marginBottom: 50,
  },
  nameText: {
    marginHorizontal: 30,
    color: 'black',
    fontSize: 18,
  },
  radioButton: {
    width: 350,
    borderRadius: 16,
  },
  radioLabel: {
    color: 'black',
    fontSize: 14,
  },
  buttonText: {
    top: 8,
    color: 'black',
  },
  button: {
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
  },
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
    marginBottom: 30,
  },
});
