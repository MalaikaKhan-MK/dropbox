import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="dropbox" size={100} color="#2ecc71" />

      <Text style={styles.title}>Welcome to Dropbox</Text>

      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.btn, { backgroundColor: '#a3e4d7' }]} 
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.btnText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:22, fontWeight:'bold', marginVertical:20 },
  btn: { backgroundColor:'#2ecc71', padding:12, width:'70%', marginTop:10, borderRadius:8 },
  btnText: { color:'#fff', textAlign:'center', fontWeight:'bold' }
});