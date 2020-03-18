let content_dolar = document.querySelectorAll('.content-dolar p');
let content_Bitcoin = document.querySelectorAll('.content-bitcoin p');

async function cotacaoBitcoin () {
    const req = await fetch(`https://economia.awesomeapi.com.br/json/BTC`);
    const res = await req.json();
    console.log(res);
    

    content_Bitcoin[1].textContent = "Alta: " + res[0].high;
    content_Bitcoin[2].textContent = "Baixa: " + res[0].low;
}

async function cotacaoDolar() {
    const request = await fetch(`https://economia.awesomeapi.com.br/json/USD`);
    const res = await request.json();
    console.log(res);

    content_dolar[1].textContent = "Alta: " + res[0].high;
    content_dolar[2].textContent = "Baixa: " + res[0].low;

}


let btn = document.querySelector('.btn-update').addEventListener('click', () => {
    cotacaoDolar();
    cotacaoBitcoin();
})

cotacaoBitcoin();
cotacaoDolar();

setInterval(cotacaoBitcoin, 30000)
setInterval(cotacaoDolar, 30000)