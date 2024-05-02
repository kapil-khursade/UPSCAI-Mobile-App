const Login  = async(email, password) => {

    const url = `${process.env.EXPO_PUBLIC_URL_HOST}/mobile_app_api/login`;
    const payload = {
        email: email.trim(),
        password: password.trim()
      };
      
    try {
        // Make the fetch request
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        const data = await response.json();
        return data;
      } catch (error) {
        return {
            error: `Login Failed: ${error}`
          }
      }
}

export default Login;