let form = document.querySelector('form');
form.addEventListener('submit', function(e){
e.preventDefault();
let height = parseInt(document.querySelector('#height').value);
let weight = parseInt(document.querySelector('#weight').value);
let results = document.querySelector('#results');

if(height === '' || height < 0 || isNaN(height)){
results.innerHTML = `Give valid height`;
}else if(weight === '' || weight < 0 || isNaN(weight)){
results.innerHTML = `Give valid weight`;

}else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        if (bmi < 18) {
            results.innerHTML = `${bmi} you are under weight`
        } else if (bmi > 24) {
            results.innerHTML = `${bmi} you are over weight`
        } else if (bmi > 18 || parseInt(bmi) < 24) {
            results.innerHTML = `${bmi} you are in normal range`
        }
    
}
})