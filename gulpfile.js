const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss') // Путь к SCSS файлам
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css')); // Путь к директории, куда будут сохраняться скомпилированные CSS файлы
});

gulp.task('watch', function () {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));