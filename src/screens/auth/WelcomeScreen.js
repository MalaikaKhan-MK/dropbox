import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// Global constants se import kiya
import { BRAND_GREEN } from '../../../src/constants/constants'; 

export default function WelcomeScreen({ onNavigate }) {
  return (
    <View style={styles.authCenter}>
      <View style={styles.logoContainer}>
        <MaterialCommunityIcons name="dropbox" size={100} color={BRAND_GREEN} />
      </View>
      <Text style={styles.authTitle}>Welcome to{'\n'}Dropbox</Text>
      <Text style={styles.authSubtitle}>Back up and sync your files across devices</Text>
      
      <TouchableOpacity style={styles.primaryBtn} onPress={() => onNavigate('SignIn')}>
        <Text style={styles.primaryBtnText}>Sign in</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.secondaryBtn} onPress={() => onNavigate('SignUp')}>
        <Text style={styles.secondaryBtnText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  authCenter: { flex: 1, padding: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  logoContainer: { marginBottom: 30 },
  authTitle: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', color: 'black', marginBottom: 15 },
  authSubtitle: { fontSize: 16, textAlign: 'center', color: '#555', marginBottom: 40 },
  primaryBtn: { backgroundColor: BRAND_GREEN, width: '100%', height: 55, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  primaryBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  secondaryBtn: { width: '100%', height: 55, borderRadius: 8, borderWidth: 1, borderColor: '#ccc', justifyContent: 'center', alignItems: 'center' },
  secondaryBtnText: { fontSize: 18, color: 'black' },
});