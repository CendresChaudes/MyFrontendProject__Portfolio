import svgstore from 'gulp-svgstore';

export const sprite = () => app.gulp.src(`${app.path.source.sprite}`)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'SPRITE',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(app.plugins.newer(`${app.path.build.images}/sprite`))
  .pipe(svgstore({ inlineSvg: true }))
  .pipe(app.plugins.rename('sprite.svg'))
  .pipe(app.gulp.dest(app.path.build.sprite))
  .pipe(app.plugins.browser.stream());
