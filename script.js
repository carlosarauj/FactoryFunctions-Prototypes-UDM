let falar = {
    falar(){
      console.log(`${this.nome} está falando`)
    },
  }

let comer = {
    comer(){
      console.log(`${this.nome} está comendo`)
    },
  }

let beber = {
    beber(){
      console.log(`${this.nome} está bebendo`)
    }
  }

  let pessoaProt = Object.assign = {...falar, ...comer, ...beber}

  function Pessoa(nome, sobrenome){
  return Object.create(pessoaProt, {
    nome: {value: nome},
    sobrenome: {value: sobrenome}
  }) 
  }    



let p1 = Pessoa('Carlos', 'Araújo')
let p2 = Pessoa('Gislanny', 'Marques')

console.log(p1) 