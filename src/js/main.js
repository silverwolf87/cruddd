
import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

import { coders } from "../../public/data/database";

import { borrar, create,index } from "./operations";
import { alertSmallSuccess } from "./alerts";

const table =document.querySelector("table")
const tbody = document.querySelector("tbody")
index(coders, tbody)


//llamamos al los imputs

const nameForm = document.querySelector("#name")
const lastNameForm = document.querySelector("#last-name")
const emailForm = document.querySelector("#email")
const form = document.querySelector("form")

//debemos colocarl el escuchador al form con el evento submit , en la funcion pongo event
form.addEventListener("submit", function (event) {
    create(nameForm,lastNameForm,emailForm,coders)
    alertSmallSuccess("el coder fue agregado correctamente")
    // console.log(nameForm.value) //.value me permite traer directamente el valor
    // console.log(lastNameForm.value)
    // console.log(emailForm.value)

    //creamos una variable est
    // const newCoder = {
    //     id: Date.now(),//permite generar un numero diferente
    //     name: nameForm.value,
    //     lastName: lastNameForm.value,
    //     email: emailForm.value
    // }


    // coders.push(newCoder)//ingresa los datos a la variable

    form.reset()
    index(coders, tbody)
    

    event.preventDefault() //permite que la pagina no se recargue automaticamente




})


table.addEventListener("click",function(event){

   borrar(event,coders)
    index(coders, tbody)
    
})




