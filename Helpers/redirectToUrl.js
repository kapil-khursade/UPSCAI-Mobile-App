import * as Linking from 'expo-linking';

const redirectToUrl = (urlEnd) => {
    const url = `${process.env.EXPO_PUBLIC_URL_HOST}${urlEnd}`;
    Linking.openURL(url);
}

export default redirectToUrl;