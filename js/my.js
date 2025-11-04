function handelSearch() {
    const searchInputEliment = document.getElementById("search-input-field") ;
    const searchInputValue = searchInputEliment.value ;
    loadPhone(searchInputValue);
}

const loadPhone =async (searchText) => {
     const res = await fetch(
        `https://openapi.programming-hero.com/api/phones?search=${searchText}` 
    );

    console.log("Server Responce: " ,res );

    const ServerData =await res.json(); 

    
    displayPhone(ServerData.data);
};

const displayPhone = (data) => {
    console.log(data);
   const cardcontainer = document.getElementById("Card-Section");
   cardcontainer.innerHTML = "";

   data.forEach(Phone => {

    const productCard = document.createElement("div");
    productCard.classList.add("card");

    productCard.innerHTML = `
    <div class="card-image">
                    <img src=${Phone.image} alt="Phone-image">
                </div>
                <div>
                    <h3 class="card-title">${Phone.phone_name}</h3>
                    <p class="Card-description">There are many variations of passages of available, but the majority have suffered</p>
                    <div class="card-price">
                        <span>$</span>
                        <span id="card-item-price">1000</span>
                    </div>
                    <div class="card-button">
                        <button class="btn">Show Details</button>
                    </div>
                </div>
    `;
   
    cardcontainer.appendChild(productCard);

   });
};
    
