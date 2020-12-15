/** @format */
const currencyEl_one = document.getElementById('currency-one');
const amount_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amount_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  console.log('one', currency_one, 'dos', currency_two);
  fetch(`https://v6.exchangerate-api.com/v6/APIKEy/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];
      console.log('🚀 ~ file: script.js ~ line 22 ~ .then ~ rate', rate);

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amount_two.value = (amount_one.value * rate).toFixed(2);
    });
}

swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

// EEvent Listeners
currencyEl_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);

calculate();
