//CONST

// > Const, assim como let, possui escopo local/bloco. Mas contrário a let, variáveis declaradas
// com const não podem ter seu valor retriuido, por serem constantes.
function EscopoConst() {

    //CONST TAMBÉM SEGUE AS MESMAS REGRAS DE LET EM RELAÇÃO AO ESCOPO
    const num = 20;

      if(num > 0) {
        let num2 = 30
        console.log(num)
        
        console.log(num = 30); // > Retornará um erro, pois em const, não se pode retribuir 
                                 // valores,  sendo esta a diferença entre let e const. 
       }

     
}
EscopoConst()