const container = document.querySelector('.container');
const color = document.querySelector('.color');
const changeBtn = document.querySelector('.btn-changer');
const hexColors = []
const hexColorValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
changeBtn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        let randomHex = getRandomHex()
        hexColor += hexColorValues[randomHex]
    }
    container.style.backgroundColor = hexColor;
    color.textContent = hexColor;
    hexColors.push(hexColor)
    console.log(hexColors);
})

function getRandomHex(){
    return Math.trunc(Math.random()*hexColorValues.length)
}