import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function MoreOptionsModal({ visible, onClose, onRename, onDelete, file }) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1} 
        onPress={onClose}
      >
        <View style={styles.menuList}>
          {/* Top Handle */}
          <View style={styles.handle} />

          {/* Header Area */}
          <View style={styles.modalHeader}>
            <View style={styles.iconContainer}>
              <Ionicons name="image-outline" size={60} color="#ccc" />
            </View>
            <Text style={styles.fileNameHeader}>{file?.name || 'file.jpg'}</Text>
          </View>

          {/* Options */}
          <View style={styles.optionsContainer}>
            <MenuOption icon="share-social-outline" text="Share" />
            <MenuOption icon="settings-outline" text="Manage access" />
            
            <View style={styles.rowBetween}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Ionicons name="time-outline" size={24} color="white" />
                <Text style={styles.menuListText}>Make available offline</Text>
              </View>
              <View style={styles.toggleActive} />
            </View>

            <View style={styles.separator} />

            <MenuOption icon="star-outline" text="Star" />
            <MenuOption icon="download-outline" text="Save to device" />
            <MenuOption icon="create-outline" text="Rename" onPress={onRename} />

            <View style={styles.separator} />

            <MenuOption 
              icon="trash-outline" 
              text="Delete" 
              color="#ff5252" 
              onPress={onDelete} 
            />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const MenuOption = ({ icon, text, color = "white", onPress }) => (
  <TouchableOpacity style={styles.menuListItem} onPress={onPress}>
    <Ionicons name={icon} size={24} color={color} />
    <Text style={[styles.menuListText, { color }]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'flex-end',
  },
  menuList: {
    backgroundColor: '#2C2C2C', 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#555',
    borderRadius: 2,
    alignSelf: 'center',
    marginTop: 10,
  },
  modalHeader: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#444',
  },
  iconContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#555',
    padding: 10,
    borderRadius: 10,
  },
  fileNameHeader: {
    color: 'white',
    fontSize: 18,
  },
  optionsContainer: {
    paddingHorizontal: 20,
  },
  menuListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuListText: {
    fontSize: 16,
    marginLeft: 20,
    color: 'white',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  toggleActive: {
    width: 45,
    height: 24,
    backgroundColor: '#34C759',
    borderRadius: 12,
  },
  separator: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 5,
  },
});