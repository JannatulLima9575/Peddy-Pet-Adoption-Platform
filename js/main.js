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
        <button class="btn text-2xl px-2 w-[312px] h-[104px] hover:bg-[#0E7A81]/10 hover:rounded-full">${element.category}
        <img class="w-12" src=${element.category_icon} alt="">   
        </button>
        `
        categoryContainer.appendChild(div)
    })
}
loadCategory()