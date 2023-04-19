import preprocessorPug from 'gulp-pug';
import htmlmin from 'gulp-html-minifier';

export const pug = () => app.gulp.src(app.path.source.pug, { sourcemaps: app.isDev })
  .pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: 'PUG',
    message: 'Error: <%= error.message %>'
  })))
  .pipe(preprocessorPug())
  .pipe(app.plugins.replace(/@img\//g, 'images/'))
  .pipe(app.plugins.if(app.isBuild, htmlmin({ collapseWhitespace: true })))
  .pipe(app.gulp.dest(app.path.build.html))
  .pipe(app.plugins.browser.stream());
