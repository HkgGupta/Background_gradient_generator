const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btnC = document.getElementById("btnC");
const copyDiv = document.querySelector(".copyCode");
const copyInfo = document.querySelector(".copyInfo");

const getRandomHexColor = () => {
    const hexValues = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hexValues[Math.floor(Math.random() * 16)];
    }
    return color;
};

let rgb1, rgb2;

const updateBackgroundAndCopy = () => {
    document.body.style.background = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background: linear-gradient(to right, ${rgb1}, ${rgb2});`;
};

const handleBtn1 = () => {
    rgb1 = getRandomHexColor();
    btn1.innerText = rgb1;
    updateBackgroundAndCopy();
};

const handleBtn2 = () => {
    rgb2 = getRandomHexColor();
    btn2.innerText = rgb2;
    updateBackgroundAndCopy();
};

const copyToClipboard = () => {
    navigator.clipboard.writeText(copyDiv.innerText)
        .then(() => {
            copyInfo.innerText = "Copied to clipboard!";
            copyInfo.style.opacity = 1;
            setTimeout(() => {
                copyInfo.style.opacity = 0;
            }, 1000);
        })
        .catch(error => {
            console.error('Failed to copy: ', error);
        });
};

const changeBg = () => {
    handleBtn1();
    handleBtn2();
};

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
btnC.addEventListener("click", changeBg);
copyDiv.addEventListener("click", copyToClipboard);
document.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === "NumpadEnter" || e.key === "c") {
        copyToClipboard();
    } else if (e.key === " ") {
        changeBg();
    }
});

changeBg();
