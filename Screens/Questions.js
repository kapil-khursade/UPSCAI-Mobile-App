import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, TextInput, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import QuestionsStyleSheet from '../StyleSheets/QuestionsStyleSheet'
import AsyncStorage from '@react-native-async-storage/async-storage';
import fetchQuestions from '../Helpers/fetchQuestions';
import HighlightText from '@sanar/react-native-highlight-text';
import { useIsFocused } from '@react-navigation/native';

const Questions = ({navigation}) => {
  const [questions, setQuestions] = useState([]);
  const [waitForLoading, serWaitForLoading] = useState(false)
  const [sortByPaper, setSortByPaper] = useState(0);
  const [searchWord, setSearchWord] = useState('');
  const [searchWordArr, setSearchWordArr] = useState([]);
  const isFocused = useIsFocused();
  
  useEffect(()=> {
    if (isFocused) {
      fetchQuestionsRequest();
    }
  }, [isFocused]);

  const SearchBarComponent = () => {

    const handleInputChange = (text) => {
      setSearchWord(text);
      if (text == ''){
        setSearchWordArr([]);
      }else{
        setSearchWordArr(text.split(" "));
      }
    };

    return (
      <View style={QuestionsStyleSheet.searchContainer}>
        <TextInput 
         style={QuestionsStyleSheet.searchBar}
         placeholder='Search Question'
         placeholderTextColor={'grey'}
         value={searchWord}
         onChangeText={(val) => handleInputChange(val)}
        />
      </View>)
  }

  const fetchQuestionsRequest = async (sortByPaper) => {
    serWaitForLoading(true);
    setQuestions([]);
    const auth_token = await AsyncStorage.getItem(process.env.EXPO_PUBLIC_APP_AUTH_TOKEN_KEY);
    const response = await fetchQuestions(auth_token, sortByPaper);

    if(response.questions){
      setQuestions(response.questions);
    }else{
      alert(response.error);
    }
    serWaitForLoading(false);
  }

  const QuestionsListCompnent = () => {
    const renderItem = ({ item }) => (
      <View style={QuestionsStyleSheet.questionCard}>
        <Text style={QuestionsStyleSheet.questionText}>
          <HighlightText
            highlightStyle={{ backgroundColor: 'yellow' }}
            searchWords={searchWordArr}
            textToHighlight={item.question}
          />
          </Text>
        <View style={QuestionsStyleSheet.questionInfoCard}>
          <Text style={QuestionsStyleSheet.paperText}>{item.paper}</Text>
          <View style={QuestionsStyleSheet.keywordsContainer}>
            {
              item.keywords.map((keyword, index) => {
                return (
                  <Text key={index} style={QuestionsStyleSheet.keywordText}>
                    <HighlightText
                      highlightStyle={{ backgroundColor: 'yellow', color: 'black' }}
                      searchWords={searchWordArr}
                      textToHighlight={keyword}
                    />
                    </Text>
                )
              })
            }
          </View>
        </View>
        {
          item.answers.map((ans, item) => {
            return (
              <View key={item} style={QuestionsStyleSheet.answerText}>
                <Text>
                  <HighlightText
                      highlightStyle={{ backgroundColor: 'yellow'}}
                      searchWords={searchWordArr}
                      textToHighlight={ans.answer}
                    />
                </Text>
                <Text style={QuestionsStyleSheet.chargedTokenText}>Tokens Chanrged: {ans.chargedToken}</Text>
              </View>
            )
          })
        }
        {item.answer_generation_status == "Your Answer Generation Is In Progress" ? 
          <View style={{...QuestionsStyleSheet.statusContainer, ...{backgroundColor: 'orange'}}}>
            <Text style={QuestionsStyleSheet.statusText}>Your Answer Generation In Progress
            <ActivityIndicator size={20} color='#FFFFFF'/>
            </Text>
          </View>: 
            null
        }
        {item.answer_generation_status != "Generated" ? 
          <View style={{...QuestionsStyleSheet.statusContainer, ...{backgroundColor: 'red'}}}>
            <Text style={QuestionsStyleSheet.statusText}>Oops Something Went Wrong. {item?.error?.status}</Text>
          </View>: 
            null
        }
      </View>
    );

    return (
      <View style={QuestionsStyleSheet.questionContainer}>
        {questions.length > 0? 
        <FlatList
          data={questions}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={waitForLoading}
              onRefresh={() => fetchQuestionsRequest(sortByPaper)}
            />
          }
        /> : 
        <View style={QuestionsStyleSheet.noQuestionsContainer}>
          <Text style={QuestionsStyleSheet.noQuestionsText}>No Questions To Display</Text>
        </View>
        }
      </View>
    );
  }

  const SortAndSearchComponent = () => {
    let paperConfigArr = [
        {name: "All", value: 0}, 
        {name: "General Studies Paper 1", value: 1},
        {name: "General Studies Paper 2", value: 2},
        {name: "General Studies Paper 3", value: 3},
        {name: "General Studies Paper 4 Ethics", value: 4}
      ];
    
    const handleSortButton = (value) => {
      setSortByPaper(value);
      fetchQuestionsRequest(value)
    }  
  
    return(
      <View style={QuestionsStyleSheet.searchAndSortParentContainer}>
        {SearchBarComponent()}
        <View style={QuestionsStyleSheet.sortContainer}>
           {
            paperConfigArr.map((paper, index) => {
                return (
                  <TouchableOpacity 
                  key={index} 
                  style={paper.value == sortByPaper ? QuestionsStyleSheet.selectedSortBtn : QuestionsStyleSheet.sortBtn}
                  disabled={paper.value == sortByPaper}
                  onPress={() => handleSortButton(paper.value)}
                  >
                    <Text style={paper.value == sortByPaper ? QuestionsStyleSheet.selectedSortBtnText : QuestionsStyleSheet.sortBtnText}>{paper.name}</Text>
                  </TouchableOpacity>
                )
            })
           }
        </View>
      </View>
    )
  }
  return (
    <View style={QuestionsStyleSheet.container}>
      {SortAndSearchComponent() }
      {waitForLoading? <ActivityIndicator size={30} color={'#FFFFFF'}/> : <QuestionsListCompnent /> } 
    </View>
  )
}

export default Questions