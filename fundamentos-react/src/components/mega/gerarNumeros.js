export default function gerarNumeros(qtde){

    let a = []

    while (a.length < qtde) {
        let r = Math.floor(Math.random() * (70 - 1 + 1)) + 1
        if(!a.find(element => element === r))
        a.push(r)
    }

    a.sort((a,b) => a-b)

    return a

}

