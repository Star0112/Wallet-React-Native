export const showEditModal = () => {
  //console.log("hello Dispatcher");
  return {
    type: "SHOW_EDIT_MODAL",
    data: true
  };
};

export const hideEditModal = () => {
  return {
    type: "HIDE_EDIT_MODAL",
    data: false
  };
};
