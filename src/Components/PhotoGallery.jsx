import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import {Zoom} from "react-awesome-reveal";
const PhotoGallery = ({ props, full }) => {
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
    <Zoom bottom collapse>
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
            className={
              full
                ? "md:h-[20px] h-[140px] flex-grow w-[48.5%]  overflow-hidden rounded-md"
                : "flex-grow w-[48.5%] md:h-[180px] h-[120px] overflow-hidden rounded-md"
            }
          >
            {image?.src.length > 1 ? (
              <img
                src={image.src}
                alt=""
                width={image.width}
                className={full ? "w-full h-full" : "h-full"}
              />
            ) : (
              ""
            )}
          </a>
        ))}
      </div>
    </Zoom>
  );
};

export default PhotoGallery;
