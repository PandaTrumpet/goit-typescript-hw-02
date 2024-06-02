import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { MainImage } from "../../type";
interface IGallery {
  images: MainImage[];
  openModal: (image: MainImage) => void;
}
export default function ImageGallery({ images, openModal }: IGallery) {
  return (
    <ul className={css.imageList}>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
}
