"use client";
import { useEffect } from "react";

const ImageViewModal = ({
  src,
  alt,
  handleClose,
  cssClassName = "rounded-lg",
}: {
  src: string;
  alt?: string;
  handleClose: () => void;
  cssClassName?: string;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Certificate"}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-xl border border-line bg-surface p-3 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute -top-3 -right-3 grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-muted hover:text-ink"
          onClick={handleClose}
        >
          &times;
        </button>
        <img
          src={src}
          alt={alt || "Certificate"}
          className={`h-auto w-full object-contain ${cssClassName}`}
        />
      </div>
    </div>
  );
};

export default ImageViewModal;
