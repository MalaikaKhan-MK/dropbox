import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const AppLogo = ({ size = 150, marginTop = 40 }) => {
  return (
    <View style={[styles.container, { marginTop }]}>
      <Image
        source={require('../Assets/Images/DropboxLogo.png')}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});

export default AppLogo;
