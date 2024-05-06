import { View, Text, TouchableOpacity} from 'react-native'
import { ActivityIndicator, TextInput } from 'react-native-paper';
import React, { useEffect, useState } from 'react'
import NewQuestionStyleSheet from '../StyleSheets/NewQuestionStyleSheet'
import RNPickerSelect from 'react-native-picker-select';
import KeywordTagsComponent from '../Helpers/KeywordTagsComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createQuestion from '../Helpers/createQuestion';
import { useIsFocused } from '@react-navigation/native';

const NewQuestion = ({navigation}) => {
  const [questionLenght, setQuestionLength] = useState(0);
  const [questionText, setQuestionText] = useState('');
  const [paperId, setPaperId] = useState();
  const [keywordArr, setKeywordArr] = useState([]);
  const [waitForQuestionPost, setWaitForQuestionPost] = useState(false);
  const maxQuestionLength = 150;
  const isFocused = useIsFocused();

  const handleSetKeywordArr = (value) => {
    setKeywordArr(value);
  }

  useEffect(()=>{
    if (isFocused){
      clearData();
    }
  }, [isFocused])

  const clearData = () => {
      setPaperId();
      setKeywordArr([]);
      setQuestionText('')
      setQuestionLength(0);
  }

  const NewQuestionInput = () => {
    const handleQuestionInput = (text) => {
      setQuestionText(text);
      setQuestionLength(text.length);
    }
    return(
        <View style={NewQuestionStyleSheet.questionInputContainer}>
           <TextInput
            style={NewQuestionStyleSheet.questionInput}
            mode="flat"
            label="Question"
            placeholder="Type question"
            multiline={true}
            numberOfLines={2}
            contentStyle={{color: '#FFFFFF'}}
            outlineColor='#FFFFFF'
            value={questionText}
            onChangeText={(text) => handleQuestionInput(text)}
            maxLength={maxQuestionLength}
           />
           <Text style={NewQuestionStyleSheet.queLenText}>{questionLenght}/{maxQuestionLength}</Text>
        </View>
    )
  }

  const SelectPaper = () => {
    let paperConfigArr = [
      {label: "General Studies Paper 1", value: 1},
      {label: "General Studies Paper 2", value: 2},
      {label: "General Studies Paper 3", value: 3},
      {label: "General Studies Paper 4 Ethics", value: 4}
    ];
    return(
      <View style={NewQuestionStyleSheet.selectPaperContainer}>
        <RNPickerSelect
            onValueChange={(value) => setPaperId(value)}
            items={paperConfigArr}
            placeholder={{label: 'Select Paper'}}
            style={NewQuestionStyleSheet.selectPaper}
            Icon={() => {
              return (
                <View
                  style={NewQuestionStyleSheet.selectIcon}
                />
              );
            }}
          />
    </View>
    )
  }

  const handleCreateQuestionBtn = async() =>{
    setWaitForQuestionPost(true)
    const auth_token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_APP_AUTH_TOKEN_KEY);
    const quesionPostBody = {
      auth_token: auth_token,
      paperId: paperId,
      questionText: questionText,
      commaSeperatedKeywords: keywordArr.join(",")
    }
    const response = await createQuestion(quesionPostBody);
    console.log(JSON.stringify(response, null, 2));
    if(response.questionId){
      navigation.navigate('Questions');
    }else{
      alert(`Failed To Create Question: ${response.error}`)
    }
    setWaitForQuestionPost(false);
  }

  return (
    <View style={NewQuestionStyleSheet.container}>
      {isFocused && 
      <>
      {SelectPaper()}
      {NewQuestionInput()}
      <KeywordTagsComponent 
        handleSetKeywordArr={(val) => handleSetKeywordArr(val)} 
        parentContainerStyles={NewQuestionStyleSheet.keywordContainer}
      />
      <View style={NewQuestionStyleSheet.createNewQuestionBtnContainer}>
        <TouchableOpacity style={NewQuestionStyleSheet.createNewQuestionBtn}
          onPress={() => handleCreateQuestionBtn()}
          disabled={waitForQuestionPost}
        >
          {waitForQuestionPost? <ActivityIndicator size={24} color='#FFFFFF'/> : <Text style={NewQuestionStyleSheet.createNewQuestionBtnText}>Create</Text>}
        </TouchableOpacity>
      </View>
      </>}
    </View>
  ) 
}

export default NewQuestion