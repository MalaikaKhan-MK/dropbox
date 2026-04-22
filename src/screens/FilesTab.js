import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BRAND_GREEN } from '../../src/constants/constants';
import { MoreOptionsModal } from '../../src/models/modals'; 

export default function FilesTab({ data }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter data based on search
  const filteredData = data?.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Search Bar Section */}
      <View style={styles.topContainer}>
        <View style={styles.searchSection}>
          <Ionicons name="search" size={20} color="#888" style={{ marginRight: 10 }} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search files..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Action Buttons */}
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.greenButton}>
            <Ionicons name="folder-add" size={20} color="white" />
            <Text style={styles.buttonText}>Folder</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.greenButton}>
            <Ionicons name="cloud-upload" size={20} color="white" />
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList 
        data={filteredData}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        ListEmptyComponent={() => (
            <View style={{ padding: 20, alignItems: 'center' }}>
                <Text style={{ color: '#888' }}>No results found</Text>
            </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.fileRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <FontAwesome5 
                name={item.type === 'folder' ? "folder" : "file-alt"} 
                size={28} 
                color={BRAND_GREEN} 
                solid 
              />
              <View style={{ marginLeft: 15, flex: 1 }}>
                <Text style={styles.fileNameText} numberOfLines={1}>
                  {item.name || 'Untitled'}
                </Text>
              </View>
            </View>

            <TouchableOpacity 
              style={{ padding: 10 }}
              onPress={() => { 
                setSelectedFile(item); 
                setModalVisible(true); 
              }}
            >
              <Ionicons name="ellipsis-vertical" size={22} color="black" />
            </TouchableOpacity>
          </View>
        )}
      />

      <MoreOptionsModal 
        visible={modalVisible} 
        file={selectedFile} 
        onClose={() => setModalVisible(false)} 
        onRename={() => setModalVisible(false)}
        onDelete={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 10,
  },
  greenButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: BRAND_GREEN,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  fileRow: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'center',
  },
  fileNameText: {
    fontSize: 17,
    color: '#333',
    fontWeight: '500',
  },
});