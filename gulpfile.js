var gulp = require('gulp'),
    sass = require('gulp-sass'), 
    concatcss = require('gulp-concat'),
    clean = require('gulp-clean'),
    plumber = require('gulp-plumber'),
    prefix = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('blocks', function() {
    return gulp.src('app/scss/blocks/**/*.scss')
        .pipe(plumber())
    	.pipe(concatcss("_blocks.scss"))
    	.pipe(gulp.dest('app/scss/build/'))
        .pipe(browserSync.stream());
});

gulp.task('sass', function() {
    return gulp.src('app/scss/main.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(prefix({
            browsers: ['last 10 versions'],
            cascade: true
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream());
});

gulp.task('clean', function () {  
    return gulp.src('app/scss/build/_blocks.scss', {read: false})
        .pipe(clean())
        .pipe(browserSync.stream());
});


gulp.task('watch', function() {
    browserSync.init({
        server: "./app"
    });

    gulp.watch('app/scss/blocks/**/*.scss', gulp.series('clean', 'blocks', 'sass'));
});