const searchInput = document.getElementById("search-input");

const hiddenBar = document.getElementById("hidden-bar");

const displayedSearch = document.getElementById("displayed-search");

const overLay = document.getElementById("overlay");

searchInput.addEventListener("focus", () => {
    const rect = displayedSearch.getBoundingClientRect();

    hiddenBar.style.top = rect.top + window.scrollY + -7 + 'px';
    hiddenBar.style.left = rect.left + window.scrollX + -7 + 'px';
    hiddenBar.style.width = rect.width + 15 + 'px';

    hiddenBar.classList.remove("d-none");
    overLay.classList.remove("d-none");
    
  });

searchInput.addEventListener("blur", () => {
    hiddenBar.classList.add("d-none");
    overLay.classList.add("d-none");
  });

$(document).ready(function(){
    $('.slick1').slick({
      dots: true,          // Show navigation dots
      infinite: true,      // Infinite loop
      speed: 700,          // Transition speed
      slidesToShow: 1,     // How many slides to show at once
      slidesToScroll: 1,   // How many to scroll at once
      autoplay: true,      // Auto play
      autoplaySpeed: 2000,
      arrows: false // Time between slides
    });
});






$('.slick3').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});







const products = [
  {
    name: "W-less H-phones",
    price: 59.99,
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    name: "Smart watch",
    price: 99.99,
    category: "Electronics",
    description: "Smartwatch with fitness tracking and notifications."
  },
  {
    name: "Running Shoes",
    price: 79.99,
    category: "Sportswear",
    description: "Comfortable and durable running shoes for all terrains."
  },
  {
    name: "Backpack",
    price: 49.99,
    category: "Accessories",
    description: "Spacious backpack with multiple compartments."
  },
  {
    name: "Coffee Maker",
    price: 39.99,
    category: "Home Appliances",
    description: "Brew delicious coffee quickly and easily."
  },
  {
    name: "Sun glasses",
    price: 24.99,
    category: "Accessories",
    description: "Stylish sunglasses with UV protection."
  },
  {
    name: "Yoga Mat",
    price: 19.99,
    category: "Sportswear",
    description: "Non-slip yoga mat for safe and comfortable exercises."
  },
  {
    name: "Bluetooth Speaker",
    price: 29.99,
    category: "Electronics",
    description: "Portable Bluetooth speaker with excellent sound quality."
  }
];








function createProductCard(parent, name, description, category, image, price, classList) {
    const card = document.createElement('div');
    card.className = classList;
    card.style.height = 400 + 'px';

    const img = document.createElement('img');
    img.src = image;
    img.alt = name;
    img.className = "img-fluid";
    card.appendChild(img);

    const nameElem = document.createElement('h3');
    nameElem.textContent = name;
    card.appendChild(nameElem);

    const descElem = document.createElement('p');
    descElem.textContent = description;
    card.appendChild(descElem);

    const categoryElem = document.createElement('span');
    categoryElem.className = 'product-category';
    categoryElem.textContent = category;
    card.appendChild(categoryElem);

    const priceElem = document.createElement('div');
    priceElem.className = 'product-price';
    priceElem.textContent = `$${price}`;
    card.appendChild(priceElem);

    parent.appendChild(card);
}

const slick5 = document.querySelector('.slick5');

products.forEach(product => {
    createProductCard(slick5, product.name, product.description, product.category, "https://placehold.co/300", product.price, "product-card border border-1 p-3 overflow-hidden m-0");
});



$('.slick5').slick({
  dots: false,
  infinite: true,
  autoplaySpeed: 1500,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3,
        infinite: true,
        arrows: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});








