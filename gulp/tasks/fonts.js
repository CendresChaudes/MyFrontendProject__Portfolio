import fonter from 'gulp-fonter-fix';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => app.gulp.src(`${app.path.sourceFolder}/fonts/**/*.otf`)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'FONTS',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(fonter({ formats: ['ttf'] }))
  .pipe(app.gulp.dest(`${app.path.sourceFolder}/fonts/`));

export const ttfToWoff = () => app.gulp.src(`${app.path.sourceFolder}/fonts/**/*.ttf`)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'FONTS',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(fonter({ formats: ['woff'] }))
  .pipe(app.gulp.dest(`${app.path.sourceFolder}/fonts/`))
  .pipe(app.gulp.src(`${app.path.sourceFolder}/fonts/**/*.ttf`))
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(`${app.path.sourceFolder}/fonts/`));

export const copyFonts = (done) => {
  app.gulp.src([
    app.path.source.fonts,
  ], {
    base: `${app.path.sourceFolder}`
  })
    .pipe(app.gulp.dest(`${app.path.buildFolder}`));
  done();
};


