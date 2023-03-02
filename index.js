let bigcontainer = document.createElement("section");
bigcontainer.id = "section"
document.body.appendChild(bigcontainer);

let container1 = document.createElement("div");
container1.className = "side-by-side-1";
bigcontainer.appendChild(container1);

let container2 = document.createElement("div");
container2.className = "side-by-side";
bigcontainer.appendChild(container2);

let containerOutside1 = document.createElement("div");
containerOutside1.className = "left-container";
container1.appendChild(containerOutside1);

let heading1 = document.createElement("h1");
heading1.className = "heading1";
heading1.textContent = "Men Navy Blue Solid Sweatshirt";
container2.appendChild(heading1);

let heading2 = document.createElement("h3");
heading2.className = "heading2";
heading2.textContent = "United Colors of Benetton";
container2.appendChild(heading2);

let heading3 = document.createElement("h3");
heading3.className = "heading2";
heading3.textContent = "Price: Rs";
container2.appendChild(heading3);

let price = document.createElement("span");
price.className = "price";
price.textContent = "2599";
heading3.appendChild(price);

let heading4 = document.createElement("h3");
heading4.className = "heading2";
heading4.textContent = "Description";
container2.appendChild(heading4);

let heading5 = document.createElement("p");
heading5.className = "p-tag";
heading5.textContent = "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem";
container2.appendChild(heading5);

let heading6 = document.createElement("h3");
heading6.className = "heading2";
heading6.textContent = "Product Preview";
container2.appendChild(heading6);


let containerOutside2 = document.createElement("div");
containerOutside2.className = "right-container";
container2.appendChild(containerOutside2);








let arr = [{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1677657531/01_image_nyto8o.webp",
    
   
},
{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1677662576/02_image_xjcmdb.webp",
   
},
{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1677662576/03_image_hekgtx.webp",
   
},
{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1677662576/04_image_nvrqrh.webp",
   
},
{
    a: "https://res.cloudinary.com/dqrttxm5s/image/upload/v1677662576/05_image_x04usg.webp",
   
},
{
    a: "undefined"
  
}]
let ramesh;

function all(cards) {
    let containerInside = document.createElement("div");
    containerOutside2.appendChild(containerInside);
    containerInside.className = "cards"

    let cardinside = document.createElement("img");
    containerInside.appendChild(cardinside);
    cardinside.className = "cards-img"
    cardinside.src = cards.a;

    
   

    cardinside.addEventListener("click", function () {

        let imageside = document.createElement("img");
        imageside.className = "tempoimg"
        containerOutside1.appendChild(imageside);
        imageside.src = cardinside.src;

        

        if (ramesh) {
            ramesh.remove();
        }

        ramesh = imageside;
    })

}
for (let images of arr) {
    all(images);
}



