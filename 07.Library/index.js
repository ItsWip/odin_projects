const myLibrary = [];

function Book(title,author,pages,read) {
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= read;
}

function delete_book(i){
    myLibrary.splice(i,1);
    print_book();
}

Book.prototype.toggle= function(){
    this.read= !this.read;
}

function toggle_btn(i){
    myLibrary[i].toggle();
    print_book();
}

function print_book(){
    let lab= document.querySelector("#labrary");
    lab.innerHTML="";
    for(let i=0; i< myLibrary.length; i++){
        let my_book= myLibrary[i];
        let print_book= document.createElement("div");
        print_book.setAttribute("class","card");
        print_book.innerHTML=`
        
        <div class="card_img"></div>
        <div class="card_title">
            <H3>Title: ${my_book.title}</H3>
        </div>
        <div class="card_body">
            Author: ${my_book.author} <br>
            Pages: ${my_book.pages} 
        <div> <br>
        <div id="btns">
            <button id="delete" onclick="delete_book(${i})">Remove</button>
            <button id="${my_book.read? "Read" : "Not_read"}" onclick="toggle_btn(${i})">${my_book.read? "Read" : "Want to read"}</button>
        </div>`

        lab.appendChild(print_book);
    }       
}

function addBookToLibrary() {
    let title= document.getElementById("title").value;
    let author= document.getElementById("author").value;
    let pages= document.getElementById("pages").value;
    let read= document.getElementById("read").checked;
    new_book= new Book(title,author,pages,read);
    if(title== ""){
        let message= document.getElementById("message");
        message.innerHTML= `<em>"Title" field is required.</em>`
    }else{   
        myLibrary.push(new_book);
        print_book();
        book_form.style.display="none";
        add_btn.style.display="block";
    }
}

document.addEventListener("DOMContentLoaded",function(){
    let add_btn= document.querySelector("#add_btn");
    add_btn.addEventListener("click", function(){
        let book_form= document.querySelector("#book_form");
        book_form.style.display="block";
        add_btn.style.display="none";
    })

    let add_book= document.querySelector("#add_book");
    add_book.addEventListener("click",function(e){
        
        addBookToLibrary();
    })

    let back=document.querySelector("#back");
    back.addEventListener("click", function(){
        book_form.style.display="none";
        add_btn.style.display="block";
    })
})