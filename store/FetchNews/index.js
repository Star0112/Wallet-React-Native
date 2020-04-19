const newsState = [];

export const News = (state = newsState, action) => {
  switch (action.type) {
    case "GETTING_NEWS":
      return action.data;
    case "FETCH_NEWS":
      return action.data;
    default:
     return state;
  }
};
