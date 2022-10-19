import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);
const galleryRef = document.querySelector(".gallery");

// const markapGallery = galleryItems
//   .map(
//     ({ preview, original, description }) =>
//       `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`
//   )
//   .join("");
// console.log("markapGallery: ", markapGallery);

const markapGallery = createGallery(galleryItems);

function createGallery(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`
    )
    .join("");
}

galleryRef.innerHTML = markapGallery;

// document.addEventListener("click", onImageClick);

// function onImageClick(evt) {
//   evt.preventDefault();
//   if (!evt.target.classList.contains("gallery__image")) {
//     // console.log("111");
//     return;
//   }
// };

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
