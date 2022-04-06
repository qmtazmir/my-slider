const images = [
  "images/p-1.jpg",
  "images/p-2.jpg",
  "images/p-3.jpg",
  "images/p-4.jpg",
  "images/p-5.jpg",
  "images/p-6.jpg",
  "images/p-7.jpg",
  "images/p-8.jpg",
  "images/p-9.jpg",
  "images/p-10.jpg",
  "images/p-11.jpg",
  "images/p-12.jpg",
  "images/p-13.jpg",
  "images/p-14.jpg",
  "images/p-15.jpg",
  "images/p-16.jpg",
  "images/p-17.jpg",
  "images/p-18.jpg",
  "images/p-19.jpg",
  "images/p-20.jpg",
];

let imgIndex = 0;

const imgElement = document.getElementById("sliderImages");

setInterval(() => {
  // console.log(imgIndex);
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  //   console.log(imgUrl);
  imgElement.setAttribute("src", imgUrl);

  imgIndex++;
}, 1500);

// [images/p-12.jpg,
// images/p-13.jpg,
// images/p-14.jpg,
// images/p-15.jpg,
// images/p-16.jpg,
// images/p-17.jpg,
// images/p-18.jpg,
// images/p-19.jpg,
// images/p-20.jpg,]
