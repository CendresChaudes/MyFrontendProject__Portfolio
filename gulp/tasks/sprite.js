import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';

export const sprite = () => app.gulp.src([app.path.source.svg, `!${app.path.source.favicons}`, `!${app.path.source.sprite}`])
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'SPRITE',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(app.plugins.newer(app.path.build.images))
  .pipe(app.plugins.if(app.isBuild, svgmin()))
  .pipe(app.plugins.if(app.isBuild, svgstore({ inlineSvg: true })))
  .pipe(app.plugins.rename('sprite.svg'))
  .pipe(app.gulp.dest(app.path.build.sprite))
  .pipe(app.plugins.browser.stream());
