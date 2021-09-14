import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface InputProps {
  label: string;
  secureTextEntry?: boolean;
  placeholder?: string;
  onChangeText?: any;
  value?: string;
}
const Input = ({
  label,
  secureTextEntry,
  placeholder,
  onChangeText,
  value,
}: InputProps) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
      />
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: '500',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#04B05D',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});
