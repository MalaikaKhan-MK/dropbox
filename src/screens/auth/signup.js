import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Global constants se color import kiya
import { BRAND_GREEN } from '../../../src/constants/constants';

export default function SignUp({ onNavigate }) {
  return (
    <ScrollView contentContainerStyle={styles.authCenter}>
      <MaterialCommunityIcons 
        name="dropbox" 
        size={80} 
        color={BRAND_GREEN} 
        style={{marginBottom: 20}} 
      />
      <Text style={styles.formTitle}>Create your Dropbox Account</Text>
      
      <TextInput style={styles.input} placeholder="First name" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Last name" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#888" />
      
      <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate('Main')}>
        <Text style={styles.primaryBtnText}>Sign up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => onNavigate('SignIn')}>
        <Text style={styles.footerLink}>
          Already have an account? <Text style={{color: BRAND_GREEN, fontWeight:'bold'}}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  authCenter: { padding: 30, alignItems: 'center', backgroundColor: 'white' },
  formTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 30 },
  input: { width: '100%', height: 55, borderWidth: 1.5, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15 },
  primaryBtn: { backgroundColor: BRAND_GREEN, width: '100%', height: 55, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  primaryBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  footerLink: { marginTop: 20, fontSize: 15 },
});