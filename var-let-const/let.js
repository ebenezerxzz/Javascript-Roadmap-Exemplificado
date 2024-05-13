//LET
// > Let, assim como o const, possui escopo local. Podendo ser acesada somente dentro do bloco em que foi declarada, 
// jamais fora, ou seja: LET, por ter escopo de bloco, é acessível dentro de qualquer lugar no contexto em que foi inserida,
// seja dentro de funcões aninhadas , loops ou condicionais.

function Escopo () {
    //let x declarada na função >escopo()<
    let x = 10

    //let i declarada dentro de outro escopo
    for(let i =0; i<= 10; i++){

        //LET X é acessível dentro do loop FOR que está dentro da funcão escopo()
        //pois mesmo com escopo de bloco, ela é acessível em qualquer funcão, loop ou condicional 
        // que esteja dentro da função onde foi declarado
        console.log(x)
    }
    
    //let i não é acessível fora do loop FOR, por ter escopo de BLOCO e não ser acessível fora dele.
    console.log(i) // retornará erro
}

Escopo()