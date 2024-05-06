const createQuestion = async (questionBody) => {
    try {
      const url = `${process.env.EXPO_PUBLIC_URL_HOST}/mobile_app_api/create_question`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(questionBody),
      });
        
      const data = await response.json();
      return data;
    } catch (error) {
      return {error: `Failed To Post Question: ${error.toString()}`}
    }
  };
  
  export default createQuestion;
  