import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: '100%',
        height: '100%',
        paddingHorizontal: '2%',
    }, 
    questionContainer: {
        width: '100%',
        marginTop: '1%',
        marginBottom: 60,
        zIndex: -1,
    },
    questionCard: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
    },
    questionText: {
        fontWeight: '900',
        textAlign: 'justify'
    },
    questionInfoCard: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        borderTopColor: 'grey',
        borderTopWidth: 0.2,
        paddingTop: 5
    },
    paperText: {
        width: '40%',
        height: 15,
        fontSize: 7,
        textAlign: 'center',
        backgroundColor: '#0d6efd',
        lineHeight: 15,
        color: '#FFFFFF',
        borderRadius: 10
    },
    keywordsContainer: {
        width: '50%',
    },
    keywordText: {
        width: '100%',
        marginLeft: 5,
        paddingHorizontal: 5,
        height: 15,
        fontSize: 7,
        textAlign: 'center',
        backgroundColor: '#6c757d',
        lineHeight: 15,
        color: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 2,
    },
    answerText: {
        borderWidth: 0.2,
        borderColor: 'grey',
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        textAlign: 'justify'
    },
    chargedTokenText: {
        width: '30%',
        marginLeft: 5,
        paddingHorizontal: 5,
        height: 15,
        fontSize: 7,
        textAlign: 'center',
        backgroundColor: '#6c757d',
        lineHeight: 15,
        color: '#FFFFFF',
        borderRadius: 10,
        marginTop: 2
    },
    statusContainer: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginTop: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statusText: {
        width: '100%',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 8
    },
    searchAndSortParentContainer: {
       width: '100%',
       zIndex: 1,
    },
    searchContainer: {
        width: '100%',
        marginTop: 5
    },
    searchBar: {
        width: '100%',
        height: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'grey',
        paddingHorizontal: 10,
        color: '#FFFFFF'
    },
    sortContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    sortBtn: {
        width: '18%',
        height: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'grey',
        paddingTop: 5
    },
    selectedSortBtn: {
        width: '18%',
        height: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        backgroundColor: 'grey',
        paddingTop: 5
    },
    sortBtnText: {
        width: '100%',
        color: 'grey',
        textAlign: 'center',
        fontSize: 7
    },
    selectedSortBtnText: {
        width: '100%',
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 7,
        fontWeight: '900'
    },
    noQuestionsContainer: {
        width: '100%',
        height: 40,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    noQuestionsText: {
        width: '100%',
        textAlign: 'center',
        lineHeight: 40
    }
})