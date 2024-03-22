let fromvalue = document.getElementById("fromvalue")

let tovalue = document.getElementById("tovalue")

let startBtn = document.getElementById("start")


let number = document.getElementById("number")


let TimeStart = ()=>{
    if(fromvalue.value == ""){
     alert("Enter the From Value")
    } else{
      if(tovalue.value == ""){
        alert("Enter the To Value")
      } else{
       if (fromvalue.value == 0 && tovalue.value == 0){
number.textContent = "0"

       } 
       else{ 
        let fromval = parseInt(fromvalue.value)
        let toval = parseInt(tovalue.value)
    
   let   uniqueId =    setInterval( ()=>{
        if ( fromval < toval){
            fromval += 1
            number.textContent = fromval 
        } else{
            clearInterval(uniqueId)
        }

         },1000)
       
         

       }
      }

    }
}



startBtn.addEventListener("click",TimeStart)



