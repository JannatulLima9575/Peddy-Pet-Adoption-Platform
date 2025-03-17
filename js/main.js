

const loadCategory = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");
  const data = await response.json();
  showCategory(data.categories)

}


const showCategory = (categories) => {
  categories.forEach((element) => {
      const categoryContainer = document.getElementById('category-container');
      const div = document.createElement("div");
      div.innerHTML = `
      <button onclick="loadPets('${element.category}')" class="btn">${element.category} 
      <img class="w-8" src=${element.category_icon} alt="" />
      </button>
      `
      categoryContainer.appendChild(div)

  })
}
``

const loadPets = async (categoryName) => {
  
  document.getElementById('status').style.display = "none";
  show("spiner")
  document.getElementById("petsContainer").style.display = "block";
  const response = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${categoryName}`);
  const data = await response.json();
  if (data.data) {
      displayPets(data.data);
      makeHide("spiner")
  }
}

const displayPets = (pets) => {
  console.log(pets)

if (pets.length<1) {
  document.getElementById("petsContainer").style.display = "none";
document.getElementById('status').style.display="block"
}



  pets.forEach((pet) => {
   
      const petsContainer = document.getElementById("petsContainer");
      petsContainer.innerHTML = "";

      const div = document.createElement("div");
      div.classList.add("mt-5")
      div.innerHTML = `
      <div class="card bg-base-100 w-96 shadow-sm">
<figure>
  <img
    src=${pet.image} />
</figure>
<div class="card-body">
  <h2 class="card-title">${pet.breed}</h2>
  <p>${pet.pet_details.slice(0,100)}</p>
  <div class="card-actions justify-end">
    <button class="btn select btn-primary">Seelct</button>
    <button onclick="handleDetails('${pet.petId}')" class="btn  bg-red-500 details">Details</button>
  </div>
</div>
</div>
      `;
      petsContainer.appendChild(div)
  })

  const allSelectButton = document.getElementsByClassName("select");
  for (const button of allSelectButton) {
      button.addEventListener("click", (event) => {
          const title = event.target.parentNode.parentNode.childNodes[1].innerText;
          console.log(title)

          const listContainer = document.getElementById('selcted-container');
          const div = document.createElement("div");
          div.classList.add("flex")
          div.innerHTML = `
          <li>${title}</li>
          <button class="delete-btn btn ">Delete</button>
          `;
          listContainer.appendChild(div)
          const prevCount = getValueById("count");
          const sum = prevCount + 1;

          document.getElementById('count').innerText = sum;
          
      })
  }
  
}



const makeHide = (id) => {
  document.getElementById(id).style.display = "none";
}

const show = (id) => {
  document.getElementById(id).style.display = "block";
}


const getValueById = (id) => {
  const element = document.getElementById(id).innerText;
  const convertedValue = parseInt(element);
  return convertedValue;

}




const handleDetails = async(petId) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
  const data = await response.json();
  console.log(data.petData)
  my_modal_1.showModal()

}







loadPets("cat")



loadCategory()