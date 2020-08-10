var gulp = require('gulp'),
    gt = require('gulp-load-plugins')(),
    rollup = require('rollup-stream'),
    babel = require('gulp-babel'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('pug', function () {
    return gulp.src('src/pug/*.pug')
        .pipe(gt.pug({
            pretty: true
        }))
        .pipe(gulp.dest('assets'));
});
gulp.task('js', function () {
    return rollup({
        input: './src/static/js/script.js',
        format: "iife",
    })
        .pipe(source('script.js'))
        .pipe(buffer())
        .pipe(babel())
        .pipe(gulp.dest('assets/js'));
});
gulp.task('image', function () {
    return gulp.src(['src/static/img/*', 'src/static/img/**/*'])
        .pipe(gulp.dest('assets/img'));
});

gulp.task('fonts', function () {
    return gulp.src(['src/static/fonts/*'])
        .pipe(gulp.dest('assets/fonts'));
});
gulp.task('scss', function () {
    return gulp.src('src/static/scss/*.scss')
        .pipe(gt.sass({
            outputStyle: 'nested'
        }))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', gulp.series('pug', 'js', 'scss', 'image', 'fonts'));
