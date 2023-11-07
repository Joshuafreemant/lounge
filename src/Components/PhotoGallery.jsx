import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const PhotoGallery = ({ props }) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + "my-test-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);
  return (
    <div
      className="pswp-gallery flex flex-wrap justify-between gap-2 "
      id="my-test-gallery"
    >
      {props.map((image, index) => (
        <a
          href={image.src}
          data-pswp-width="800px"
          data-pswp-height="500px"
          key={"my-test-gallery" + "-" + index}
          target="_blank"
          rel="noreferrer"
          className="flex-grow w-[48.5%] h-[120px] overflow-hidden rounded-md"
        >
          <img src={image.src} alt="" width={image.width}  className="h-full" />
        </a>
      ))}
    </div>
  );
};

export default PhotoGallery;
