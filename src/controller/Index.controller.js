import Requisicoes from "./Requisicoes.controller.js";
import Foto from "../models/Foto.model.js";

class Index{
    static async listarFotos(){
        const ul = document.querySelector('#cards');
        // ul.innerHTML = "";
        const arrayDados = await Requisicoes.getDados()
        
        arrayDados.forEach((card) => {
            const newCard = new Foto(card.titulo,card.imagem,card.descricao)
            ul.appendChild(newCard.card())
        })
    }
    
    static formulario(){
        const boxForm = document.querySelector('.box-form')
        const form = document.createElement('form');
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
        const inputTitulo = document.createElement('input');
        const inputImagem = document.createElement('input');
        const inputDescricao = document.createElement('textarea');
        const button = document.createElement('button')
        //Adicionando Placeholder
        inputTitulo.placeholder = 'Titulo';
        inputImagem.placeholder = 'Url de Imagem';
        inputDescricao.placeholder = 'Escreva uma descricao';
        inputDescricao.cols = '30';
        inputDescricao.rows = '5';
        //Adicionando texto
        h3.innerText = 'Adicionar uma Nova Imagem';
        button.innerText = 'Adicionar Imagem';
        //Adicionando Ids e Classes
        form.id = 'form';
        button.classList.add('btn');
        //Adicionando Name
        inputTitulo.name = 'titulo';
        inputImagem.name = 'imagem';
        inputDescricao.name = 'descricao';
        button.type = 'submit';
        //Inserindo no HTML
        form.append(h3,inputTitulo,inputImagem,inputDescricao,button);
        boxForm.appendChild(form)
    }
}

export default Index;