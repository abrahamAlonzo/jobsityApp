import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './input.style';
import {COLORS} from '../../utils';

const Input = ({
  title = '',
  value = '',
  placeholder = '',
  onChangeText = () => {},
  required = false,
  styleTitle = {},
  styleInput = {},
  styleInputContainer = {},
  placeholderTextColor = COLORS.primaryGray,
}) => {
  return (
    <View style={[styles.container, styleInputContainer]}>
      <Text style={[styles.title, styleTitle]}>
        {title}
        {required && <Text style={styles.requiredText}>*</Text>}
      </Text>
      <TextInput
        style={[styles.inputContainer, styleInput]}
        placeholderTextColor={placeholderTextColor}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;
