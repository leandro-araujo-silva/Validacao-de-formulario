const fields = document.querySelectorAll("[required]")

function customValidation(event) {

  // Eliminar o bubble
  event.preventDefault()

  const field = event.target

  // Lógica para verificar se existem erros
  function verifyErrors() {
    let foundError = false;

    for(let error in field.validity){
      // Se não for customError
      // Então verifica se tem erro
      if(field.validity[error]) {
        foundError = error;
      }
    }

    console.log(foundError)

    return foundError;
  }

  const error = verifyErrors()
  console.log("Error Exists: ", error)

  const spanError = field.parentNode.querySelector("span.error")

  if(error) {
    spanError.classList.add("active")
    spanError.innerHTML = "Campo Obrigatório"
  } else {
    spanError.classList.remove("active")
    spanError.innerHTML = ""
  }

  /* Trocar mensagem do bubble */
  /* 

  if (error) {
    // Trocar mensagem de required
    field.setCustomValidity("Esse campo é obrigatório")
  } else {
    field.setCustomValidity("")
  }

  */



  // Trocar mensagem de required
  field.setCustomValidity("Esse campo é obrigatório")
}

for(let field of fields) {
  field.addEventListener("invalid",customValidation)
}











document.querySelector('form').addEventListener('submit', event => {
  console.log('Enviar o formulário')

  // Não vai enviar o formulário
  event.preventDefault()
})
