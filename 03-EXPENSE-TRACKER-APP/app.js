const balance = document.getElementById('tbalance');
console.log(balance)
const moneyPlus = document.getElementById('income')
console.log(moneyPlus)
const moneyMinus = document.getElementById('expence')
console.log(moneyMinus)
const list = document.getElementById('list')
console.log(list)
const text = document.getElementById('text')
console.log(text)
const amount = document.getElementById('amount')
console.log(amount)
const form = document.getElementById('form')
console.log(form)


const dummyTransaction = [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 20 },

    { id: 3, text: "Book", amount: -10 },

    { id: 4, text: "Camra", amount: 150 },

];

let transactions = dummyTransaction;

function addTransactionDom(transaction) {
    console.log(transaction)
    //Get sign
    const sign = transaction.amount > 0 ? "+" : "-";
    // console.log(sign)

    // icon 
    const icon = transaction.amount > 0 ? "up" : "down";
    // console.log(icon)
    const item = document.createElement("li");
    // console.log(item)
    item.classList.add(transaction.amount > 0 ? "plus" : "minus");
    console.log(item.classList)
    item.innerHTML = `<h4>${transaction.text}</h4> 
    <span style="font-weight: bold; margin-right: 4px;">
    ${sign}$${Math.abs(transaction.amount)}  
    <i class="fa-solid fa-sort-${icon}">
    </i><i class="fa-solid fa-trash-alt delete" 
    onclick=removeItem(${transaction.id})
    ></i>
    </span>`

    list.appendChild(item)

}

function updateValue(params){
    const amount=transactions.map(item=>item.amount)
    const total=amount.reduce((a,b)=>(a+=b),0).toFixed(2)
    const income=amount
    .filter((item)=>item > 0)
    .reduce((a,b)=>(a+=b),0)
    .toFixed(2);
    const expence=amount
    .filter((item)=>item < 0)
    .reduce((a,b)=>(a+=b),0)
    .toFixed(2)

    // console.log(amount)
    // console.log(total)
    // console.log(income)
    // console.log(expence);


    balance.innerText=`$${total}`
    moneyPlus.innerHTML=`$${income} <i class="fa-solid fa-sort-up"></i>`
    moneyMinus.innerHTML=`$${Math.abs(expence).toFixed(2)}<i class="fa-solid fa-sort-down"></i>`
}
function randomId(params){
    return Math.floor(Math.random()*1000)
}
form.addEventListener('submit' , (e)=>{
     e.preventDefault()
     if(text.value.trim()=== ''|| amount.value.trim()===''){
        alert("plese fill you data");
     }
     else{

        const transactionNew={
            id:randomId(),text:text.value,amount:parseInt(amount.value)
        }
        console.log(transactionNew)
        transactions.push(transactionNew)
        addTransactionDom(transactionNew)
        updateValue()
        text.value='';
        amount.value='';
     }
})
function removeItem(id){
    console.log(" clicked id : " +  id)
//    transactions=transactions.filter((transaction)=>{
       
//         transaction.id !== id
//         init()
        
       
// })
 const index=transactions.findIndex(item=>item.id===id)
 transactions=transactions.splice(index,1)
 

}
function init() {
    list.innerHTML = ""

    dummyTransaction.forEach(addTransactionDom);
    updateValue();
}
init();
