import { ListItemImage } from '../../../Camper.styled';
import { ImageGallery } from '../../CamperModal.styled';

export const ModalImageList = ({ images }) => {
  const isArray = Array.isArray(images);
  const imagesCount = isArray ? images.length : 0;

  return (
    <ImageGallery>
      {imagesCount > 0
        ? images.map((image, index) => (
            <ListItemImage key={index} src={image} alt="camper" />
          ))
        : 'No images available :('}
    </ImageGallery>
  );
};
