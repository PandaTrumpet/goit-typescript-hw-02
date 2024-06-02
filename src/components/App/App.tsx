import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import toast from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";
import { fetchImages } from "../../showImages";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { MainImage } from "../../type";
import { ModalProps } from "../ImageModal/ImageModal";
function App() {
  const [images, setImages] = useState<MainImage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuuery] = useState<string>("");

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getImages() {
      try {
        setLoading(true);

        const data = await fetchImages<MainImage[]>(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
        setLoading(false);
      } catch (error) {
        toast.error("This is an error!");
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleSearch = async (newQuery: string) => {
    setQuuery(newQuery);
    setPage(1);
    setImages([]);
    setError(false);
  };

  const handllePage = () => {
    console.log(page);
    setPage(page + 1);
  };

  // ==========================================Modal============================================================

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<MainImage | null>(null);
  const openModal = (image: MainImage | null) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };
  const inputError = () => {
    toast.error("Enter the text!!!");
  };
  // ==========================================Modal============================================================

  return (
    <>
      <SearchBar
        onSubmit={handleSearch}
        inputError={inputError}
        query={query}
      />

      {images.length > 0 ? (
        <>
          <ImageGallery images={images} openModal={openModal} />
          {selectedImage && (
            <ImageModal
              open={modalIsOpen}
              closeModal={closeModal}
              selectedImage={selectedImage}
            />
          )}
        </>
      ) : (
        <ErrorMessage />
      )}
      {loading && <Loader isLoading={true} />}
      {images.length > 0 && <LoadMoreBtn onClick={handllePage} />}
    </>
  );
}

export default App;
