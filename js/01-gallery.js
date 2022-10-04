import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imageList = createGallery(galleryItems);
gallery.insertAdjacentHTML("beforeend", imageList);

function createGallery(galleryItems) {
  return galleryItems
    .map((item) => {
      const { preview, original, description } = item;
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
      </div>`;
    })
    .join("");
}

const instance = basicLightbox.create(`
    <img src="evt.target.dataset.source" width="800" height="600">
`);

// instance.show();

gallery.addEventListener("click", onPictureClick);

function onPictureClick(evt) {
  console.log(evt.target);
  if (!evt.target.classList.contains("gallery__image")) {
    console.log("111");
    return;
  }
  instance.show(evt);
}
