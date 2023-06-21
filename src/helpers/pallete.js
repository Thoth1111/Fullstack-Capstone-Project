import * as VibrantAPI from 'node-vibrant';

async function getPallete(url) {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = `${url}?not-from-cache-please`;
  const v = new VibrantAPI(img, {});
  const pallette = v.getPalette();

  // let pallette = await VibrantAPI.from(url).getPalette()
  return pallette;
}

export default getPallete;