const products2 = [
  // Fashion
  { name: "Leather Jacket", description: "Stylish leather jacket for all seasons.", price: 120.99, category: "Fashion" },
  { name: "Denim Jeans", description: "Comfortable slim-fit denim jeans.", price: 45.50, category: "Fashion" },
  { name: "Sneakers", description: "Trendy sneakers for everyday wear.", price: 60.00, category: "Fashion" },
  { name: "Summer Dress", description: "Lightweight and colorful summer dress.", price: 35.99, category: "Fashion" },
  { name: "Formal Shirt", description: "Classic formal shirt for work or events.", price: 25.00, category: "Fashion" },
  { name: "Wool Scarf", description: "Warm scarf made from premium wool.", price: 19.99, category: "Fashion" },

  // Phone & Tablet
  { name: "Smartphone X1", description: "Latest smartphone with high-resolution camera.", price: 699.99, category: "Phone & Tablet" },
  { name: "Tablet Pro 10", description: "10-inch tablet perfect for work and play.", price: 499.99, category: "Phone & Tablet" },
  { name: "Wireless Earbuds", description: "High-quality sound earbuds with Bluetooth.", price: 79.99, category: "Phone & Tablet" },
  { name: "Power Bank 20000mAh", description: "Portable charger with fast-charging support.", price: 39.99, category: "Phone & Tablet" },
  { name: "Phone Case", description: "Durable protective case for your smartphone.", price: 15.99, category: "Phone & Tablet" },
  { name: "Screen Protector", description: "Tempered glass protector for your device.", price: 9.99, category: "Phone & Tablet" },

  // Home & Decor
  { name: "Wall Clock", description: "Modern decorative wall clock for living room.", price: 29.99, category: "Home & Decor" },
  { name: "Table Lamp", description: "Stylish table lamp with soft lighting.", price: 45.00, category: "Home & Decor" },
  { name: "Cushion Set", description: "Comfortable cushions with elegant designs.", price: 35.50, category: "Home & Decor" },
  { name: "Wall Art Painting", description: "Colorful canvas painting for home decoration.", price: 60.00, category: "Home & Decor" },
  { name: "Vase Set", description: "Decorative vases made of ceramic.", price: 25.00, category: "Home & Decor" },
  { name: "Rug Carpet", description: "Soft area rug to enhance your room.", price: 80.99, category: "Home & Decor" },

  // Beauty & Health
  { name: "Moisturizing Cream", description: "Hydrating cream for all skin types.", price: 20.00, category: "Beauty & Health" },
  { name: "Lipstick Set", description: "Long-lasting lipstick set with 5 colors.", price: 25.99, category: "Beauty & Health" },
  { name: "Shampoo", description: "Nourishing shampoo for healthy hair.", price: 12.50, category: "Beauty & Health" },
  { name: "Face Mask", description: "Revitalizing face mask for glowing skin.", price: 15.00, category: "Beauty & Health" },
  { name: "Perfume", description: "Fresh and elegant fragrance for daily use.", price: 49.99, category: "Beauty & Health" },
  { name: "Vitamin Supplements", description: "Daily vitamins for overall health.", price: 29.99, category: "Beauty & Health" }
];


function createProductCard2(parent, name, description, category, image, price, classList) {

    const card = document.createElement('div');
    card.className = classList;
    card.style.height = 300 + 'px';

    const div1 = document.createElement('div');
    div1.className = "product-card-img w-50 m-3";
    
    const div2 = document.createElement('div');
    div2.className = "product-card-details";

    const img = document.createElement('img');
    img.src = image;
    img.alt = name;
    img.className = "img-fluid";
    div1.appendChild(img);

    const nameElem = document.createElement('h3');
    nameElem.textContent = name;
    div2.appendChild(nameElem);

    const descElem = document.createElement('p');
    descElem.textContent = description;
    div2.appendChild(descElem);

    const categoryElem = document.createElement('span');
    categoryElem.className = 'product-category';
    categoryElem.textContent = category;
    div2.appendChild(categoryElem);

    const priceElem = document.createElement('div');
    priceElem.className = 'product-price';
    priceElem.textContent = `$${price}`;
    div2.appendChild(priceElem);

    card.appendChild(div1);
    card.appendChild(div2);
    parent.appendChild(card);
}






const section7cards = document.querySelector('#section7cards');

// Function to display multiple products using createProductCard2
function displayProducts(productsArray) {
  section7cards.innerHTML = ""; // clear container
  productsArray.forEach(product => {
    createProductCard2(section7cards, product.name, product.description, product.category, "https://placehold.co/300", product.price, "col-4 product-card border border-1 p-3 overflow-hidden m-0 d-flex justify-content-between align-items-center");
  });
}

const fashionProducts = products2.filter(product => product.category === "Fashion");
// Initially show all products
displayProducts(fashionProducts);

// Filter products when a button is clicked
document.getElementById('buttons').addEventListener('click', (e) => {

  for (const child of buttons.children) {
    child.classList.remove("text-decoration-underline");
  }
  e.target.classList.add("text-decoration-underline");

  const category = e.target.getAttribute("data-category");

  
  if (!category) return;

  if (category === "All") {
    displayProducts(products2);
  } else {
    const filtered = products2.filter(p => p.category === category);
    displayProducts(filtered);
  }
});







// const fashionProducts = products.filter(product => product.category === "Fashion");
// console.log(fashionProducts);



// products2.forEach(product => {
//     createProductCard2(section7cards, product.name, product.description, product.category, "https://placehold.co/300", product.price, "col-4 product-card border border-1 p-3 overflow-hidden m-0 d-flex justify-content-between align-items-center");
// });


// document.getElementById('buttons').addEventListener('click', (e) => {
//   const category = e.target.dataset.category;
//   if (!category) return;

//   if (category === "All") {
//     displayProducts(products);
//   } else {
//     const filtered = products2.filter(p => p.category === category);
//     displayProducts(filtered);
//   }
// });
