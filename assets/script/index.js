/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Fakebook

    Noah Miller

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict'

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

    getInfo() {
        return `ID: ${id()}\n Name: ${name()}\n ${userName()}\n ${email()}
        \n ${pages()}\n ${groups()}\n ${canMonetize()}`
    };
}

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

addBtn.addEventListener('click', addDiv);

function addDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    out.append(newDiv);
    let x = $('#input').val();
    newDiv.append(x)
}

const selectFile = event => {
    const [file] = event.target.files;
    if (file) {
      document.getElementById('display').src = URL.createObjectURL(file);
    }
}

let months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
];
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let yy = date.getFullYear();
let year = (yy < 100) ? yy + 1900 : yy;

let timer = document.createElement('div');
timer.innerHTML = months[month] + " " + day + ", " + year;
document.getElementById('time').appendChild(timer);