import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BRAND_GREEN } from '../../src/constants/constants'; 

export default function AddMenu({ visible, onClose, onCreateFolderTrigger }) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      {/* Background overlay */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      {/* Content */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.item} onPress={onCreateFolderTrigger}>
          <Ionicons name="folder-add" size={24} color={BRAND_GREEN} />
          <Text style={styles.text}>Create Folder</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.item}>
          <Ionicons name="cloud-upload" size={24} color={BRAND_GREEN} />
          <Text style={styles.text}>Upload Files</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' },
  content: { 
    backgroundColor: 'white', 
    padding: 20, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  item: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15 },
  text: { marginLeft: 15, fontSize: 17, fontWeight: '500' }
});