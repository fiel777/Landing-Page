const navlist = document.querySelector(".navlist");
const bar = document.querySelector(".fa-bars");
const sectionContainer = document.querySelector(".section-container");
const item = document.querySelector(".orange-products");

// show description
const fulldesc = document.querySelector(".full-description");
const readmore = document.querySelector(".readmorebtn");

const data = [
  {
    imageurl: "/assets/orange_product.jpg",
    title: "Orange One",
    price: "₱ 3,800.00",
  },
  {
    imageurl: "/assets/orange_product.jpg",
    title: "Orange Two",
    price: "₱ 3,800.00",
  },
  {
    imageurl: "/assets/orange_product.jpg",
    title: "Orange Three",
    price: "₱ 3,800.00",
  },
  {
    imageurl: "/assets/orange_product.jpg",
    title: "Orange Four",
    price: "₱ 3,800.00",
  },
  {
    imageurl: "/assets/orange_product.jpg",
    title: "Orange Five",
    price: "₱ 3,800.00",
  },
  {
    imageurl: "/assets/orange_product.jpg",
    title: "Orange Six",
    price: "₱ 3,800.00",
  },
  {
    imageurl: "/assets/orange_product.jpg",
    title: "Orange Seven",
    price: "₱ 3,800.00",
  },
];

bar.onclick = () => {
  if (navlist.style.display === "flex") {
    navlist.style.display = "none";
    sectionContainer.style.padding = "10rem 0 20rem 0";
  } else {
    navlist.style.display = "flex";
    sectionContainer.style.padding = "0rem 0rem 10rem 0";
  }
};

readmore.onclick = () => {
  if (fulldesc.style.display === "flex") {
    fulldesc.style.display = "none";
    readmore.innerHTML = "Read More";
  } else {
    fulldesc.style.display = "flex";
    readmore.innerHTML = "Read Less";
  }
};

item.innerHTML = data
  .map(
    (item) =>
      `
      <div class = "item">
      <img src=${item.imageurl} alt= "image"></img>
<h3>${item.title}</h3>
<bdi>${item.price}</bdi>
      </div>`
  )
  .join("");
