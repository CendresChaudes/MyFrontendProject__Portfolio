import terser from 'gulp-terser';
import webpack from 'webpack-stream';
import { webpackConfig } from '../../webpack.config.js';

export const js = () => app.gulp.src(app.path.source.js, { sourcemaps: app.isDev })
  .pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: 'JS',
    message: 'Error: <%= error.message %>'
  })))
  .pipe(app.plugins.replace(/@img\//g, '../images/'))
  .pipe(webpack({ config: webpackConfig(app.isDev) }))
  .pipe(app.plugins.if(app.isBuild, terser()))
  .pipe(app.gulp.dest(app.path.build.js))
  .pipe(app.plugins.browser.stream());
