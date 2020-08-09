var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var ghPages = require('gulp-gh-pages');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', './dist/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

// Move the javascript files into our /js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(gulp.dest("./dist/js"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.parallel('sass', function() {

    browserSync.init({
        server: "./dist/"
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', './dist/scss/*.scss'], gulp.series('sass'));
    gulp.watch("./dist/*.html").on('change', browserSync.reload);
}));

// Deploy to gh Pages
gulp.task('deploy', function() {
  return gulp.src("./dist/**/*").pipe(ghPages());
});

gulp.task('default', gulp.series('js','serve'));
