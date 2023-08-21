import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = () => {
  return (
    <>
    <View style = {styles.card}>
      <Text style = {styles.titulo}>Hello World!</Text>
      <Text style = {styles.paragrafo}>Isto é um parágrafo</Text>
      <Text style = {{fontSize: 10}}>Isto é um parágrafo</Text>
      <Text style = {styles.paragrafo}>Isto é um parágrafo</Text>
    </View>
    </>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      borderColor: 'blue',
      borderStyle: 'solid',
      borderWidth: 2,
      marginBottom: 20,
    },
    titulo: {
      color:'black',
      fontSize: 30,
      padding: 10,
      marginBottom: 20,
      borderBottomColor: 'green',
      borderStyle: 'solid',
      borderWidth: 5,
      textAling: 'center',
      backgroundColor: 'green',
    },
    paragrafo: {
      fontSize: 12
    }
  });