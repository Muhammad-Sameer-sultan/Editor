let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
let unLinkButton = document.getElementById("unlink");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

//List of fontlist
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

// main function run on window load
const initializer = () => {
  highlighter(alignButtons, true);
  highlighter(scriptButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);

  // font style
  fontList.map((value) => {
    let options = document.createElement("option");
    options.value = value;
    options.innerHTML = value;
    fontName.appendChild(options);
  });
  for (let i = 1; i < 8; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }
  fontSizeRef.value = 5;
  // font size end
};



//  functions

// main function
const modifyText = (command, defaultUI, value) => {
  document.execCommand(command, defaultUI, value);
};
//Highlight clicked button
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        if (button.classList.contains("active")) {
          highlighterRemover(className);
        } else {
          highlighterRemover(className);
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};
// remove button from higght light
const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

// remove highlight button

//  <========== Button Click response ==============>

// //For basic operations which don't need value parameter

optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
    // button.style.backgroundColor="red"
  });
});

// For basic operations which don't need value parameter
advancedOptionButton.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, button.value);
    // button.style.backgroundColor="red"
  });
});

// For basic operations which  need value linkes button
linkButton.addEventListener('click',()=>{
  let url =prompt("Enter Url");
  if(/http/i.test(url)){

    modifyText(linkButton.id,false,url)
  }
  else{
    url="http://"+url;
    modifyText(linkButton.id,false,url)
  }
})
// Unlink

unLinkButton.addEventListener('click',()=>{
  modifyText(unLinkButton.id,true,null)
})

window.onload = initializer();
