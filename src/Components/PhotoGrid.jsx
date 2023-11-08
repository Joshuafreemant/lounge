import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const PhotoGrid = ({ props, full }) => {
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
      className="pswp-gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between gap-3 "
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
          className={ "md:h-[170px] rounded-md overflow-hidden"
          }
        >
          
            <img
              src={image.src}
              alt=""
              width={image.width}
              className={full ? "w-full h-full" : "h-full"}
            />
          
        </a>
      ))}
    </div>
  );
};

export default PhotoGrid;
