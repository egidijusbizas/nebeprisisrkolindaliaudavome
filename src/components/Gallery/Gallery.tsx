import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import './Gallery.css';
import { PictureUrls, PicturesData } from '../../types/DataTypes';
import { ErrorBox, FirstLoad, NoData } from '../Common/Common';

interface Props {
  pictures: Array<PicturesData>;
  firstLoad: boolean;
  noData: boolean;
  error: string;
}

const Gallery: React.FC<Props> = (props) => {
  const { pictures, firstLoad, noData, error } = props;

  const resolveComponent = (): React.ReactNode => {
    if (error) {
      return <ErrorBox error={error} />;
    } else if (!noData && firstLoad) {
      return <FirstLoad />;
    } else if (noData) {
      return <NoData />;
    } else {
      return <></>;
    }
  };

  const RenderGallery: React.FC = () => {
    return (
      <>
        <div className='gallery__base'>
          {pictures.map((picture: PicturesData, idx: number) => {
            return <GalleryItem key={picture.id + idx} id={picture.id} urls={picture.urls as PictureUrls} />;
          })}
        </div>
        <div className='flexcontainer flexcolumn'>{resolveComponent()}</div>
      </>
    );
  };

  return <RenderGallery />;
};

export default Gallery;
