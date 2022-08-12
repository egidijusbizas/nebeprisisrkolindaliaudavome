import './Footer.css';
import React, { useEffect, useRef } from 'react';

interface Props {
  setNextPage: () => void;
  loadingPicturesToggle: boolean;
  noData: boolean;
}

const Footer: React.FC<Props> = (props) => {
  const { setNextPage, loadingPicturesToggle, noData } = props;
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
    <div id='bottomDiv' className='footer'>
      <div id='intersectionRef' ref={bottomReached} className={noData || loadingPicturesToggle ? 'hidden' : ''}></div>
      {!noData && loadingPicturesToggle && (
        <div>
          <h1>There is more...</h1>
        </div>
      )}
    </div>
  );
};

export default Footer;
