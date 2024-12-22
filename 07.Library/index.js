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
        <div class="card_title">
            <H3>Title: ${my_book.title}</H3>
        </div>
        <div class="card_body">
            Author: ${my_book.author} <br>
            Pages: ${my_book.page} <br>
            ${my_book.read? "Read" : "Want to read"}
        <div>
        <div id="btns">
            <button id="delete" onclick="delete_book(${i})"> Delete</button>
            <button id="read_btn" onclick="toggle_btn(${i})">${my_book.read? "Read" : "Want to read"}</button>
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
    myLibrary.push(new_book);
    print_book();
}

document.addEventListener("DOMContentLoaded",function(){
    let add_btn= document.querySelector("#add_btn");
    add_btn.addEventListener("click", function(){
        let book_form= document.querySelector("#book_form");
        book_form.style.display="block";
    })

    let add_book= document.querySelector("#add_book");
    add_book.addEventListener("click",function(event){
        event.preventDefault();
        addBookToLibrary();
    })
})