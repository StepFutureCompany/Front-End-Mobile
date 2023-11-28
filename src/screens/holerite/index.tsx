import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { holerite } from '../../mock/func';

const HoleriteScreen = () => {
  const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    generateRandomData();
  }, []);

  const generateRandomData = () => {
    const randomIndex = Math.floor(Math.random() * holerite.length);
    setRandomData(holerite[randomIndex]);
  };

  const renderTextBlock = (title, value) => (
    <>
      <Text style={styles.inputTitle}>{title}</Text>
      <View style={styles.input}>
        <Text style={styles.inputValue}>{value}</Text>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.form}>
          <Text style={styles.mainText}>Holerite</Text>
          {renderTextBlock('Período Trabalhado', randomData.periodo_trabalhado)}
          {renderTextBlock('Valor Salário Bruto', randomData.valor_sal_bruto)}
          {renderTextBlock('Salário Líquido', randomData.valor_sal_liquido)}
          {renderTextBlock('Periculosidade', randomData.Periculosidade)}
          {renderTextBlock('Horas Extra', randomData.HorasExtra)}
          {renderTextBlock('INSS', randomData.INSS)}
          {renderTextBlock('FGTS', randomData.FGTS)}
          {renderTextBlock('Falta', randomData.Falta)}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1ca6f1',
  },
  form: {
    backgroundColor: 'white',
    width: 300,
    height: 'auto',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
    gap: 10,
    borderWidth: 2,
    borderRadius: 16,
    margin: 20,
    padding: 16,
  },
  mainText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
  },
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
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default HoleriteScreen;
