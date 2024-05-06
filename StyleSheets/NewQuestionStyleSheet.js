import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%',
        paddingTop: '5%',
    }, 
    questionInputContainer: {
      width: '100%',
      marginBottom: 20
    },
    questionInput: {
        backgroundColor: '#000000',
    },
    queLenText: {
        color: 'grey',
        textAlign: 'right',
        fontSize: 10
    },
    selectPaperContainer: {
        width: '100%',
        marginBottom: 20
    },
    selectPaper: {
        inputAndroid: {
          fontSize: 16,
          paddingHorizontal: 10,
          paddingVertical: 8,
          borderRadius: 8,
          color: '#FFFFFF',
          paddingRight: 30,
        },
        iconContainer: {
          top: 20,
          right: 10,
        },
        placeholder: {
          color: '#FFFFFF',
          fontSize: 12,
          fontWeight: '900',
        },
      },
    selectIcon: {
        backgroundColor: 'transparent',
        borderTopWidth: 10,
        borderTopColor: 'gray',
        borderRightWidth: 10,
        borderRightColor: 'transparent',
        borderLeftWidth: 10,
        borderLeftColor: 'transparent',
        width: 0,
        height: 0,
      },
      keywordContainer: {
        marginBottom: 20
      },
    createNewQuestionBtnContainer: {
      width: '100%',
      marginBottom: 20,
      display: 'flex',
      flexDirection: 'row-reverse'
    },
    createNewQuestionBtn: {
      width: "30%",
      height: 50,
      borderRadius: 50,
      backgroundColor: "#004CD3",
      justifyContent: "center",
      alignItems: 'center'
    },
    createNewQuestionBtnText: {
      color: '#FFFFFF'
    }   
})