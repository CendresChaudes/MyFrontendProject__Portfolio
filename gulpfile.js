import gulp from 'gulp';

import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  path,
  gulp,
  plugins
};

import { pug } from './gulp/tasks/pug.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { bitmap } from './gulp/tasks/bitmap.js';
import { svg } from './gulp/tasks/svg.js';
import { sprite } from './gulp/tasks/sprite.js';
import { copyFonts } from './gulp/tasks/fonts.js';
import { server } from './gulp/tasks/server.js';
import { clean } from './gulp/tasks/clean.js';
import { copy } from './gulp/tasks/copy.js';
import { zip } from './gulp/tasks/zip.js';

const watcher = () => {
  gulp.watch(app.path.watch.pug, pug);
  gulp.watch(app.path.watch.scss, scss);
  gulp.watch(app.path.watch.js, js);
  gulp.watch(app.path.watch.bitmap, bitmap);
  gulp.watch(app.path.watch.svg, svg);
  gulp.watch(app.path.watch.sprite, sprite);
  gulp.watch(app.path.watch.other, copy);
};

const tools = gulp.parallel(server, watcher);
const mainTasks = gulp.parallel(copy, pug, scss, js, bitmap, svg, sprite, copyFonts);

export const dev = gulp.series(clean, mainTasks, tools);

export const build = gulp.series(clean, mainTasks, tools);

export const makeZIP = gulp.series(clean, mainTasks, zip);
