import { galleryItems } from "./gallery-items.js";

class Gallery {
  constructor({ gallery }) {
    this.gallery = gallery;
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

  addListeners() {
    this.gallery.addEventListener("click", this.onPictureClick.bind(this));
  }

  init() {
    this.addListeners();
  }
}

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.insertAdjacentHTML("beforeend", createGallery());

function createGallery() {
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

new Gallery(refs).init();
