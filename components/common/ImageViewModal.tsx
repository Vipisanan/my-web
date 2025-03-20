import { useState } from "react";

const ImageViewModal = ({
  src,
  alt,
  handleClose,
}: {
  src: string;
  alt?: string;
  handleClose: () => void;
}) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 backdrop-blur-sm z-50">
        <div className="relative rounded-lg shadow-xl p-4 max-w-lg w-full">
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1"
            onClick={() => handleClose()}
          >
            ✕
          </button>

          {/* Full Image */}
          <img
            src={src}
            alt={alt || "Image"}
            width={600}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};
export default ImageViewModal;
