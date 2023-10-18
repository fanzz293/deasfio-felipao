// Escrevendo as classes de um jogo

class heroi { 
    constructor(nome, tipo, idade) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
atacar() { // função que retorna uma estrutura condicional para determinar o ataque de acordo com o respectivo herói.

        let ataque; // Armazena o atrubuto de ataque do herói.
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia'
                break;
            case 'guerreiro':
                ataque = 'espada'
                break;
            case 'monge':
                ataque = 'artes marciais'
                break;
            case 'ninja':
                ataque = 'usou shuriken'
                break;
        } 
        console.log(`O herói ${this.nome} atacou usando ${ataque}`);     
    }
}

// Objeto que retorna uma matriz com os dados dos heróis
const tipoHeroi = [
    new heroi('John', 'mago', 30),
    new heroi('Francisco', 'guerreiro', 21),
    new heroi('Marcelo', 'monge', 48),
    new heroi('Lon', 'ninja', 19)
];

// Para cada iteração, é impresso um herói da lista de tamanho do comprimento da matriz
for (let i = 0; i < tipoHeroi.length; i++) {
    tipoHeroi[i].atacar();
}