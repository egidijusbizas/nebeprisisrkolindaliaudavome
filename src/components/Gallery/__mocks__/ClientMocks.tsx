// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import { PicturesData, PictureUrls } from './../../../types/DataTypes';
// import { ClientConstructor } from './../../../api/Client';

export const pictureUrlsMock: PictureUrls = {
  raw: '123raw.jpg',
  thumb: '123thumb.jpg'
};

export const apiResponsePayloadPage1: Array<PicturesData> = [
  {
    id: '1',
    urls: pictureUrlsMock
  },
  {
    id: '2',
    urls: pictureUrlsMock
  },
  {
    id: '3',
    urls: pictureUrlsMock
  },
  {
    id: '4',
    urls: pictureUrlsMock
  },
  {
    id: '5',
    urls: pictureUrlsMock
  },
  {
    id: '6',
    urls: pictureUrlsMock
  },
  {
    id: '7',
    urls: pictureUrlsMock
  },
  {
    id: '8',
    urls: pictureUrlsMock
  },
  {
    id: '9',
    urls: pictureUrlsMock
  },
  {
    id: '10',
    urls: pictureUrlsMock
  }
];

export const apiResponsePayloadPage2: Array<PicturesData> = [
  {
    id: '11',
    urls: pictureUrlsMock
  },
  {
    id: '12',
    urls: pictureUrlsMock
  },
  {
    id: '13',
    urls: pictureUrlsMock
  },
  {
    id: '14',
    urls: pictureUrlsMock
  },
  {
    id: '15',
    urls: pictureUrlsMock
  },
  {
    id: '16',
    urls: pictureUrlsMock
  },
  {
    id: '17',
    urls: pictureUrlsMock
  },
  {
    id: '18',
    urls: pictureUrlsMock
  },
  {
    id: '19',
    urls: pictureUrlsMock
  },
  {
    id: '20',
    urls: pictureUrlsMock
  }
];

// export const testClient = ClientConstructor('/api', 'abc');

// export const server = setupServer(
//   rest.get('/api/photos?page=1', (req, res, ctx) => {
//     return res(ctx.json(apiResponsePayloadPage1));
//   }),
//   rest.get('/api/photos?page=2', (req, res, ctx) => {
//     return res(ctx.json(apiResponsePayloadPage2));
//   }),
//   rest.get('/api/search/photos?page=1&query=cats', (req, res, ctx) => {
//     return res(ctx.json(apiResponsePayloadPage1));
//   }),
//   rest.get('/api/search/photos?page=2&query=cats', (req, res, ctx) => {
//     return res(ctx.json(apiResponsePayloadPage2));
//   })
// );
