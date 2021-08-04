import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles/CheckBox.Styles';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CheckBox = ({ selected, onPress, style, textStyle, size = 30, color = '#211f30', text = '', ...props}) => (
    <TouchableOpacity style={[styles.checkBox, style]} onPress={onPress} {...props}>
        <Icon
            size={size}
            color={color}
            name={ selected ? 'check-box' : 'check-box-outline-blank'}
        />

        <Text style={styles.textStyle}> {text} </Text>
    </TouchableOpacity>
)


export default CheckBox;