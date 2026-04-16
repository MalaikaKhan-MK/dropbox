import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput 
        style={styles.input} 
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Go to Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', padding:20 },
  title: { fontSize:22, fontWeight:'bold', marginBottom:20, textAlign:'center' },
  input: { borderWidth:1, marginBottom:10, padding:10, borderRadius:5 },
  btn: { backgroundColor:'#2ecc71', padding:12, borderRadius:8 },
  btnText: { color:'#fff', textAlign:'center', fontWeight:'bold' },
  link: { marginTop:15, textAlign:'center', color:'blue' }
});