export const showManageModal = () => {
  //console.log("hello Dispatcher");
  return {
    type: "SHOW_MANAGE_MODAL",
    data: true
  };
};

export const HideManageModal = () => {
  return {
    type: "HIDE_MANAGE_MODAL",
    data: false
  };
};
