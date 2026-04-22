import { StyleSheet, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');
// export const BRAND_GREEN = '#004d20';
// export const LIGHT_GREEN = '#006127';
// export const BG_GRAY = '#f1f1f1';
// src/constants/constants.js
export const BRAND_GREEN = '#2ecc71'; 
export const LIGHT_GREEN = '#a2f5bf'; 
export const BG_GRAY = '#F5F5F5'; // <--- Ye add karo

export const commonStyles = StyleSheet.create({
  primaryBtn: { backgroundColor: BRAND_GREEN, width: '100%', height: 55, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  primaryBtnText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  input: { width: '100%', height: 55, borderWidth: 1.5, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 15, marginBottom: 15, fontSize: 16 },
  authCenter: { flex: 1, padding: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  appHeader: { backgroundColor: BRAND_GREEN, height: 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 40 },
  headerTitle: { color: 'white', fontSize: 26, fontWeight: 'bold' },
});