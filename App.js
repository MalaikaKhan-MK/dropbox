import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BRAND_GREEN } from './src/constants/constants';
import { AddMenuModal, CreateFolderModal, MoreOptionsModal, ShareModal } from './src/models/modals';

// Screen Imports
import WelcomeScreen from './src/screens/auth/WelcomeScreen';
import SignInScreen from './src/screens/auth/signin';
import SignUpScreen from './src/screens/auth/signup';
import HomeTab from './src/screens/HomeTab'; 
import FilesTab from './src/screens/FilesTab';
import ActivityTab from './src/screens/ActivityTab';
import AddMenu from './src/screens/AddMenu';
import CreateFolderScreen from './src/screens/CreateFolderScreen';
import FileOptions from './src/screens/FileOptions';
import AccountTab from './src/screens/AccountScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Welcome');
  const [activeTab, setActiveTab] = useState('Home');
  const [subTab, setSubTab] = useState('Recent');

  const [addVisible, setAddVisible] = useState(false);
  const [optionVisible, setOptionVisible] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([{ id: '1', name: 'Mini Project', type: 'folder' }]);

  // Icon Helper Function
  const getIconName = (tabName, isFocused) => {
    const icons = {
      Home: 'home',
      Files: 'document',
      Activity: 'clipboard',
      Account: 'person-circle'
    };
    return isFocused ? icons[tabName] : `${icons[tabName]}-outline`;
  };

  // Auth Logic
  if (currentScreen === 'Welcome') return <WelcomeScreen onNavigate={setCurrentScreen} />;
  if (currentScreen === 'SignIn') return <SignInScreen onNavigate={setCurrentScreen} />;
  if (currentScreen === 'SignUp') return <SignUpScreen onNavigate={setCurrentScreen} />;
  if (currentScreen === 'CreateFolder') {
    return (
      <CreateFolderScreen
        onBack={() => setCurrentScreen('Main')}
        onSave={(name) => {
          setFiles([{ id: Date.now().toString(), name, type: 'folder' }, ...files]);
          setCurrentScreen('Main');
        }}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar backgroundColor={BRAND_GREEN} barStyle="light-content" />

      {/* Dynamic Content Area */}
      <View style={{ flex: 1 }}>
        {activeTab === 'Home' && <HomeTab subTab={subTab} setSubTab={setSubTab} data={{ Recent: files, Starred: [], Shared: [] }} onOptionPress={(f) => { setSelectedFile(f); setOptionVisible(true); }} />}
        {activeTab === 'Files' && <FilesTab data={files} />}
        {activeTab === 'Activity' && <ActivityTab />}
        {activeTab === 'Account' && <AccountTab />}
      </View>

      {/* FAB - Updated Logic: Show only for Home and Files */}
      {(activeTab === 'Home' || activeTab === 'Files') && (
        <TouchableOpacity style={styles.fab} onPress={() => setAddVisible(true)}>
          <Ionicons name="add" size={35} color="white" />
        </TouchableOpacity>
      )}

      {/* Bottom Nav */}
      <View style={styles.nav}>
        {['Home', 'Files', 'Activity', 'Account'].map(t => (
          <TouchableOpacity key={t} onPress={() => setActiveTab(t)} style={styles.navItem}>
            <Ionicons
              name={getIconName(t, activeTab === t)}
              size={22}
              color={activeTab === t ? BRAND_GREEN : '#888'}
            />
            <Text style={{ fontSize: 10, color: activeTab === t ? BRAND_GREEN : '#888' }}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modals */}
      <AddMenu
        visible={addVisible}
        onClose={() => setAddVisible(false)}
        onCreateFolderTrigger={() => { setAddVisible(false); setCurrentScreen('CreateFolder'); }}
      />
      <FileOptions
        visible={optionVisible}
        onClose={() => setOptionVisible(false)}
        file={selectedFile}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fab: { 
    position: 'absolute', 
    bottom: 90, 
    right: 20, 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: BRAND_GREEN, 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 5,
    zIndex: 1 // Ensures it stays above the list
  },
  nav: { 
    height: 70, 
    flexDirection: 'row', 
    borderTopWidth: 1, 
    borderTopColor: '#eee', 
    backgroundColor: 'white' 
  },
  navItem: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});