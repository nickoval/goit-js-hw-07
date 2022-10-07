import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

// const activeImage = document.querySelector('.basicLightbox--visible');

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

gallery.addEventListener("click", onPictureClick);

function onPictureClick(evt) {
  console.log(evt);
  if (!evt.target.classList.contains("gallery__image")) {
    console.log("111");
    return;
  }
  evt.preventDefault();

  console.log(evt.target);

  // Работает, но не снимает слушателя с keydown
  //   const instance = basicLightbox.create(`
  //     <img src="${evt.target.dataset.source}" width="800" height="600">
  // `);
  //   instance.show();

  //   document.addEventListener("keydown", onKeyDown);

  //   function onKeyDown(e) {
  //     //  console.log('e.key: ',e.key);
  //     if (e.key === "Escape") {
  //       instance.close();
  //     }
  //   }
  // }
  // ===========================================================

  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}">`,
    {
      onShow: () => document.addEventListener("keydown", onKeyDown),
      onClose: () => document.removeEventListener("keydown", onKeyDown),
    }
  );

  function onKeyDown(e) {
    //  console.log('e.key: ',e.key);
    if (e.key === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
