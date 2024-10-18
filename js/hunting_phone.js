
const findAllPhones = async (inputValue) =>{
    const phones = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`);
    const phonesData = await phones.json();
    displayPhones(phonesData.data);
};


const displayPhones = (phones) =>{
    const mainSection = document.getElementById("card-section-main");
    mainSection.textContent = "";
    phones = phones.slice(0,9)
    phones.forEach((data)=>{
        const div = document.createElement("div");
        div.classList.add("card", "glass");
        div.innerHTML = `
            <figure>
                          <img class="full p-4"
                            src="${data.image}"
                            alt="car!" />
                        </figure>
                        <div class="card-body">
                          <h1 class="card-title">${data.brand}</h1>
                          <h2 class="card-title">${data.phone_name}</h2>
                          <p>${data.slug}</p>
                          <div class="card-actions justify-start mt-5">
                            <button class="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
        `
        mainSection.appendChild(div);
    });
};



findAllPhones();