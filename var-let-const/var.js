
//VAR
// > Possui escopo de função ou escopo global, pode ser acessada em qualquer lugar do bloco {} em que foi inserido.
// por não possuir escopo de bloco, a variável declarada com VAR pode vazar para fora de blocos condicionais ou loops, como for e while.
 
//Pode ser acessada em scopo global do script 
// Pode ser acessada dentro de funções aninhadas
// Resumindo, VAR tem escopo de função ou GLOBAL no script. Se declarada dentro de uma FUNÇÃO, 
// não pode ser acessada fora dela, apenas dentro.

function FuncaoPrincipal() {
    
    var variavel = 'Kalleb';// pode ser acessada dentro de Declaracao() e NovaFuncao()
    
    function Declaracao() {
        for(var i=0; i <= 10; i++){
            console.log(i)  
        }
        console.log(variavel) // Nestem exemplo, a var variavel pode vazar para fora do bloco for. Diferente de const e let.
    }

    function NovaFuncao() {
        console.log(variavel)
    }
    
    //console.log(variavel2) >// retornara erro, pois variavel2 não pode ser acessada FORA da função
                            // na qual foi declarada, neste caso, na função Declaracao()
    //NovaFuncao()
    Declaracao()
}

FuncaoPrincipal()

