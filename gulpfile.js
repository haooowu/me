const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const tsify = require('tsify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const notify = require('gulp-notify');

const reload = browserSync.reload;

// https://www.typescriptlang.org/docs/handbook/gulp.html
// https://stackoverflow.com/questions/59799546/typescript-babelify-browserify-uglify-buildchain-in-gulp

function stylesTask() {
  return gulp
    .src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./public/styles/'))
    .pipe(reload({stream: true}));
}

function tsTask() {
  return browserify('./src/scripts/app.ts', {debug: true})
    .plugin(tsify)
    .transform('babelify', {
      presets: ['@babel/preset-env'],
    })
    .bundle()
    .on(
      'error',
      notify.onError({
        message: 'Error: <%= error.message %>',
        title: 'Error in JS 💀',
      }),
    )
    .on('error', function (error) {
      console.error(error.toString());
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./public/scripts'))
    .pipe(reload({stream: true}));
}

function watchTask() {
  gulp.watch('./src/**/*.ts', gulp.series(tsTask));
  gulp.watch('./src/**/*.scss', gulp.series(stylesTask));
  gulp.watch('./public/styles/style.css', reload);
  gulp.watch('./index.html', reload);
}

function bsTask() {
  return browserSync.init({
    server: {
      baseDir: './',
    },
    port: 5555,
    ui: {
      port: 5556,
    },
  });
}

exports.default = gulp.series(gulp.parallel(stylesTask, tsTask, bsTask, watchTask));
