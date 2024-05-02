import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: '100%',
        height: '100%',
        paddingHorizontal: '5%',
        paddingTop: '5%',
        paddingBottom: '5%'
    }, 
    userProfileContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    emailText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: '10%',
        textAlign: 'center'
    },
    userImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'gray'
    },
    userProfileDataContainer: {
        width: '100%',
        height: '90',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userProfileCard: {
        width: "45%",
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingVertical: '10%',
        margin: '2.5%'
    },
    dataText: {
        color: '#FFFFFF',
        fontSize: 15,
        textAlign: 'center',
        lineHeight: 40
    },
    lableText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 10
    }
})