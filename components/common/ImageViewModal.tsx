import { useTheme } from "@/hooks/useTheme";

const ImageViewModal = ({
  src,
  alt,
  handleClose,
  cssClassName = "rounded-lg", // 80% width by default
}: {
  src: string;
  alt?: string;
  handleClose: () => void;
  cssClassName?: string;
}) => {
  const theme = useTheme();
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-60 backdrop-blur-sm z-50">
        <div
          className={` ${theme === "light" ? "bg-gray-600" : "bg-white"}
          relative rounded-lg shadow-xl
          sm:p-4 
          p-2
          max-w-5xl 
          sm:w-[50%]
          w-80`}
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-700 bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1"
            onClick={handleClose}
          >
            ✕
          </button>

          {/* Full Image */}
          <img
            src={src}
            alt={alt || "Vipisanan"}
            className={`w-full h-full object-cover ${cssClassName}`}
          />
        </div>
      </div>
    </>
  );
};

export default ImageViewModal;
