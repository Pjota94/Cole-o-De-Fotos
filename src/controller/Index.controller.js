import Requisicoes from "./Requisicoes.controller.js";
import Foto from "../models/Foto.model.js";

class Index{
    static async listarFotos(){
        const ul = document.querySelector('#cards');
        ul.innerHTML = "";
        const arrayDados = await Requisicoes.getDados()
        
        arrayDados.forEach((card) => {
            const newCard = new Foto(card.titulo,card.imagem,card.descricao)
            ul.appendChild(newCard.card())
        })
    }
    
    static formulario(){
        const boxForm = document.querySelector('.box-form')
        const form = document.createElement('form');
        form.id = 'form';

        form.addEventListener('submit', async (event)=>{
            event.preventDefault()
            const data = {};
            [...event.target].forEach((element) => {
                if(element.value !== ""){
                    data[element.name] = element.value
                }
            })
            await Requisicoes.adicionarFoto(data)
            this.listarFotos()
        })
        //Criando Elementos
        const h3 = document.createElement('h3');
        h3.innerText = 'Adicionar uma Nova Imagem';

        const inputTitulo = document.createElement('input');
        inputTitulo.placeholder = 'Titulo';
        inputTitulo.name = 'titulo';

        const inputImagem = document.createElement('input');
        inputImagem.placeholder = 'Url de Imagem';
        inputImagem.name = 'imagem';

        const inputDescricao = document.createElement('textarea');
        inputDescricao.placeholder = 'Escreva uma descricao';
        inputDescricao.cols = '30';
        inputDescricao.rows = '5';
        inputDescricao.name = 'descricao';

        const button = document.createElement('button')
        button.innerText = 'Adicionar Imagem';
        button.classList.add('btn');
        button.type = 'submit';
        //Inserindo no HTML
        form.append(h3,inputTitulo,inputImagem,inputDescricao,button);
        boxForm.appendChild(form)
    }
}

export default Index;