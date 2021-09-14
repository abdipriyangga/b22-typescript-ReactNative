import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface HeaderProps {
  onPress?: any;
}
const Header = ({ onPress }: HeaderProps) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Icon name="arrow-back-circle-outline" size={30} color="green" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
});
