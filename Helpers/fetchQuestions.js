const fetchQuestions = async (auth_token, sortByPaper) => {
   let url = `${process.env.EXPO_PUBLIC_URL_HOST}/mobile_app_api/get_questions?auth_token=${auth_token}`;
   if (sortByPaper > 0){
      url = `${url}&paper_id=${sortByPaper}`
   }
   try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        return {error: `Validation Failed: ${error}`}
    }
}

export default fetchQuestions;