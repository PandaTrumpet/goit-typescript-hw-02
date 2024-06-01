import css from "./ImageCard.module.css";
import { MainImage } from "../../type";
interface ICard{
  image: MainImage;
  openModal:(image:MainImage)=>void
}
export default function ImageCard({ image, openModal }:ICard) {
  return (
    <div>
      <img
        className={css.imageCard}
        onClick={() => openModal(image)}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
