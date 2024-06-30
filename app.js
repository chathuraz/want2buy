const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "Apple",
      price: 799,
      colors: [
        {
          code: "goldenrod",
          img: "img/Apple2.png",
        },
        {
          code: "black",
          img: "img/appletest.png",
        },
      ],
    },
    {
      id: 2,
      title: "Samsung",
      price: 750,
      colors: [
        {
          code: "grey",
          img: "img/Samsung3.png",
        },
        {
          code: "black",
          img: "img/samsungtest.png",
        },
      ],
    },
    {
      id: 3,
      title: "Xiaomi",
      price: 637,
      colors: [
        {
          code: "grey",
          img: "img/Xiaomi4.png",
        },
        {
          code: "black",
          img: "img/Xiaomi 3.png",
        },
      ],
    },
    {
      id: 4,
      title: "Oppo",
      price: 649,
      colors: [
        {
          code: "purple",
          img: "img/testoppo.png",
        },
        {
          code: "black",
          img: "img/testoppo2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Google Pixel",
      price: 763,
      colors: [
        {
          code: "black",
          img: "img/testpixel.png",
        },
        {
          code: "silver",
          img: "img/testpixel2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0]

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductStorages = document.querySelectorAll(".storage");

menuItem.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index]

        //change text of current product
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //assign new colors
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductStorages.forEach((storage,index)=>{
  storage.addEventListener("click",()=>{
    currentProductStorages.forEach(storage=>{
      storage.style.backgroundColor="white"
      storage.style.color= "black"
    });
    storage.style.backgroundColor="black"
    storage.style.color= "white"
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})