var gulp = require('gulp'),
    rename = require('gulp-rename'),
    markdown = require('gulp-markdown');

gulp.task('markdown_docker', function() {
    return gulp.src(["versions.md", "history.md"])
        .pipe(rename({
            extname: ".html",
            suffix: "-history"

        }))
        .pipe(markdown())

        .pipe(gulp.dest('/var/www/html/tbas2_1/pages'))
});

gulp.task('move_images', function() {
    return gulp.src("images/tbas-history/*.*")
        .pipe(gulp.dest('/var/www/html/tbas2_1/pages/images/tbas-history'));
});

// gulp.task('default', ['markdown_docker', 'move_images']);

exports.default = gulp.series(
    'markdown_docker', 'move_images'
);