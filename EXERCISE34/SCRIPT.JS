
  function addElemnt(){
    const list = document.querySelector(".list");
    const newItem = document.createElement("li")
    newItem.textContent= "New item"
    list.appendChild(newItem);
    

  }

  function removeElemnt(){
    const list = document.querySelector(".list");
    if( list.lastChild){
          list.removeChild(list.lastChild)

    }
  


  }