import './Footer.css';
import React, { useEffect, useRef } from 'react';

interface Props {
  loadNextPage: () => void;
  loadingPicturesToggle: boolean;
}

const Footer = (props: Props) => {
  const { loadNextPage, loadingPicturesToggle } = props;
  const bottomReached = useRef<HTMLDivElement>(document.createElement('div'));

  const loadPageOnElementIntersection = () => {
    /* eslint-disable no-unused-vars */
    const observer = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        loadNextPage();
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
      <span className={loadingPicturesToggle ? 'footer__loading_span_active' : 'footer__loading_span'}>
        <h1>There is more...</h1>
      </span>
    </div>
  );
};

export default Footer;
