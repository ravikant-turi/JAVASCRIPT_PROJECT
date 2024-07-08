const btnp=document.getElementById('#btnParent')
console.log(btnp)

function messageHandler(){
const phoneNumber = '7970978721'; // Replace with the recipient's phone number
const message = 'I like you';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl);
}