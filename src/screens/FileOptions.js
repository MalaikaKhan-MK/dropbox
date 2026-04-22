import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BRAND_GREEN } from '../../src/constants/constants';

export default function FileOptions({ visible, file, onClose }) {
  const [isOffline, setIsOffline] = useState(false);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <View style={styles.content}>
        {/* File Header */}
        <View style={styles.header}>
          <Ionicons name={file?.type === 'folder' ? 'folder' : 'document'} size={40} color={BRAND_GREEN} />
          <Text style={styles.fileName}>{file?.name || 'File Name'}</Text>
        </View>

        {/* Options */}
        <TouchableOpacity style={styles.option}><Ionicons name="share-social-outline" size={24} color="white" /><Text style={styles.label}>Share</Text></TouchableOpacity>
        
        <View style={[styles.option, { justifyContent: 'space-between' }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="time-outline" size={24} color="white" />
            <Text style={styles.label}>Make available offline</Text>
          </View>
          <Switch value={isOffline} onValueChange={setIsOffline} trackColor={{ true: BRAND_GREEN, false: '#767577' }} />
        </View>

        <TouchableOpacity style={styles.option}><Ionicons name="star-outline" size={24} color="white" /><Text style={styles.label}>Star</Text></TouchableOpacity>
        <TouchableOpacity style={styles.option}><Ionicons name="download-outline" size={24} color="white" /><Text style={styles.label}>Save to device</Text></TouchableOpacity>
        <TouchableOpacity style={styles.option}><Ionicons name="pencil-outline" size={24} color="white" /><Text style={styles.label}>Rename</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.option, { marginTop: 10 }]}>
          <Ionicons name="trash-outline" size={24} color="#ff4444" />
          <Text style={[styles.label, { color: '#ff4444' }]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' },
  content: { backgroundColor: '#333', padding: 20, borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', bottom: 0, width: '100%' },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#555', paddingBottom: 15 },
  fileName: { color: 'white', fontSize: 18, marginLeft: 15, fontWeight: 'bold' },
  option: { flexDirection: 'row', paddingVertical: 15, alignItems: 'center' },
  label: { color: 'white', marginLeft: 20, fontSize: 16 }
});