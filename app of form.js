
document.querySelector(".btn").addEventListener('click',onclick);

function onclick(e){

//taking the inuted values  

const email  = document.getElementById("inputEmail4").value;


const password  = document.getElementById("inputPassword4").value;


 const homeaddress = document.getElementById("inputAddress").value;
 const homeaddress2 = document.getElementById("inputAddress2").value;
 const state = document.getElementById("inputState").value;


 
 
 let city = document.getElementById("inputCity").value;


 const zip = document.getElementById("inputZip").value;


// concatenating the address

const address = `${homeaddress}  ${city}  ${zip} ${homeaddress2} ${state}`;

// Form action --> when the sign in button is clicked 

e.preventDefault();


let elist ; 

//checking whether elist(e-mail list) array already exist and if so adding the new values to the existing array els
// creating a new array.

if(localStorage.getItem('elist') === null){

elist = [];
}
 
else {
    elist = JSON.parse(localStorage.getItem('elist'))
}

elist.push(email);
console.log(email)

localStorage.setItem('elist', JSON.stringify(elist));

// similary creating checking or creating arrays for passwoard and the rest of the input feilds.

let plist ; 

if(localStorage.getItem('plist') === null){

plist = [];
}
 
else {
    plist = JSON.parse(localStorage.getItem('plist'))
}

plist.push(password);

localStorage.setItem('plist', JSON.stringify(plist));


let alist ; 

if(localStorage.getItem('alist') === null){

alist = [];
}
 
else {
    alist = JSON.parse(localStorage.getItem('alist'))
}

// pushing the input feilds to the newly created array or updated array to the 

alist.push(address);

//updating the array to the local storage ( stirngifying the array to be saved in local storage)

localStorage.setItem('alist', JSON.stringify(alist));


 e.target.innerText = "Submitted";

 // once the user click the submit button the button changes to submitted and the input feilds gets emptied.

//   inputCity.value = "";
//  inputEmail4.value = "";
//   inputPassword4.value = "";
//   inputAddress.value = "";
//  inputAddress2.value = "";
//   inputState.value = "";
//  inputZip.value = "";


 

}

