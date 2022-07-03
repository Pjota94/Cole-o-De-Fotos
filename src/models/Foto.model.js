class Foto{
    constructor(titulo,imagem,descricao){
        this.titulo = titulo;
        this.imagem = imagem;
        this.descricao = descricao;
    }

    card(){
        const li = document.createElement('li');
        //Criando elementos.
        const titulo = document.createElement('h4');
        const imagem = document.createElement('img');
        const descricao = document.createElement('p');
        //Inserindo Valores
        titulo.innerText = this.titulo;
        imagem.src = this.imagem;
        descricao.innerText = this.descricao;
        //Atribuindo ao li     
        li.append(titulo,imagem,descricao)

        return li
    }
}

export default Foto;