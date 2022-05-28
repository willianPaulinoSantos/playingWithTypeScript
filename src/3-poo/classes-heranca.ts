class Animal {
    public especie;
    public tam;

    constructor(especie: string, tam: number){
        this.especie = especie;
        this.tam = tam;
    }

    checaPerigo(){
        if (this.tam >= 2) return "é perigoso";
    }

    static definicao(){
        return 'Ser vivo do reino Animália'
    }
}

const cao = new Animal ('cannis caramelo', 2);

console.log(cao.checaPerigo())
console.log(Animal.definicao())

/**Diferenças entre public, private and protected 
 * public: propriedade acessível dentro e fora da classe. Da pra modificar seu valor fora da classe.
 * private: propriedade acessível somente dentro da classe.
 * protected: propriedade acessível dentro da classe e das subclasses.
*/