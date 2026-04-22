import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BRAND_GREEN } from '../../src/constants/constants'; 
import { MoreOptionsModal } from '../../src/models/modals'; 

export default function HomeTab({ subTab, setSubTab, data }) {
  const [isMoreOptionsVisible, setMoreOptionsVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const currentData = data?.[subTab] || [];
  const filteredData = currentData.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
        
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={18} color="#888" />
          <TextInput
            style={styles.searchInput}
            placeholder={`Search in ${subTab}...`}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View style={styles.tabRow}>
        {['Recent', 'Starred', 'Shared'].map(t => (
          <TouchableOpacity key={t} onPress={() => setSubTab(t)} style={styles.tabItem}>
            <Text style={[styles.tabText, subTab === t && styles.activeTabText]}>{t}</Text>
            {subTab === t && <View style={styles.activeLine} />}
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons 
                name={item.type === 'folder' ? "folder" : "document"} 
                size={24} 
                color={BRAND_GREEN} 
              />
              <Text style={styles.rowText}>{item.name}</Text>
            </View>

            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => {
                setSelectedFile(item);
                setMoreOptionsVisible(true);
              }}>
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      <MoreOptionsModal
        visible={isMoreOptionsVisible}
        onClose={() => setMoreOptionsVisible(false)}
        file={selectedFile}
        onRename={() => setMoreOptionsVisible(false)}
        onDelete={() => setMoreOptionsVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { padding: 15, backgroundColor: 'white' },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'black', marginBottom: 10 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 40,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 15 },
  tabRow: { flexDirection: 'row', height: 50, borderBottomWidth: 1, borderBottomColor: '#eee' },
  tabItem: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  tabText: { fontSize: 16, color: '#888' },
  activeTabText: { color: 'black', fontWeight: 'bold' },
  activeLine: { height: 3, backgroundColor: BRAND_GREEN, width: '60%', position: 'absolute', bottom: 0 },
  row: { flexDirection: 'row', justifyContent: 'space-between', padding: 18, borderBottomWidth: 1, borderBottomColor: '#f5f5f5', alignItems: 'center' },
  rowText: { marginLeft: 20, fontSize: 18, color: '#333' },
});