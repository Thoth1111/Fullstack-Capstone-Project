import * as VibrantAPI from 'node-vibrant';

const getPallete = async (url) => {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = `${url}?not-from-cache-please`;
  const v = new VibrantAPI(img, {});
  const palette = await v.getPalette();

  // let palette = await VibrantAPI.from(url).getPalette();
  return palette;
};

export default getPallete;

