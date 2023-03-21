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
const error = document.querySelector('.display');

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

// Use $ identifier to apply shortcut to the function. 
$(select).click(function fileSelect() {
    $("input[type='file']").trigger('click');
  });
  
  $('input[type="file"]').on('change', function() {
    let val = $(this).val();
    $(this).siblings('span').text(val);
})


addBtn.addEventListener('click', addDiv);

function addDiv() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    out.appendChild(newDiv);
    newDiv.appendChild(input);
    input.style.color='#000'
    input.style.fontSize= '16px'
}

