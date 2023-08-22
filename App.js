import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import Botoes from './components/Botoes';

export default function App() {
  return (
    <ScrollView style={{ margin: 10 }}>

      <Botoes />

      <Card titulo="Sem conteúdo"/>
      <Card titulo="Mobile">
        <Text>React Native</Text>
      </Card>

      <Card titulo="Principal" nome="Caio">
      <Text>parágrafo 1</Text>
      <Text>parágrafo 2</Text>
      <Text>parágrafo 3</Text>
      <Button title='Detalhes' />
      </Card>
      
      <Card titulo="Mobile"></Card>

      <Card titulo="Flamengo Cheirinho"></Card>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    borderColor: 'green',
    borderStyle: 'solid',
    borderWidth: 2,
    marginBottom: 20
  },
  titulo: {
    color: 'black',
    fontSize: 30,
    padding: 10,
    marginBottom: 20,
    borderBottomColor: 'green',
    borderBottomStyle: 'solid',
    borderBottomWidth: 2,
    textAlign: 'center',
    backgroundColor: 'green',
  },
  paragrafo: {
    fontSize: 20
  }
});
