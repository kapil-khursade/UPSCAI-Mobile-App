import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomBadge = ({ value }) => {
  return (
    <View style={styles.badgeContainer}>
      <Text style={styles.badgeText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: 'red', 
    width: 10,
    height: 10,
    borderRadius: 10
  },
  badgeText: {
    color: 'white', // Customize badge text color
    fontSize: 10, // Adjust badge text size
    fontWeight: 'bold', // Customize badge text weight
  },
});

export default CustomBadge;
