import React,{useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  
  const [numero,setNumero] = useState(0)
  function handleNumero(){
    const novo_numero = Math.floor(Math.random()*100)
    setNumero(novo_numero)
  }
  
  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botão}>
        <Text>Gerar numero</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numero: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  botão: {
    backgroundColor: '#ffffffff',
    width:'80%', 
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius:15

  },
});
export default App;
