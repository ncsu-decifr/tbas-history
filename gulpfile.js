var gulp = require('gulp'),
    rename = require('gulp-rename'),
    markdown = require('gulp-markdown');

gulp.task('markdown_docker', function() {
    return gulp.src('README.md')
        .pipe(rename({
            extname: ".html",
            suffix: "-documentation"

        }))
        .pipe(markdown())

        .pipe(gulp.dest('/var/www/html/tbas2_1/pages'))
});

gulp.task('move_images', function() {
    return gulp.src("images/tbas-documentation/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/images/tbas-documentation'));
});

gulp.task('default', ['markdown_docker', 'move_images']);