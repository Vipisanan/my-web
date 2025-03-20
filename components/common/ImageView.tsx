"use client";

import { useState } from "react";
import ImageViewModal from "./ImageViewModal";

export default function ImageView({
  src,
  alt,
  cssClassName = "rounded-lg shadow-lg hover:opacity-80 transition",
}: {
  src: string;
  alt?: string;
  cssClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Thumbnail */}
      <img
        src={src}
        alt={alt || "Image"}
        width={200}
        height={200}
        className={`cursor-pointer ${cssClassName}`}
        onClick={() => setIsOpen(true)}
      />

      {/* Modal */}
      {isOpen && (
        <ImageViewModal src={src} handleClose={() => setIsOpen(false)} />
      )}
    </div>
  );
}
