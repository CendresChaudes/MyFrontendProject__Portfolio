import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = 'dist';
const sourceFolder = 'source';

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    images: `${buildFolder}/images/`,
    sprite: `${buildFolder}/images/sprite`,
  },
  source: {
    pug: `${sourceFolder}/pug/pages/*.pug`,
    scss: `${sourceFolder}/sсss/style.scss`,
    js: `${sourceFolder}/js/**/*.js`,
    bitmap: `${sourceFolder}/images/{content,decorative}/**/*.{jpg,jpeg,png,webp,gif}`,
    favicons: `${sourceFolder}/images/favicons/*`,
    svg: `${sourceFolder}/images/{content,decorative}/**/*.svg`,
    sprite: `${sourceFolder}/images/sprite/*.svg`,
    fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    other: `${sourceFolder}/*.{ico,webmanifest,xml}`
  },
  watch: {
    pug: `${sourceFolder}/pug/**/*.pug`,
    scss: `${sourceFolder}/sсss/**/*.scss`,
    js: `${sourceFolder}/js/**/*.js`,
    bitmap: `${sourceFolder}/images/{content,decorative}/**/*.{jpg,jpeg,png,webp,gif}`,
    favicons: `${sourceFolder}/images/favicons/*`,
    svg: `${sourceFolder}/images/{content,decorative}/**/*.svg`,
    sprite: `${sourceFolder}/images/sprite/*.svg`,
    fonts: `${sourceFolder}/fonts/**/*.{woff,woff2}`,
    other: `'${sourceFolder}/*.{ico,webmanifest,xml}`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
  root: rootFolder
};
