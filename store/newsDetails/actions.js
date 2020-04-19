export const showNewsModal = () => {
    //console.log("hello Dispatcher");
    return {
      type: "SHOW_NEWS_MODAL",
      data: true
    };
  };
  
  export const HideNewsModal = () => {
    return {
      type: "HIDE_NEWS_MODAL",
      data: false
    };
  };
  