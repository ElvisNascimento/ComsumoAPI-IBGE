 //alert('aqui');
    // fetch()//aqui é realizada a busca
    //    .then()//quando a resposta chega, a gente extrai o json dela
    //    .then();//aqui a gente usa o jason extraido.
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes`)
.then((resposta)=> resposta.json())
.then((regioes)=>{
    regioes.map((cadaRegiao)=>{
        document.getElementById('regiao').innerHTML +=`
        <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
        `;
    });
});
function mostrarEstado(){
        document.getElementById('estado').innerHTML = `<option id="opcaoEstado" value="0">--Selecione--</option>`;
        let regiaoSelecionada = regiao.value;
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiaoSelecionada}/estados`)
        .then((resposta)=> resposta.json())
        .then((estados)=>{
            let estadoString = document.getElementById('estado').innerHTML;
            estados.map((cadaEstado)=>{
                estadoString +=`
                <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
            `;
        });
        document.getElementById('estado').innerHTML = estadoString;
    });
}
function mostrarCidade(){
    document.getElementById('cidade').innerHTML = `<option id="opcaocidade" value="0">--Selecione--</option>`;
        let estadoSelecionado = estado.value;
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`)
        .then( resposta => resposta.json())
        .then((cidades)=>{
            console.log(cidades);
            let cidadeString = document.getElementById('cidade').innerHTML;
            cidades.map((cadaCidade)=>{
                cidadeString +=`
                <option value="${cadaCidade.id}">${cadaCidade.nome}</option>
            `;
        });
        document.getElementById('cidade').innerHTML = cidadeString;
    });
}
