import webp from 'gulp-webp';
import imagemin from 'gulp-imagemin';

export const bitmap = () => app.gulp.src(app.path.source.bitmap)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'BITMAP IMAGES',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(app.plugins.newer(app.path.build.images))
  .pipe(app.plugins.if(app.isBuild, webp()))
  .pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.images)))
  .pipe(app.plugins.if(app.isBuild, app.gulp.src(app.path.source.bitmap)))
  .pipe(app.plugins.if(app.isBuild, app.plugins.newer(app.path.build.images)))
  .pipe(app.plugins.if(app.isBuild, imagemin({
    progressive: true,
    interlaced: true,
    optimizationLevel: 3
  })))
  .pipe(app.gulp.dest(app.path.build.images))
  .pipe(app.plugins.browser.stream());
