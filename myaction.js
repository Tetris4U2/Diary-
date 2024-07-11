import React from 'react';
import {createRoot} from 'react-dom/client';
const name = document.getElementById("name");
const passWord = document.getElementById("passWord");
const title = document.getElementById("title");
if(passWord == "Wgtc2023"){
  title.innerHTML = "Welcome to my Journaist Journey";
}else{
  title.innerHtml = "please try again"
   }

const makeHeadLine = React.createElement(
  "h1", 
                                         {id: "errorTitle",
                                         },
  "Please enter your right password"
);
function makeErrorObjects(){
const ErrorPahe = {
     photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFG_7e-MMbgyfmGYyrxU2YErfMO9sBO0tZwQ&usqp=CAU",
     message: <h1>please enter the right password</h1>,
    hint: <p>please contact me using my email (ariannajohnson396@gmail.com!) </p>
  
   }
}