import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: "#01212E",
        width: '100%',
        height: '100%'
    },   
    logoContainer: {
        width: "30%",
        height: "30%",
        marginHorizontal: '35%',
        marginTop: '10%',
      },
    logo: {
        flex: 1,
        width: "100%",
        height: "100%",
      },
    inputContainer: {
        marginHorizontal: "5%",
        height: 'auto',
        width: "90%",
    },
    input: {
        height: 55,
        width: "100%",
        borderColor: "rgb(174, 179, 181)",
        color: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 3,
        marginTop: 10,
        padding: 8,
        borderRadius: 10,
        backgroundColor: '#1e2a33',
      }, 
    placeholderText: {
        fontSize: 10,
        color: '#FFFFFF',
        position: 'relative',
        top: 30,
        left: 8,
        zIndex: 1,
        marginBottom: 4
      } ,  
    loginButtonContainer: {
        marginHorizontal: "5%",
        height: 50,
        width: "90%",
        marginTop: 10,
      },
    loginButton: {
        width: "100%",
        height: 50,
        borderRadius: 50,
        backgroundColor: "#004CD3",
        justifyContent: "center",
        alignItems: 'center'
    } ,
    buttonText: {
        flexWrap: 'nowrap',
        width: '100%',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    versionContainer: {
        marginTop: "45%",
        width: '90%',
        marginHorizontal: '5%'
    },
    eyeIcon: {
        position: "relative",
        top: -40,
        left: '90%',
    },
    forgotPasswordButton: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: 'center'
    }, 
    versionText: {
        color: '#FFFFFF',
        textAlign: 'center',
        width: '100%'
    },
    newAccountButton: {
        width: "100%",
        height: 50,
        borderRadius: 50,
        borderColor: "#004CD3",
        borderWidth: 2,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 15
    },
    newAccountButtonText: {
        color: '#004CD3',
        textAlign: 'center',
        width: '100%'
    }
});

// borderColor: 'red',
// borderWidth: 1,