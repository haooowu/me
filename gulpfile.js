const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync'); 
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const notify = require('gulp-notify');
const reload = browserSync.reload;

function stylesTask() {
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/styles/'))
        .pipe(reload({stream:true}));
};

function jsTask() {
    return browserify('./src/scripts/app.js', { debug: true })
        .transform('babelify', {
            sourceMaps: true,
            presets: ['@babel/preset-env']
        })
        .bundle()
        .on('error', notify.onError({
            message: "Error: <%= error.message %>",
            title: 'Error in JS 💀'
        }))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./public/scripts'))
        .pipe(reload({ stream: true }));
};

function watchTask() {
    gulp.watch('./src/**/*.js', gulp.series(jsTask));
    gulp.watch('./src/**/*.scss', gulp.series(stylesTask));
    gulp.watch('./public/styles/style.css', reload);
    gulp.watch('./index.html',reload);
};

function bsTask() {
	return browserSync.init({
		server: {
			baseDir: './'
		}
	});
};

exports.default = gulp.series(
    gulp.parallel(stylesTask, jsTask, bsTask, watchTask)
)
