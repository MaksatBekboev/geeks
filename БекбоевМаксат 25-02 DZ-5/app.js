const convert = (event, data) => {
    const somInput = document.getElementById("som");
    const usdInput = document.getElementById("usd");
    const eurInput = document.getElementById("eur");

    const currentValue = parseFloat(event.target.value);
    if (isNaN(currentValue)) {
        somInput.value = "";
        usdInput.value = "";
        eurInput.value = "";
        return;
    }

    if (event.target === somInput) {
        usdInput.value = (currentValue / data.usd).toFixed(2);
        eurInput.value = (currentValue / data.eur).toFixed(2);
    } else if (event.target === usdInput) {
        somInput.value = (currentValue * data.usd).toFixed(2);
        eurInput.value = (currentValue * (data.usd / data.eur)).toFixed(2);
    } else if (event.target === eurInput) {
        somInput.value = (currentValue * data.eur).toFixed(2);
        usdInput.value = (currentValue * (data.eur / data.usd)).toFixed(2);
    }
};

const somInput = document.getElementById("som");
const usdInput = document.getElementById("usd");
const eurInput = document.getElementById("eur");

const request = new XMLHttpRequest();
request.open("GET", "data.json");
request.setRequestHeader("Content-Type", "application/json");
request.send();

request.addEventListener("load", () => {
    const data = JSON.parse(request.response);

    somInput.addEventListener("input", (event) => {
        convert(event, data);
    });

    usdInput.addEventListener("input", (event) => {
        convert(event, data);
    });

    eurInput.addEventListener("input", (event) => {
        convert(event, data);
    });
});
