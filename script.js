
  const service_box = document.querySelector(".service_main_box");
  const popup = document.querySelector(".popup_box")
  const popupClose_button = popup.querySelector(".popup_close_button");
  const popupClose_icon = popup.querySelector(".popup_close_icon");

  service_box.addEventListener("click",function(event){
    if(event.target.tagName.toLowerCase() == "button"){
       const item =event.target.parentElement;
       const h3 = item.querySelector("h3").innerHTML;
       const readMoreCont = item.querySelector(".read_more_btn").innerHTML;
       popup.querySelector("h3").innerHTML = h3;
       popup.querySelector(".popup_body").innerHTML = readMoreCont;
       popupBox();
    }

  })

  popupClose_button.addEventListener("click", popupBox);
  popupClose_icon.addEventListener("click", popupBox);

  popup.addEventListener("click", function(event){
     if(event.target == popup){
        popupBox();
     }
  })

  function popupBox(){
    popup.classList.toggle("open");
  }

