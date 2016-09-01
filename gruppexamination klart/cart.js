function show_popup() {
  var popupElement;
  popupElement = document.querySelector("#popup-background");
  popupElement.className = "popup-background active";
}

function hide_popup_closebutton() {
  var popupElement;
  popupElement = document.querySelector("#popup-background");
  popupElement.className = "popup-background";
  }