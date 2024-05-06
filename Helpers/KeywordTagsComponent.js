import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const TagInput = ({ handleSetKeywordArr, parentContainerStyles }) => {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  const handleKeyPress = () => {
    if (tag.includes(",")) {
      if (tag.trim() !== '') {
        setTags([...tags, tag.trim().replaceAll(",", "")]);
        setTag('');
        handleSetKeywordArr([...tags, tag.trim().replaceAll(",", "")]);
      }
    }
  };

  const removeTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
    handleSetKeywordArr(newTags);
  };

  return (
    <View style={parentContainerStyles}>
      <View style={styles.tagContainer}>
        {tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
            <TouchableOpacity onPress={() => removeTag(index)} style={styles.deleteButton}>
              <Ionicons name="close" size={15} color="black" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <TextInput
        style={styles.input}
        mode="flat"
        label="Comma Separated Keywords"
        placeholder="Type and add comma to add keywords"
        contentStyle={{ color: '#FFFFFF' }}
        outlineColor='#FFFFFF'
        value={tag}
        onChangeText={(text) => setTag(text)}
        onKeyPress={handleKeyPress}
        maxLength={25}
        disabled={tags.length >= 5}
      />
      <Text style={styles.maxText}>{tags.length}/5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    margin: 2,
  },
  tagText: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#000000',
  },
  deleteButton: {
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#000000',
    marginBottom: 10,
  },
  maxText: {
    color: 'grey',
    textAlign: 'right',
    fontSize: 10,
  },
});

export default TagInput;
