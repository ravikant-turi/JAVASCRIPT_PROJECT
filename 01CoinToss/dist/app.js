const resultText=document.getElementById('#result')
const btn=document.getElementById('#tossbtn');
console.log(btn)
function tossHandler (){

    showLoader()
    setTimeout(() => {
        findResult()
        hideLoader()
     }, 1000); // Delay of 5 seconds
}

function findResult (){
    console.log(resultText.innerText)
    const random= Math.round(Math.random())
    if(random==0){
        resultText.innerText="Result : Tail"
    }
    else{
        resultText.innerText="Result :Head"
    }
}

function showLoader() {
    console.log("show loader called")
    btn.classList.add("hidden")
    document.getElementById("loader").classList.remove("hidden");
  }

  function hideLoader() {
    console.log("hidden loader is coller")
    document.getElementById("loader").classList.add("hidden");
    btn.classList.remove('hidden')
  }