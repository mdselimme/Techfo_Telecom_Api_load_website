
const findAllPhones = async (inputValue, isShowAll) =>{
    const phones = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputValue}`);
    const phonesData = await phones.json();
    displayPhones(phonesData.data, isShowAll);
};


const displayPhones = (phones, isShowAll) =>{
  toggleLoadingSpinner(true);

    const mainSection = document.getElementById("card-section-main");
    mainSection.textContent = "";


    const showAllBtn = document.getElementById("show-all-btn");
    if(phones.length > 9 && !isShowAll){
      showAllBtn.classList.remove("hidden");
    }else{
      showAllBtn.classList.add("hidden");
    }

    if(!isShowAll){
      phones = phones.slice(0,9)
    }

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
                          <div class="card-actions justify-between mt-5">
                            <button class="btn btn-primary">Buy Now</button>
                            <button onclick="productDetailsShow('${data.slug}'); m_modal_show.showModal();" class="btn btn-primary">Show Details</button>
                          </div>
                        </div>
        `
        mainSection.appendChild(div);
    });
    toggleLoadingSpinner(false);
};



findAllPhones();