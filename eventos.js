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
    
function selecionarRegiao(){
        let estadoSelecionado = regiao.value;
        // alert(estadoSelecionado);

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${estadoSelecionado}/estados`)
    .then((resposta)=> resposta.json())
    .then((estados)=>{
        // console.log(estados);
        estados.map((cadaEstado)=>{
            document.getElementById('estado').innerHTML +=`
            <option>${cadaEstado.nome}</option>
            `;
    });
});
}



// fetch(`https://servicodados.ibge.gov.br/api/v1/localidades`)
// .then((resposta)=> resposta.json())
// .then((cidades)=>{
//     cidades.map((cadaCidade)=>{
//         document.getElementById('cidade').innerHTML +=`
//         <option>${cadaCidade.nome}</option>
//         `;
//     });
// });
