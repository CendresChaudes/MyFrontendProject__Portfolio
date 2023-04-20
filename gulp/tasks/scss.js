import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const preprocessorSass = gulpSass(dartSass);

export const scss = () => app.gulp.src(app.path.source.scss, { sourcemaps: app.isDev })
  .pipe(app.plugins.plumber(app.plugins.notify.onError({
    title: 'SCSS',
    message: 'Error: <%= error.message %>'
  })))
  .pipe(preprocessorSass())
  .pipe(app.plugins.replace(/@img\//g, '../images/'))
  .pipe(app.plugins.replace(/@fonts\//g, '../fonts/'))
  .pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
  .pipe(app.plugins.if(app.isBuild, webpcss({
    webpClass: '.webp',
    noWebpClass: '.no-webp'
  })))
  .pipe(app.plugins.if(app.isBuild, autoPrefixer({
    grid: true,
    overrideBrowserslist: ['last 3 versions'],
    cascade: true
  })))
  .pipe(cleanCss())
  .pipe(app.plugins.rename({ extname: '.min.css' }))
  .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: '.' }))
  .pipe(app.plugins.browser.stream());
