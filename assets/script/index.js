/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Fakebook

    Noah Miller

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict'

const icon = document.querySelector('.icon')
const select = document.querySelector('.fa');
const input = document.querySelector('.input');
const file = document.querySelector('.image');
const addBtn = document.querySelector('.post');
const drop = document.querySelector('.dropdown');
const out = document.querySelector('.out')
const output = document.querySelector('.output');
const dropOut = document.querySelector('.drop-out');
const error = document.querySelector('.error');
const span = document.querySelector('.select')
const display = document.getElementById('display')
class User {
    #id;
    #name;
    #userName;
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get userName() { return this.#userName; }
    get email() { return this.#email; } 

    getInfo() {
        return `ID: ${id()}\n Name: ${name()}\n ${userName()}\n ${email()} `
    };
}

const user = new User(4227, 'Noah Miller', 'Noseby', 'Noseby@live.ca')
class Subscriber extends User {
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() { return this.#pages; }
    get groups() { return this.#groups; }
    get canMonetize() { return this.#canMonetize; }
}

const sub = new Subscriber(
    4228, 'Andre Specht', 'AndreS', 'Andre@live.ca', 43, 2, true
    );

function getInfo() {
    const newDiv1 = document.createElement('div');
    newDiv1.classList.add('newDiv1');
    
    newDiv1.innerHTML = `
        <div class="user">USER:</div>
        <div class="id1">ID: ${user.id}</div>
        <div class="name1">Name: ${user.name}</div>
        <div class="userName1">User Name: ${user.userName}</div>
        <div class="email1">Email: ${user.email}</div>
        <div class="sub">SUBSCRIBER:</div>
        <div class="id">ID: ${sub.id}</div>
        <div class="name">Name: ${sub.name}</div>
        <div class="userName">User Name: ${sub.userName}</div>
        <div class="email">Email: ${sub.email}</div>
        <div class="pages">Pages: ${sub.pages}</div>
        <div class="groups">Groups: ${sub.groups}</div>
        <div class="monetize">Allowed to Monetize? ${sub.canMonetize}</div>
    `
    out.append(newDiv1);
};


/* -----------------------------------*/
/* File Input                         */
/* -----------------------------------*/

// Use $ identifier to apply shortcut to the function. jQuery syntax (selector)
$(select).click(function fileSelect() {
    $("input[type='file']").trigger('click');
  });
  $('input[type="file"]').on('change', function() {
    let val = $(this).val();
    $(this).siblings('span').text(val);
});

// Use regex to remove fakepath
file.addEventListener('change', function() {
    if (file.value) {
        span.innerHTML = file.value.match(/[\/\\]([\w\d\s\. \-\(\)]+)$/);
    } else {
        file.innerHTML = 'No file chosen yet.'
    }
});

addBtn.addEventListener('click', function () {
    input.value = '';
    }, false);

addBtn.addEventListener('click', newDiv);

function newDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    out.append(newDiv);
    let months = [
        'January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let yy = date.getFullYear();
    let year = (yy < 100) ? yy + 1900 : yy;
    const image1 = document.createElement("IMG");
    image1.src = "..//image/avatar.png";
    image1.classList.add('newImg');
    newDiv.innerHTML = `
        <div class="divName">${image1} ${sub.name}
        <p class="time">${months[month] + " " + day + ", " + year}</p>
        </div>
        
        `;
    
}

const selectFile = event => {
    const [file] = event.target.files;
    if (file) {
      document.getElementById('display').src = URL.createObjectURL(file);
    }
}


