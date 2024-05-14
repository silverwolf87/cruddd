import { alertSmallSuccess } from "./alerts";

export function index(array,lugar) {
  lugar.innerHTML =``

  array.forEach((coder) => {
    lugar.innerHTML +=` 
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase">${coder.email}</td>
            <td>                         
            <button type="button"data-id=${coder.id} class="btn btn-primary">details</button>
            <button type="button"data-id=${coder.id} class="btn btn-warning">edit</button>
            <button type="button"data-id=${coder.id} class="btn btn-danger">delete</button>
            </td>
        </tr>`//dentro de cada boton le pasamos el id
  });
}


export function create (nameForm,lastNameForm,emailForm,coders){
  const newCoder = {
    id: Date.now(),//permite generar un numero diferente
    name: nameForm.value,
    lastName: lastNameForm.value,
    email: emailForm.value
}


coders.push(newCoder)
}

export function borrar(event,coders) {
  if (event.target.classList.contains("btn-danger")){
    const idParaEliminar = event.target.getAttribute("data-id")
    console.log(idParaEliminar)
    // const idToDelete = event.target.parentElement.parentElement.firstElementchild.textContent
    // console.log(idToDelete)
  coders.forEach((coder,index) => {
      if (coder.id==idParaEliminar){
          coders.splice(index,1)
          alertSmallSuccess("coder deleted")
      }
  })
}}