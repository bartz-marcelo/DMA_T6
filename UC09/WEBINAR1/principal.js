class Livro
{
    construtor(pNome, pPreco){
        this.Nome = pNome;
        this.Ppreço = pPreço;

    }
    get Nome(){ return this.Nome;}
    set Nome(pNome){ this.nome = pNome;}

    get Preco(){ return this.Preco;}
    set Preco(pNome){ this.preco = pPreco;}

}

var obj_livro = new Livro ('Lcb wivro de POO', 100);
console.log(obj_livro.nome);
console.log(obj_livro.preco);

