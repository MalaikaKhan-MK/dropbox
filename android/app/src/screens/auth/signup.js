import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName}/>
      <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName}/>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword}/>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.link}>Already have account? Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: { flexGrow:1, justifyContent:'center', padding:20 },
  title: { fontSize:22, fontWeight:'bold', marginBottom:20, textAlign:'center' },
  input: { borderWidth:1, marginBottom:10, padding:10, borderRadius:5 },
  btn: { backgroundColor:'#2ecc71', padding:12, borderRadius:8 },
  btnText: { color:'#fff', textAlign:'center', fontWeight:'bold' },
  link: { marginTop:15, textAlign:'center', color:'blue' }
});