import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BRAND_GREEN } from '../../src/constants/constants'; 

export default function ActivityTab() {
  return (
    <View style={styles.container}>
      {/* Yahan hardcoded color ki jagah BRAND_GREEN use kiya */}
      <Ionicons name="clipboard-outline" size={150} color={BRAND_GREEN} />
      
      <Text style={styles.emptyText}>Keep Track of all your uploads</Text>
      
      {/* <View style={styles.activityBtnRow}>
        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.btnText}>Upload Photos</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: 'white', fontSize: 24, textAlign: 'center', marginVertical: 30 },
  activityBtnRow: { width: '100%', alignItems: 'center' },
  primaryBtn: { 
    backgroundColor: BRAND_GREEN, // Hardcoded color replace kar diya
    padding: 15, 
    borderRadius: 8, 
    width: '60%', 
    alignItems: 'center' 
  },
  btnText: { color: 'white', fontWeight: 'bold' }
});