"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../components");
const Client_1 = require("../api/Client");
const react_1 = require("react");
function Home() {
    const [page, setPage] = (0, react_1.useState)(1);
    const [loadingPicturesToggle, setLoadingPicturesToggle] = (0, react_1.useState)(false);
    const [pictures, setPictures] = (0, react_1.useState)([]);
    let pageRef = (0, react_1.useRef)({});
    let picturesRef = (0, react_1.useRef)({});
    picturesRef.current = pictures;
    pageRef.current = page;
    const spreadPictures = (data) => {
        setPictures([...picturesRef.current, ...data]);
    };
    const loadNextPage = () => {
        setLoadingPicturesToggle(true);
        setPage(pageRef.current + 1);
        // console.log('Parsing page', pageRef.current);
        (0, Client_1.getPictures)(pageRef.current, spreadPictures);
    };
    (0, react_1.useEffect)(() => {
        (0, Client_1.getPictures)(pageRef.current, spreadPictures);
    }, []);
    // console.log(picturesRef.current, pageRef.current);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'container column fullwidth' }, { children: [(0, jsx_runtime_1.jsx)(components_1.Gallery, { pictures: picturesRef.current }), (0, jsx_runtime_1.jsx)(components_1.Footer, { loadNextPage: loadNextPage, loadingPicturesToggle: loadingPicturesToggle })] })));
}
exports.default = Home;
