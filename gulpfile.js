const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify')

gulp.task('css', function(){
  return gulp.src('sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
      browswers: ['last 3 versions']
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('css/'))
})
