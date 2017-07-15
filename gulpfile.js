const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babelify = require('babelify');
const plumber = require('gulp-plumber');

// JavaScript
gulp.task('build', () => {
  return browserify('./javascript/index.js', { debug: true })
    .transform(babelify, { presets: ['env', 'stage-0'] })
    .bundle()
    .on('error', function(err) {
      console.log(err);
      this.emit('end');
    })
    .pipe(plumber())
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./assets/javascript'));
});

gulp.task('default', ['build']);

gulp.task('watchjs', ['build'], () => {
  gulp.watch('javascript/*.js', ['build']);
});

// CSS
gulp.task('css', function() {
  return gulp
    .src('sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) //{outputStyle: 'compressed'}
    .pipe(
      autoprefixer({
        browsers: ['last 3 versions']
      })
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/css/'));
});

// Fonts
gulp.task('fonts', function() {
  return gulp
    .src('node_modules/font-awesome/fonts/')
    .pipe(gulp.dest('assets/fonts/'));
});

// Clean css
gulp.task('clean', function() {
  return gulp.src('assets/css').pipe(clean());
});

// Watcher
gulp.task('watchcss', ['css'], done => {
  gulp.watch('sass/*.scss', ['css']);
});
