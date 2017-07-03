function modal_init(){
  var toggle_buttons =document.getElementsByClassName("modal_button");
  for(var i=0;i<toggle_buttons.length;i++){
    toggle_buttons[i].addEventListener("click",toggleWindow);
  }
}
function toggleWindow(){
  var modalWindow=document.getElementById("memorial_modal_window");
  modalWindow.classList.toggle("hidden");
}
