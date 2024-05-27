var telefone = document.querySelector('.input_3');

telefone.addEventListener("input", () => {
  var  limpaValor= telefone.value.replace(/\D/g, "");
  var arrayNumeros= limpaValor.split('');
  var numeroFormatado = '';

    if(arrayNumeros.length > 0){
    numeroFormatado += `(${arrayNumeros.slice(0, 2).join("")})`;
    }
    if(arrayNumeros.length > 2){
    numeroFormatado += ` ${arrayNumeros.slice(2, 7).join("")}`;
    }
    if(arrayNumeros.length > 7) {
        numeroFormatado += `-${arrayNumeros.slice(7, 11).join("")}`;
    }
    telefone.value = numeroFormatado;
});

document.getElementById('nome_').addEventListener('input', function (e) {

    this.value = this.value.replace(/\d/g, '');
});


let cpf = document.querySelector('#cpf_');

cpf.addEventListener('input', () => {
    var  limpaValorCpf= cpf.value.replace(/\D/g, "");
    var arrayCPF= limpaValorCpf.split('');
    var cpfFormatado = '';
    
    if(arrayCPF.length > 0){
        cpfFormatado += `${arrayCPF.slice(0, 3).join("")}`;
    }
    if(arrayCPF.length > 3){
        cpfFormatado += `.${arrayCPF.slice(3, 6).join("")}`;
    }
    if(arrayCPF.length > 6){
        cpfFormatado += `.${arrayCPF.slice(6, 9).join("")}`;
    }
    if(arrayCPF.length > 9){
        cpfFormatado += `-${arrayCPF.slice(9, 11).join("")}`;
    }
    
    cpf.value = cpfFormatado;
});

const inserirDados = (dados) => {
    document.getElementById('cidade_').value = dados.localidade;
    document.getElementById('Uf_').value = dados.uf;
    document.getElementById('bairro_').value = dados.bairro;
    document.getElementById('logradouro_').value = dados.logradouro;
}

const  consultaEndereço = async ()=>{

    let cep = document.querySelector('.input_6').value;
    let link = `https://viacep.com.br/ws/${cep}/json/`;

    const informacoes = await fetch(link);
    const dados = await informacoes.json();

    if(dados.hasOwnProperty('erro')){
     alert('CEP inválido!');
     document.querySelector('.input_6').value = '';
    
    } else {
        inserirDados(dados);
    }
}

let inputCep = document.querySelector('.input_6');
inputCep.addEventListener('input', () =>{
    var  limpaValorCep= inputCep.value.replace(/\D/g, "");

    inputCep.value = limpaValorCep;
});


document.querySelector('.input_6').addEventListener('focusout', consultaEndereço);

