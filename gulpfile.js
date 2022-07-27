const gulp = require('gulp');
const cssnano = require('gulp-cssnano');

function nano(){
    return gulp.src('./src/dist/css/style.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./src/dist/css'))
}

exports.default = nano;