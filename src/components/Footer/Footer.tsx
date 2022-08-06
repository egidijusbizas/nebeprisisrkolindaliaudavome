import './Footer.css';
import React, { useEffect, useRef } from 'react';

interface Props {
  setNextPage: () => void;
  loadingPicturesToggle: boolean;
}

const Footer: React.FC<Props> = (props) => {
  const { setNextPage, loadingPicturesToggle } = props;
  const bottomReached = useRef<HTMLDivElement>(document.createElement('div'));

  const loadPageOnElementIntersection = () => {
    /* eslint-disable no-unused-vars */
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setNextPage();
      }
    });
    observer.observe(bottomReached.current);
    /* eslint-enable no-unused-vars */
  };

  useEffect(() => {
    loadPageOnElementIntersection();
  }, []);

  return (
    <div ref={bottomReached} id='bottomDiv' className='footer'>
      {loadingPicturesToggle && (
        <div>
          <h1>There is more...</h1>
        </div>
      )}
    </div>
  );
};

export default Footer;
