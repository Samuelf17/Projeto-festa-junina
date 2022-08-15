/*>>> DECLARAÇÃO DE VARIÁVEIS <<<*/

var produtos = [
    {nome:'Jogos', valor:3.00},
    {nome:'Inflável', valor:3.00},
    {nome:'Água Mineral', qtd:100, valor:2.5},
    {nome:'Quentão', qtd:70, valor:3},
    {nome:'Refrigerante/Suco', qtd:150, valor:3.5},
    {nome:'Cachorro Quente', qtd:70, valor:3},
    {nome:'Pinhão', qtd:20, valor:3},
    {nome:'Pipoca', qtd:100, valor:2},
    {nome:'Pizza', qtd: 100, valor:3},
    {nome:'Carreteiro mini', qtd: 20, valor: 3.5},
    {nome:'Bolo de Milho', qtd: 30, valor:2.5},
    {nome:'Algodão Doce', qtd:100, valor:3.5}
]

let totalDeVendas = 0

/*>>> FUNÇÕES <<<*/

history.forward()

function TelaCardapio(){
    document.querySelector('ul').remove()
    document.querySelector('h1').remove()
    document.querySelector('title').innerText='Cardápio'
    document.querySelector('body').innerHTML = "<div><div id='cbCardapio'><h1 style='text-align:center;'>Tabela de Preços</h1><p>Jogos __________________ R$3,00</p><p>Inflável ________________ R$3,00</p><p>Bebidas</p><p>Água Mineral ____________R$2,50</p><p>Quentão_________________R$3,00</p><p>Refrigerante/Suco_________R$3,50</p><p>Salgados</p><p>Cachorro Quente__________R$3,00</p><p>Pinhão__________________R$3,00</p><p>Pipoca__________________R$2,00</p><p>Pizza___________________R$3,00</p><p>Carreteiro mini___________R$3,50</p><p>Doces</p><p>Bolo de Milho____________R$2,50</p><p>Algodão Doce____________R$3,50</p></div><button class='btnVoltar' onclick='VoltarMenu()'>Voltar</button></div>"
}

function VoltarMenu(){
    document.querySelector('div').remove()
    document.querySelector('title').innerText='Página Inicial'
    document.querySelector('body').innerHTML = '<div id="menu"><h1>Menu: </h1><ul><li onclick="TelaCardapio()" >Cardápio</a></li><li onclick="TelaEstoque()">Estoque</a></li><li onclick="TotalCx()">Livro de Caixa</li><li onclick="TelaVenda()">Venda</a></li><li onclick="TelaLogin()">Logout</a></li></ul></div>'
}
function TelaEstoque(){
    document.querySelector('ul').remove()
    document.querySelector('h1').remove()
    document.querySelector('title').innerText='Estoque'
    document.querySelector('body').innerHTML = '<div><div id="estoque"><h1 style="text-align:center;">Estoque</h1></div><button class="btnVoltar" onclick="VoltarMenu()">Voltar</button></div>'
    Estoque()
}

function Estoque(){
    let i=2
    while(i<12){
        let txt
        if(produtos[i].qtd<=0){
            txt=document.createTextNode(`Nome: ${produtos[i].nome} | Quantidade: Em falta`)
        } else{
            txt=document.createTextNode(`Nome: ${produtos[i].nome} | Quantidade: ${produtos[i].qtd}`)
        }
        let txtP=document.createElement('p')
        txtP.appendChild(txt)
        estoque.appendChild(txtP)
        i+=1
    }
}

function TelaVenda(){
    document.querySelector('h1').remove()
    document.querySelector('ul').remove()
    document.querySelector('title').innerText='Vendas'
    document.querySelector('body').innerHTML = '<div><div id="telaVendas"><h1>Vendas</h1><p>Selecione o produto</p><select id="produtos" ><option>Jogos</option><option>Inflável</option><option>Água Mineral</option><option>Quentão</option><option>Refrigerante/Suco</option><option>Cachorro Quente</option><option>Pinhão</option><option>Pipoca</option><option>Pizza</option><option>Carreteiro mini</option><option>Bolo de Milho</option><option>Algodão Doce</option></select><p>Digite a quantidade vendida</p><input type="text" id="qtd"><br><br><input type="button" id="btn" value="Adicionar Venda" onclick="AddVenda()"><br><br></div><button class="btnVoltar" onclick="VoltarMenu()">Voltar</button></div>'
}

function AddVenda(){
    let produto = document.querySelector('#produtos')
    let qtd = parseInt(document.querySelector('#qtd').value)

    if(produtos[produto.selectedIndex].qtd <=0){
        alert('Produto não disponível. Favor escolher outro.')
        document.querySelector('#qtd').value=""

    } else if(qtd>produtos[produto.selectedIndex].qtd){
        alert("Você ultrapassou o limite do estoque")
        document.querySelector('#qtd').value=""
    }else{
        produtos[produto.selectedIndex].qtd -= qtd
        totalDeVendas += produtos[produto.selectedIndex].valor * qtd
        document.querySelector('#qtd').value=""
        alert("Venda cadastrada")
    }
      
}

function TelaLogin(){
    window.location.href = 'Login.html'
}

function TotalCx(){
    alert(`O valor total arrecadado é R$${totalDeVendas}`)
}