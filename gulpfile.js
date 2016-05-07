var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();
var jslint = require('gulp-jslint');

gulp.task('sass', function() {
  gulp.src('public/stylesheets/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'));
});

// gulp.task('jslint', function () {
//     return gulp.src(['public/*/*'])
//             .pipe(jslint({  // this object represents the JSLint directives being passed down  }))
//             .pipe(jslint.reporter( 'default' ));
// });

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "./public"
  });
});

gulp.task('watch', function() {
	var reload = browserSync.reload;
	gulp.watch("public/stylesheets/*.scss", ['sass']);
	gulp.watch("public/*/*.js", ['scripts']);
	gulp.watch("*.js").on('change', reload);
	gulp.watch("public/*.html").on('change', reload);
	gulp.watch("public/*.js").on('change', reload);
	gulp.watch("public/*/*.js").on('change', reload);
	gulp.watch("public/*/*.css").on('change', reload);
	gulp.watch("public/*/*.scss").on('change', reload);

	// gulp.src(["public/*.html"], {
	//   base: 'public'
	// }).pipe(gulp.dest("build/"));
});

gulp.task('default', ['sass', 'serve', 'watch']); // 'jslint'
