import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Global constants se color import kiya
import { BRAND_GREEN } from '../../../src/constants/constants'; 

export default function SignIn({ onNavigate }) {
  return (
    <View style={styles.authCenter}>
      <MaterialCommunityIcons 
        name="dropbox" 
        size={80} 
        color={BRAND_GREEN} 
        style={{marginBottom: 20}} 
      />
      
      <Text style={styles.formTitle}>Sign in to Dropbox Account</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#888" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        placeholderTextColor="#888" 
      />
      
      <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate('Main')}>
        <Text style={styles.primaryBtnText}>Sign in</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => onNavigate('SignUp')}>
        <Text style={styles.footerLink}>
          Create your Account <Text style={{color: BRAND_GREEN, fontWeight:'bold'}}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  authCenter: { flex: 1, padding: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  formTitle: { fontSize: 22, fontWeight: 'bold', marginBottom: 30 },
  input: { width: '100%', height: 55, borderWidth: 1.5, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, fontSize: 16 },
  primaryBtn: { backgroundColor: BRAND_GREEN, width: '100%', height: 55, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  primaryBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  footerLink: { marginTop: 20, fontSize: 15 },
});