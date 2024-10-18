

const productDetailsShow = async (id) => {
    console.log(id);
    const product = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
    const data = await product.json();
    const singledata= data.data;
    displayDetails(singledata);
};


const displayDetails = (products) => {
    console.log(products);
    const productName = document.getElementById("product-title-name");
    productName.innerText = products.name;
    const productImage = document.getElementById("image_show");
    productImage.src = products.image;

};

