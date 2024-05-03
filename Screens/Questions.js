import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import QuestionsStyleSheet from '../StyleSheets/QuestionsStyleSheet'
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchQuestions from '../Helpers/fetchQuestions';

const Questions = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  
  useEffect(()=> {
    fetchQuestionsRequest();
  }, [navigation]);

  const fetchQuestionsRequest = async () => {
    const auth_token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_APP_AUTH_TOKEN_KEY);
    const response = await fetchQuestions(auth_token);

    if(response.questions){
      setQuestions(response.questions);
    }else{
      alert(response.error);
    }
  }

  const handleOnPressQueston = (quesObj) => {

  }

  const QuestionsListCompnent = () => {
    const renderItem = ({ item }) => (
      <View style={QuestionsStyleSheet.questionCard}>
        <Text style={QuestionsStyleSheet.questionText}>{item.question}</Text>
        <View style={QuestionsStyleSheet.questionInfoCard}>
          <Text style={QuestionsStyleSheet.paperText}>{item.paper}</Text>
          <View style={QuestionsStyleSheet.keywordsContainer}>
            {
              item.keywords.map((keyword, index) => {
                return (
                  <Text key={index} style={QuestionsStyleSheet.keywordText}>{keyword}</Text>
                )
              })
            }
          </View>
        </View>
        {
          item.answers.map((ans, item) => {
            return (
              <View key={item} style={QuestionsStyleSheet.answerText}>
                <Text>{ans.answer}</Text>
                <Text style={QuestionsStyleSheet.chargedTokenText}>Tokens Chanrged: {ans.chargedToken}</Text>
              </View>
            )
          })
        }
      </View>
    );

    return (
      <View style={QuestionsStyleSheet.questionContainer}>
        <FlatList
          data={questions}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
  return (
    <View style={QuestionsStyleSheet.container}>
      {questions.length > 0? <QuestionsListCompnent /> : <ActivityIndicator size={30} color={'#FFFFFF'}/>}
    </View>
  )
}

export default Questions