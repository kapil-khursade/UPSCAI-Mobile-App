const valiateLogin = async(auth_token) => {
    const url = `${process.env.EXPO_PUBLIC_URL_HOST}/mobile_app_api/validate_auth_token?auth_token=${auth_token}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return {error: `Validation Failed: ${error}`}
    }
} 

export default valiateLogin;