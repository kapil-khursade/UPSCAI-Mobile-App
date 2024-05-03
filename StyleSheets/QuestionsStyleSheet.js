import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%',
        paddingTop: '5%',
    }, 
    questionContainer: {
        width: '100%',
        height: '100%',
    },
    questionCard: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
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
        width: '30%',
        height: 15,
        fontSize: 10,
        textAlign: 'center',
        backgroundColor: '#0d6efd',
        lineHeight: 15,
        color: '#FFFFFF',
        borderRadius: 10
    },
    keywordsContainer: {
        width: '30%',
    },
    keywordText: {
        width: '100%',
        marginLeft: 5,
        paddingHorizontal: 5,
        height: 15,
        fontSize: 10,
        textAlign: 'center',
        backgroundColor: '#6c757d',
        lineHeight: 15,
        color: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 2
    }
})