const start = () => {

  let count = 0
  while(count<10){
    let opcao = "sair"    
    switch(opcao){
      case "cadastrar":
        console.log("camos cadastrar")
        break
      case "listar":
        console.log("listar")
        break
      case "sair":
        return
    }
  }
}

start()
