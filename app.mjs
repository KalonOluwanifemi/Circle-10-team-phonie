function startApp() {
      let reset = document.getElementById('reset')
    reset.addEventListener('click', ()=>{
        userDisplay.innerText = "";
    })
let mobileNumber = document.getElementById('tel');
mobileNumber.addEventListener("input", telCheck);
let userDisplay = document.getElementById("userInterface");
let form = document.getElementById('form');

function telCheck (){
     let mobileNumberValue = mobileNumber.value;
     let mobileLength = mobileNumberValue.length;
     let firstFourNum = mobileNumberValue.slice(0, 4);
     let firstPrefix = mobileNumberValue.slice(0, 1);
    var digits = /^[0-9]+$/;
 
 if(mobileNumberValue.match(digits)){
     if(firstPrefix == 0 && mobileLength == 11){
         var prefix = Number(mobileNumberValue.slice(1, 4));
     }else if (firstPrefix !== 0 && mobileLength == 10) {
         var prefix = Number(mobileNumberValue.slice(0, 3));
     }else if (firstFourNum == "+234" && mobileLength == 14){
         prefix = Number(mobileNumberValue.slice(5, 8));
     } 
    }
    let airtel = [802, 808, 708, 812, 701, 902];
    let mtn = [803, 806, 703, 706, 903, 906, 816, 814, 810, 813, 704, 816];
    let $9mobile = [809, 818, 817, 909, 908];
    let glo = [805, 807, 705, 815, 811, 905, 915];

    if(airtel.includes(prefix)){
        userDisplay.innerHTML = "<img src = '/images/airtel.png'/ style = height:50px; width:60px >"
    }
    else if (mtn.includes(prefix)){
        userDisplay.innerHTML = "<img src = '/images/mtn.png'/ style = height:50px; width:60px >"
    }else if($9mobile.includes(prefix)){
        userDisplay.innerHTML = "<img src = '/images/etisalat.png'/ style = height:50px; width:60px >"
    }
    else if(glo.includes(prefix)){
        userDisplay.innerHTML = "<img src = '/images/glo img.png'/ style = height:70px; width:70px >"
    }
     else{
        userDisplay.innerText = "This is not a Nigerian number";
     };
}

}
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //