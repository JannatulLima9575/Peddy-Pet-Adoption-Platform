// load data
const loadCategory = async() => {
    const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
    const data = await response.json();
    showCategory(data.categories)
}

// display categories on UI
const showCategory = (categories) => {
    categories.forEach((element) => {
        console.log(element);
        const categoryContainer = document.getElementById('category-container');
        const div = document.createElement("div");

        // show category icon on button
        div.innerHTML = `
        <button onclick="loadPets('${element.category}')" class="btn text-2xl px-2 w-[312px] h-[104px] hover:bg-[#0E7A81]/10 hover:rounded-full">${element.category}
        <img class="w-12" src=${element.category_icon} alt="">   
        </button>
        `
        categoryContainer.appendChild(div)
    })
}

// load data
const loadPets = async(categoryName) => {
    // console.log(categoryName);
    
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
    const data = await response.json();
    displayPets(data.data);
    
}
//  show data on UI
const displayPets = (pets) => {
    pets.forEach((pet) => {
        console.log(pet)
        const petsContainer = document.getElementById("pets-container");
        petsContainer.innerHTML = "";

        const div = document.createElement("div");
        div.classList.add("mt-5")
        div.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src=${pet.image}
      class="rounded-xl" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${pet.breed}</h2>
    <p>${pet.pet_details.slice(0,100)}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Select</button>
    </div>
  </div>
</div>
        `
        petsContainer.appendChild(div)
    })
    
}

loadPets("cat")

loadCategory()