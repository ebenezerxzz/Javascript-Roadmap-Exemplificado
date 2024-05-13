//MANEIRA DE SE ATRIBUIR E ACESSAR OS VALORES DA PRÓPRIA CLASSE BASE 
//SEM NECESSARIAMENTE INSTANCIAR NOVOS OBJETOS APARTIR DELA:
class Pessoa {
    static exibirPropriedades(pessoa) {
        console.log(`Name is ${pessoa.nome}, old is ${pessoa.idade}`)
    }
};

Pessoa.exibirPropriedades({ nome: 'ebenezerxzz', idade: 22 });

//CRIANDO INSTÂNCIAS DE UMA CLASSE MÃE/BASE
class Object1 {
    //Deve-se criar um construtor dentro da classe base, para que 
    //as propriedades dos objetos instanciados apartir dela, passem por ele.
    //desta forma, o construtor recebe novos valores, os quais serão acessados pelos métodos:
    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }
    //Método cirado para exbir os valores das propriedades referentes aos objetos instanciados
    methodForShowProps() {
        console.log(`Param 1 is ${this.param1}, param2 is ${this.param2}`)
    }
}

//Criando uma nova instância da classe base, que terá suas próprias características
//deve-se passar como argumento da nova instância os valores refetentes ao novo objeto, 
//nesse caso, NewObject:
let NewObject = new Object1('referenceParam1', 'referenceParam2');

//Depois de criar uma instância, para acessar os seus valores no console é
//necessário chamar o objeto instanciado juntamente com o método cirado na classe base
//neste caso, methodforshowprops():
NewObject.methodForShowProps()
