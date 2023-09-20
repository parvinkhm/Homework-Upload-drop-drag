"use strict"

let fileInput = document.querySelector(".file-input");

let tableBody = document.querySelector(".table-area .table tbody");

let table = document.querySelector("table")

let alerFile = document.querySelector(".file-alert")

let clearBtn = document.querySelector(".btn");

let uploadBox = document.querySelector(".icon");
let uploadIcon = document.querySelector(".icon i");

uploadIcon.addEventListener("click", function () {
  fileInput.click()
});

uploadBox.addEventListener("dragover", function (e) {
  e.preventDefault();
});

uploadBox.addEventListener("drop", function (e) {
  e.preventDefault();
  fileInput.files = e.dataTransfer.files;
  handleFileUpload();
});

fileInput.addEventListener("change", handleFileUpload); 

 function handleFileUpload(){

    for (const file of fileInput.files) {

        let fileReader = new FileReader();

        fileReader.onloadend = (e) => {

            let base64Img = e.currentTarget.result;

            tableBody.innerHTML += `<tr>
            <td><img src ="${base64Img}" alt=""></td>
            <td>${file.name}</td>
            <td>${file.size / 1024} kb</td>
            </tr>`

        }

        fileReader.readAsDataURL(file);

        
    }

    table. classList.remove("d-none")
    alerFile.classList.add("d-none")
    clearBtn.classList.remove("d-none")
}

clearBtn.addEventListener("click", function(){
    tableBody.innerHTML="";
    table.classList.add("d-none")
    this.classList.add("d-none")
    alertFile.classList.remove("d-none")
    fileInput.value = "";
})



