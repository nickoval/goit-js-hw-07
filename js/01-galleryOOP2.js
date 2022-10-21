import { galleryItems } from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
  imageList: function createGallery() {
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
  },
};

class Gallery {
  constructor({ gallery, imageList }) {
    this.gallery = gallery;
    this.imageList = imageList;
  }

  onPictureClick(evt) {
    console.log(evt);
    if (!evt.target.classList.contains("gallery__image")) {
      return;
    }
    evt.preventDefault();

    // console.log(evt.target);

    const instance = basicLightbox.create(
      `<img src="${evt.target.dataset.source}">`,
      {
        onShow: () => document.addEventListener("keydown", onKeyDown),
        onClose: () => document.removeEventListener("keydown", onKeyDown),
      }
    );

    function onKeyDown(e) {
      if (e.key === "Escape") {
        instance.close();
      }
    }

    instance.show();
  }

  addGallery() {
    this.gallery.insertAdjacentHTML("beforeend", this.imageList());
  }

  addListeners() {
    this.gallery.addEventListener("click", this.onPictureClick);
  }

  init() {
    this.addGallery();
    this.addListeners();
  }
}

new Gallery(refs).init();

// refs.gallery.insertAdjacentHTML("beforeend", createGallery());

// function createGallery() {
//   return galleryItems
//     .map((item) => {
//       const { preview, original, description } = item;
//       return `
//       <div class="gallery__item">
//       <a class="gallery__link" href="${original}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//         />
//       </a>
//       </div>`;
//     })
//     .join("");
// }
