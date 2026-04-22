import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BRAND_GREEN } from '../../src/constants/constants';

export default function AccountTab() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
             <Ionicons name="person" size={40} color="white" />
          </View>
          <TouchableOpacity style={styles.editIconBadge}>
             <Ionicons name="pencil" size={12} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.userName}>Ali khan</Text>
          <Text style={styles.userEmail}>alikhan3322@gmail.com</Text>
        </View>
      </View>

      {/* Cards Row (Storage & Devices) */}
      <View style={styles.cardsRow}>
        {/* Storage Card */}
        <View style={styles.card}>
          <View style={styles.progressCircleContainer}>
            {/* Simple CSS-based Circle Placeholder */}
            <View style={styles.storageCircle} />
          </View>
          <Text style={styles.cardLabel}>Your storage</Text>
          <Text style={styles.storageText}>
            <Text style={{color: '#E67E22', fontWeight: 'bold'}}>89.1mb</Text> / 2.0gb
          </Text>
        </View>

        {/* Devices Card */}
        <View style={styles.card}>
          <View style={styles.deviceIconsRow}>
             <Ionicons name="tablet-portrait-outline" size={24} color="black" />
             <Ionicons name="laptop-outline" size={30} color="black" style={{marginLeft: 10}} />
          </View>
          <Text style={styles.cardLabel}>Devices</Text>
          <Text style={styles.subLabel}>2 Connected</Text>
          <TouchableOpacity style={styles.manageButton}>
            <Text style={styles.manageButtonText}>Manage</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Details List */}
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Details</Text>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Email</Text>
          <Text style={styles.detailValue}>alikhan3322@gmail.com</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Mange devices</Text>
          <Text style={styles.detailValue}>2</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Dropbox</Text>
        </View>

        <TouchableOpacity style={[styles.detailItem, {justifyContent: 'space-between'}]}>
          <Text style={styles.detailLabel}>Manage offline files</Text>
          <Ionicons name="chevron-forward" size={20} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Logout / Delete Actions */}
      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.logoutText}>Sign out of this Dropbox</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.deleteText}>Delete account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    backgroundColor: BRAND_GREEN,
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: 'white' },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    position: 'relative',
  },
  avatarCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1E3A2F',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: BRAND_GREEN,
  },
  editIconBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: BRAND_GREEN,
    padding: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  profileInfo: { marginLeft: 15 },
  userName: { fontSize: 18, fontWeight: 'bold', color: 'black' },
  userEmail: { fontSize: 14, color: '#555' },
  
  cardsRow: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#CCC',
    alignItems: 'flex-start',
  },
  storageCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
    borderColor: '#E67E22',
    marginBottom: 10,
    alignSelf: 'center',
  },
  deviceIconsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardLabel: { fontSize: 14, color: '#333', marginTop: 5 },
  storageText: { fontSize: 13, color: '#333' },
  subLabel: { fontSize: 12, color: '#666', marginBottom: 10 },
  manageButton: {
    backgroundColor: '#4A4A4A',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  manageButtonText: { color: 'white', fontSize: 14 },

  detailsSection: { padding: 20, marginTop: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  detailItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
  },
  detailLabel: { fontSize: 16, color: '#000', flex: 1 },
  detailValue: { fontSize: 14, color: '#555' },
  
  actionSection: {
    marginTop: 40,
    alignItems: 'center',
    paddingBottom: 40,
  },
  actionButton: { padding: 10 },
  logoutText: { color: '#E74C3C', fontSize: 18 },
  deleteText: { color: '#E74C3C', fontSize: 18, marginTop: 10 },
});