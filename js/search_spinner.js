const findInputText = () => {
    toggleLoadingSpinner(true);
    const inputBox = document.getElementById("search-box");
    const inputTex = inputBox.value;
    findAllPhones(inputTex);
    inputBox.value = "";   
};


const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById("loading-spinner");
    if(isLoading){
        loadingSpinner.classList.remove("hidden");
    }else{
        loadingSpinner.classList.add("hidden");
    }
}