function salvarLista(){
    let inputNome = document.getElementById('nome_');
    let inputCpf = document.getElementById('cpf_');
    let inputtelefone = document.getElementById('telefone_');
    let inputEmail = document.getElementById('email_');
    let inputCep = document.getElementById('cep_');
    let inputUf = document.getElementById('Uf_');
    let inputCidade = document.getElementById('cidade_');
    let inputBairro = document.getElementById('bairro_');
    let inputLogradouro = document.getElementById('logradouro_');
    let inputNumero = document.getElementById('numero_');
    function mudarCorBotao(){
        const botao = document.querySelector('.botao-cadastrar')
        botao.style.backgroundColor = '#d3d3d3';
        botao.style.color = '#484d50';
        botao.disabled = true;
    } 

    function limaprInputs(){
        inputNome.value = '';
        inputCpf.value = '';
        inputtelefone.value = '';
        inputEmail.value = '';
        inputCep.value = '';
        inputUf.value = '';
        inputCidade.value = '';
        inputBairro.value = '';
        inputLogradouro.value = '';
        inputNumero.value = '';
    }

   
   if(inputNome.value == ''){
        alert('Por favor preencha todos os campos!');
    } else if(inputCpf.value == ''){
        alert('Por favor preencha todos os campos!');
    } else if(inputtelefone.value ==''){
        alert('Por favor preencha todos os campos!');
    } else if( inputEmail.value ==''){
        alert('Por favor preencha todos os campos!');
    } else if( inputCep.value ==''){
        alert('Por favor preencha todos os campos!');
    } else if( inputUf.value == '' ){
        alert('Por favor preencha todos os campos!');
    } else if( inputCidade.value == ''){
        alert('Por favor preencha todos os campos!');
    } else if( inputBairro.value == ''){
        alert('Por favor preencha todos os campos!');
    } else if(inputLogradouro.value == ''){
        alert('Por favor preencha todos os campos!');
    } else if(inputNumero.value ==''){
        alert('Por favor preencha todos os campos!');
    } else if(document.getElementById('nome_cilente1').innerHTML == '' && document.getElementById('cpf_cliente1').innerHTML == '' && document.getElementById('telefone_cliente1').innerHTML =='' && document.getElementById('email_cliente1').innerHTML == '' && document.getElementById('cep_cilente1').innerHTML == '' && document.getElementById('uf_cliente1').innerHTML =='' && document.getElementById('cidade_cliente1').innerHTML =='' && document.getElementById('bairro_cliente1').innerHTML =='' && document.getElementById('logradouro_cliente1').innerHTML =='' && document.getElementById('numero_cliente1').innerHTML =='' ){
        document.getElementById('nome_cilente1').innerHTML = 'Nome: ' + inputNome.value;
        document.getElementById('cpf_cliente1').innerHTML = 'CPF: ' + inputCpf.value;
        document.getElementById('telefone_cliente1').innerHTML = 'Telefone: ' + inputtelefone.value;
        document.getElementById('email_cliente1').innerHTML = 'E-mail: ' + inputEmail.value;
        document.getElementById('cep_cilente1').innerHTML = 'CEP: ' + inputCep.value;
        document.getElementById('uf_cliente1').innerHTML = 'UF: ' + inputUf.value;
        document.getElementById('cidade_cliente1').innerHTML = 'Cidade: ' + inputCidade.value;
        document.getElementById('bairro_cliente1').innerHTML = 'Bairro: ' + inputBairro.value;
        document.getElementById('logradouro_cliente1').innerHTML = 'Logradouro: ' + inputLogradouro.value;
        document.getElementById('numero_cliente1').innerHTML = 'Número: ' + inputNumero.value;
        limaprInputs(); 

    } else if(document.getElementById('nome_cilente1').innerHTML !== '' && document.getElementById('cpf_cliente1').innerHTML !== '' && document.getElementById('telefone_cliente1').innerHTML !=='' && document.getElementById('email_cliente1').innerHTML !== '' && document.getElementById('cep_cilente1').innerHTML !== '' && document.getElementById('uf_cliente1').innerHTML !=='' && document.getElementById('cidade_cliente1').innerHTML !=='' && document.getElementById('bairro_cliente1').innerHTML !=='' && document.getElementById('logradouro_cliente1').innerHTML !=='' && document.getElementById('numero_cliente1').innerHTML !=='' &&  document.getElementById('nome_cliente2').innerHTML =='' && document.getElementById('cpf_cliente2').innerHTML =='' && document.getElementById('telefone_cliente2').innerHTML =='' && document.getElementById('email_cliente2').innerHTML =='' && document.getElementById('cep_cilente2').innerHTML =='' && document.getElementById('uf_cliente2').innerHTML ==''  && document.getElementById('cidade_cliente2').innerHTML ==''  && document.getElementById('bairro_cliente2').innerHTML =='' && document.getElementById('logradouro_cliente2').innerHTML =='' && document.getElementById('numero_cliente2').innerHTML ==''){
        document.getElementById('nome_cliente2').innerHTML = 'Nome: ' + inputNome.value;
        document.getElementById('cpf_cliente2').innerHTML ='CPF: ' + inputCpf.value;
        document.getElementById('telefone_cliente2').innerHTML ='Telefone: ' + inputtelefone.value;
        document.getElementById('email_cliente2').innerHTML =  'E-mail: ' + inputEmail.value;
        document.getElementById('cep_cilente2').innerHTML = 'CEP: ' + inputCep.value;
        document.getElementById('uf_cliente2').innerHTML = 'UF: ' + inputUf.value;
        document.getElementById('cidade_cliente2').innerHTML = 'Cidade: ' + inputCidade.value;
        document.getElementById('bairro_cliente2').innerHTML = 'Bairro: ' + inputBairro.value;
        document.getElementById('logradouro_cliente2').innerHTML = 'Logradouro: ' + inputLogradouro.value;
        document.getElementById('numero_cliente2').innerHTML = 'Número: ' + inputNumero.value;
        limaprInputs();

    } else if(document.getElementById('nome_cliente2').innerHTML !=='' && document.getElementById('cpf_cliente2').innerHTML !=='' && document.getElementById('telefone_cliente2').innerHTML !=='' && document.getElementById('email_cliente2').innerHTML !=='' && document.getElementById('cep_cilente2').innerHTML !=='' && document.getElementById('uf_cliente2').innerHTML !==''  && document.getElementById('cidade_cliente2').innerHTML !==''  && document.getElementById('bairro_cliente2').innerHTML !=='' && document.getElementById('logradouro_cliente2').innerHTML !=='' && document.getElementById('numero_cliente2').innerHTML !=='' && document.getElementById('nome_cliente3').innerHTML =='' && document.getElementById('cpf_cliente3').innerHTML =='' && document.getElementById('telefone_cliente3').innerHTML =='' && document.getElementById('email_cliente3').innerHTML =='' && document.getElementById('cep_cilente3').innerHTML =='' && document.getElementById('uf_cliente3').innerHTML ==''   && document.getElementById('cidade_cliente3').innerHTML ==''   && document.getElementById('bairro_cliente3').innerHTML =='' && document.getElementById('logradouro_cliente3').innerHTML ==''&& document.getElementById('numero_cliente3').innerHTML ==''){
       document.getElementById('nome_cliente3').innerHTML = 'Nome: ' + inputNome.value;
       document.getElementById('cpf_cliente3').innerHTML = 'CPF: ' + inputCpf.value;
       document.getElementById('telefone_cliente3').innerHTML ='Telefone: ' + inputtelefone.value;
       document.getElementById('email_cliente3').innerHTML = 'E-mail: ' + inputEmail.value;
       document.getElementById('cep_cilente3').innerHTML = 'CEP: ' + inputCep.value;
       document.getElementById('uf_cliente3').innerHTML = 'UF: ' + inputUf.value;
       document.getElementById('cidade_cliente3').innerHTML = 'Cidade: ' + inputCidade.value;
       document.getElementById('bairro_cliente3').innerHTML = 'Bairro: ' + inputBairro.value;
       document.getElementById('logradouro_cliente3').innerHTML = 'Logradouro: ' + inputLogradouro.value;
       document.getElementById('numero_cliente3').innerHTML = 'Número: ' + inputNumero.value;
       limaprInputs();

    } else if(document.getElementById('nome_cliente3').innerHTML !=='' && document.getElementById('cpf_cliente3').innerHTML !=='' && document.getElementById('telefone_cliente3').innerHTML !=='' && document.getElementById('email_cliente3').innerHTML !=='' && document.getElementById('cep_cilente3').innerHTML !=='' && document.getElementById('uf_cliente3').innerHTML !==''   && document.getElementById('cidade_cliente3').innerHTML !==''   && document.getElementById('bairro_cliente3').innerHTML !=='' && document.getElementById('logradouro_cliente3').innerHTML !==''&& document.getElementById('numero_cliente3').innerHTML !==''&& document.getElementById('nome_cliente4').innerHTML ==''  && document.getElementById('cpf_cliente4').innerHTML ==''  && document.getElementById('telefone_cliente4').innerHTML ==''  && document.getElementById('email_cliente4').innerHTML =='' && document.getElementById('cep_cilente4').innerHTML ==''&& document.getElementById('uf_cliente4').innerHTML ==''    && document.getElementById('cidade_cliente4').innerHTML =='' && document.getElementById('bairro_cliente4').innerHTML ==''  && document.getElementById('logradouro_cliente4').innerHTML =='' && document.getElementById('numero_cliente4').innerHTML =='' ){ 
        document.getElementById('nome_cliente4').innerHTML = 'Nome: ' + inputNome.value;
        document.getElementById('cpf_cliente4').innerHTML = 'CPF: ' + inputCpf.value;
        document.getElementById('telefone_cliente4').innerHTML ='Telefone: ' + inputtelefone.value;
        document.getElementById('email_cliente4').innerHTML = 'E-mail: ' + inputEmail.value;
        document.getElementById('cep_cilente4').innerHTML = 'CEP: ' + inputCep.value;
        document.getElementById('uf_cliente4').innerHTML = 'UF: ' + inputUf.value;
        document.getElementById('cidade_cliente4').innerHTML = 'Cidade: ' + inputCidade.value;
        document.getElementById('bairro_cliente4').innerHTML = 'Bairro: ' + inputBairro.value;
        document.getElementById('logradouro_cliente4').innerHTML = 'Logradouro: ' + inputLogradouro.value;
        document.getElementById('numero_cliente4').innerHTML = 'Número: ' + inputNumero.value;
        limaprInputs();
        alert('Sua lista de clientes está completa!')
        mudarCorBotao();
    }
}