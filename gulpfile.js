const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');


// CSS
gulp.task('css', function() {
  return gulp.src('sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) //{outputStyle: 'compressed'}
    .pipe(autoprefixer({
      browsers: ['last 3 versions']
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('assets/css/'))
})

// Fonts
gulp.task('fonts', function() {
  return gulp.src('node_modules/font-awesome/fonts/')
    .pipe(gulp.dest('assets/fonts/'))
})

// Clean

gulp.task('clean', function() {
  return gulp.src('assets/')
    .pipe(clean())
})

// watcher
gulp.task('watch', [ 'css' ], (done) => {
  gulp.watch('sass/*.scss', [ 'css' ]);
});


const watcher = gulp.watch('sass/*.scss',['css']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
})
