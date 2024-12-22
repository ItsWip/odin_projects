const myLibrary = [];

function Book(title,author,pages,read) {
    this.title= title;
    this.author= author;
    this.pages= pages;
    this.read= read;
}

print_book(){
    let lab= document.querySelector("#labrary");
    for(let i=0; i<= myLibrary.length(); i++){
        let my_book= myLibrary[i];
        let print_book= document.createElement("div");
        print_book.setAttribute("class","card");
        
    }       
}

function addBookToLibrary() {
    let title= document.getElementById("title").value;
    let author= document.getElementById("author").value;
    let pages= document.getElementById("pages").value;
    let read= document.getElementById("read").cheacked;
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