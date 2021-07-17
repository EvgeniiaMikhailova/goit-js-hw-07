const categoriesList = document.querySelectorAll(".item");
console.log(`В списке ${categoriesList.length} категории.`);

const showCategory = element =>
    element.forEach(el => console.log(`Категоря: ${el.querySelector("h2").textContent}. 
    Количество элементов: ${el.querySelectorAll("li").length}`))

showCategory(categoriesList);
