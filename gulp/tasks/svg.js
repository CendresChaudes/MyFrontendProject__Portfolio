import svgmin from 'gulp-svgmin';

export const svg = () => app.gulp.src(app.path.source.svg)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'SVG IMAGES',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(app.plugins.newer(app.path.build.images))
  .pipe(app.plugins.if(app.isBuild, svgmin()))
  .pipe(app.gulp.dest(app.path.build.images))
  .pipe(app.plugins.browser.stream());
