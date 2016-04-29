var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
// var angularFilesort = require('gulp-angular-filesort');
// var naturalSort = require('gulp-natural-sort');
// var inject = require('gulp-inject');

gulp.task('sass', function() {
  gulp.src('public/stylesheets/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('public/stylesheets/*.scss', ['sass']);
});

// gulp.task('index', function () {
//   var target = gulp.src('./public/index.html');
//   // It's not necessary to read the files (will speed up things), we're only after their paths:
//   var sources = gulp.src(
//       ['./**/*.js', './**/*.css'],
//       {
//         cwd: __dirname + "/public/",
//       }
//     );

//   return target.pipe(inject(sources, { addRootSlash: false }))
//     .pipe(gulp.dest('./public'));
// });

gulp.task('default', ['sass', 'watch']);
