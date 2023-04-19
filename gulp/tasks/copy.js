export const copy = (done) => {
  app.gulp.src([
    app.path.source.favicons,
    app.path.source.other
  ], {
    base: `${app.path.sourceFolder}`
  })
    .pipe(app.gulp.dest(`${app.path.buildFolder}`));
  done();
};
