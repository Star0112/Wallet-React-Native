export const fetchNews = data => {
  return {
    type: "FETCH_NEWS",
    data: data
  };
};

export const fetchingNews = () => {
  return {
    type: "GETTING_NEWS",
    data: []
  };
};

export const fetchAllData = () => {
  return dispatch => {
    //dispatch(fetchingNews());
    fetch("https://vast-eyrie-13251.herokuapp.com/")
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson[0].originalImageUrl);
        dispatch(fetchNews(responseJson));
        //console.log("Respoonse", responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  };
};
export const generatePassPhrase = () => {
  return async dispatch => {
    let passPhrase = await bip39.generateMnemonic();
    dispatch(createPassPhrase(passPhrase));
  };
};
