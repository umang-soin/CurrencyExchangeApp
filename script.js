// function calculate(){
//     fetch('items.json')
//     .then(res => res.json())
//     .then(data => (document.body.innerHTML = data[0].text));
// };

const currencyEl_one = document.getElementById('currency-one');

const currencyEl_two = document.getElementById('currency-two');

const amountEl_one = document.getElementById('amount-one');

const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');

const swap = document.getElementById('swap');

// Fetch exchange rates and DOM

function calculate(){

console.log("Ran")
const currency_one = currencyEl_one.value;
const currency_two = currencyEl_two.value;

fetch(`https://v6.exchangerate-api.com/v6/a610dd9763a50625b0b5a8f5/latest/${currency_one}`)
.then(res => res.json())
.then(data => {
    // console.log(data);
    const rate = data.conversion_rates[currency_two];
    console.log(rate);

    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

    amountEl_two.value = (amountEl_one.value * rate);
})

console.log(currency_one, currency_two);

};

currencyEl_one.addEventListener('change',calculate);
amountEl_one.addEventListener('input',calculate);
currencyEl_two.addEventListener('change',calculate);
amountEl_two.addEventListener('input',calculate);

swap.addEventListener('click',() => {

    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

calculate();