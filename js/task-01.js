const listElem = document.querySelector("#categories");

console.log(`Number of categories: ${listElem.children.length}`);


document.querySelectorAll("#categories .item").forEach(item => {
    
    console.log(`Category: ${item.querySelector("h2").textContent}`);
    console.log(`Elements: ${item.querySelectorAll("ul li").length}`);
});
