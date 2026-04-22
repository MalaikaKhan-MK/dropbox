import React, { useState } from 'react'; // useState import kiya
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BRAND_GREEN } from '../../src/constants/constants'; // Global constant use kiya

export default function CreateFolderScreen({ onBack, onSave }) {
  const [folderName, setFolderName] = useState(''); // State variable

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        
        <Text style={styles.title}>Create new folder</Text>
        
        {/* Save button: State mein save folderName bhejega */}
        <TouchableOpacity onPress={() => onSave(folderName)}> 
          <Text style={{color: BRAND_GREEN, fontSize: 16, fontWeight: 'bold'}}>Save</Text>
        </TouchableOpacity>
      </View>
      
      <TextInput 
        style={styles.folderInput} 
        placeholder="Folder Name" 
        placeholderTextColor="#888" 
        autoFocus 
        value={folderName} // Input value bind ki
        onChangeText={setFolderName} // Typing detect karne ke liye
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20 },
  title: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  folderInput: { margin: 20, borderBottomWidth: 2, borderBottomColor: 'white', color: 'white', fontSize: 20 },
});