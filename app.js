const submitBtn = document.getElementById('submitBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const result = document.getElementById('result');
const btns = document.getElementById('btns');
let rate = 0;
/**
 * @param {Array <{value : Number, selected : boolean}[]>}
 */
const buttons = [
    {
        value: 1,
        selected: false
    },
    {
        value: 2,
        selected: false
    },
    {
        value: 3,
        selected: false
    },
    {
        value: 4,
        selected: false
    },
    {
        value: 5,
        selected: false
    }
]

selectRate = (index) => {
    clearSelection();
    buttons[index].selected = true;
    rate = index + 1;
    renderBtns();
}

renderBtns = () => {
    btns.innerHTML = '';
    for (let i = 0; i < 5; i += 1) {
        let btn = buttons[i];
        btns.innerHTML += `
        <button onclick="selectRate(${i})" class="btn ${btn.selected ? 'clicked' : ''}">${btn.value}</button>
    `
    }
}
renderBtns();

clearSelection = () => {
    for (let i = 0; i < 5; i += 1) {
        let btn = buttons[i];
        btn.selected = false;
    }
    renderBtns();
}

submitBtn.onclick = () => {
    page1.style.display = 'none';
    result.innerHTML = `You selected ${rate} out of 5`
    page2.style.display = 'flex';

}

