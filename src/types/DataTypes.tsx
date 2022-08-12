export interface PictureUrls {
  raw?: string;
  full?: string;
  regular?: string;
  small?: string;
  thumb?: string;
  s3?: string;
}

export interface PicturesData {
  id: string;
  urls: PictureUrls;
}
