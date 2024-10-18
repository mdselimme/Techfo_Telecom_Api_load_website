const findInputText = () => {
    const inputBox = document.getElementById("search-box");
    const inputTex = inputBox.value;
    findAllPhones(inputTex);
    inputBox.value = "";
};