// import { Gallery, Footer } from '../components';
// import { getPictures } from '../api/Client';

// import React, { useEffect, useRef, useContext } from 'react';

// import { RandomPicturesContext } from '../contexts/RandomPicturesContext';
// import { RandomPicturesContextProvider } from '../contexts/RandomPicturesContext';

// function Home() {
//   const { page, setPage, loadingPicturesToggle, setLoadingPicturesToggle, pictures, setPictures } = useContext(RandomPicturesContext);

//   let pageRef = useRef({});
//   let picturesRef = useRef({});

//   picturesRef.current = pictures;
//   pageRef.current = page;

//   const spreadPictures = (data) => {
//     setPictures([...picturesRef.current, ...data]);
//   };

//   const loadNextPage = () => {
//     setLoadingPicturesToggle(true);
//     setPage(pageRef.current + 1);
//     // console.log('Parsing page', pageRef.current);
//     getPictures(pageRef.current, spreadPictures);
//   };

//   useEffect(() => {
//     getPictures(pageRef.current, spreadPictures);
//   }, []);

//   console.log(picturesRef.current, pageRef.current);

//   return (
//     <RandomPicturesContextProvider>
//       <div>
//         <Gallery pictures={pictures} />
//         <Footer loadNextPage={loadNextPage} loadingPicturesToggle={loadingPicturesToggle} />
//       </div>
//     </RandomPicturesContextProvider>
//   );
// }

// export default Home;
