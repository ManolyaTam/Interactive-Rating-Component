const submitBtn = document.getElementById('submitBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const result = document.getElementById('result');

let rating = 0;

submitBtn.onclick = () => {
    page1.style.display = 'none';

    result.innerHTML = `You selected ${rating} out of 5`
    page2.style.display = 'flex';

}

