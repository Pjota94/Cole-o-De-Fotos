class Requisicoes{
    static base_url = "https://demo-api-pictures.herokuapp.com/picture";

    static async getDados(){
        const dados = await fetch(this.base_url).then((response) => {return response.json()}).catch((err) => console.log(err))
        
        return dados
    }

    static async adicionarFoto(card){
       await fetch(this.base_url,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(card),
        }).then((response) => response.json())
          .then((response) => {console.log(response.message);})
          .catch((err) => console.log(err))
    }
}

export default Requisicoes;
