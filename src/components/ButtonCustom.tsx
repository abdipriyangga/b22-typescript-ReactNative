import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
interface ButtonProps {
  text: string;
  onPress?(): void;
}
export const ButtonCustom = ({ text, onPress }: ButtonProps) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 50,
    backgroundColor: '#04B05D',
    borderRadius: 13,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 15,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});
