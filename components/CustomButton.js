// Example: components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAccessibility } from '../AccessibilityContext';

const CustomButton = ({ title, onPress, style, textStyle, ...props }) => {
  const { isAppAccessibleModeEnabled } = useAccessibility();

  // Define styles based on the mode
  const buttonStyle = [
    styles.baseButton,
    isAppAccessibleModeEnabled ? styles.accessibleButton : styles.standardButton,
    style, // Allow overriding styles
  ];
  const buttonTextStyle = [
    styles.baseText,
    isAppAccessibleModeEnabled ? styles.accessibleText : styles.standardText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      accessibilityRole="button" // Good practice!
      {...props}
    >
      <Text style={buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  standardButton: {
    backgroundColor: '#007AFF',
  },
  accessibleButton: {
    // Example: Larger padding, maybe different color
    backgroundColor: '#0056b3',
    paddingVertical: 18, // Larger
    paddingHorizontal: 30, // Larger
    minHeight: 60, // Ensure minimum touch target size
  },
  baseText: {
      color: 'white',
  },
  standardText: {
      fontSize: 16,
      fontWeight: '600',
  },
  accessibleText: {
      fontSize: 20, // Larger text
      fontWeight: 'bold',
  },
});

export default CustomButton;

// --- Usage in another screen ---
// import CustomButton from './components/CustomButton';
//
// function MyScreen() {
//   return (
//     <View>
//        <CustomButton title="Continuar" onPress={() => console.log('Pressed')} />
//     </View>
//   );
// }