import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import newer from 'gulp-newer';
import ifPlugin from 'gulp-if';
import browser from 'browser-sync';
import notify from 'gulp-notify';


export const plugins = {
  if: ifPlugin,
  plumber,
  browser,
  rename,
  replace,
  newer,
  notify
};
