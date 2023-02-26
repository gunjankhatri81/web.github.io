let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

const x=document.getElementById('click');
x.onclick=()=>{
    alert("Not updated");
}
const y=document.getElementById('member');
y.onclick=()=>{
    alert("Server is down .Please try again later");
}
const z=document.getElementById('learn');
z.onclick=()=>{
    alert("Site is updating .Please try again later");
}
const z1=document.getElementById('learn1');
z1.onclick=()=>{
    alert("Site is updating .Please try again later");
}
const z2=document.getElementById('learn2');
z2.onclick=()=>{
    alert("Site is updating .Please try again later");
}
const z3=document.getElementById('learn3');
z3.onclick=()=>{
    alert("Site is updating .Please try again later");
}
const z4=document.getElementById('learn4');
z4.onclick=()=>{
    alert("Site is updating .Please try again later");
}
const z5=document.getElementById('learn5');
z5.onclick=()=>{
    alert("Site is updating .Please try again later");
}
const z6=document.getElementById('learn6');
z6.onclick=()=>{
    alert("Site is updating .Please try again later");
}
const z7=document.getElementById('learn7');
z7.onclick=()=>{
    alert("Site is updating .Please try again later");
}

const toggle = document.getElementById('toggledark');
const body =document.querySelector('body');
     
    toggle.addEventListener('click',function(){
        this.classList.toggle('bi-moon');
        if(this.classList.toggle('bi-brightness-high-fill')){
            body.style.background='white';
            body.style.color="black";
            body.style.transition='2s';
        }else{
            body.style.background='black';
            body.style.color="black";
            body.style.transition='2s';
        }
    }) 


const name1 = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const number = document.getElementById('number');
const submit = document.getElementsByClassName('submit');

function sendEmail(){
const ebody=`Name: ${name1.value}
  <br>
   Email : ${email.value}
   <br>
   Message: ${message.value}`;
Email.send({
Host : "smtp.elasticemail.com",
Username : "gunjankhatri1283@gmail.com",
Password : "116F2CECA92527B8E18329E22395AE564CF7",
To : 'gunjan.khatri@cumminscollege.in',
From : 'gunjankhatri1283@gmail.com',
Subject : "Tried to contact from" + email.value,
Body : ebody
}).then(
message => alert("okay")
);
console.log(ebody)
}

