// https://www.sitepoint.com/simple-gulpy-workflow-sass/

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var exec = require('child_process').exec;

var input = './themes/hugo-blog-theme/src/sass/**/*.scss';
var output = './themes/hugo-blog-theme/static/css';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed' // expanded
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};


gulp.task('hugo', function () {
  exec('hugo server --buildDrafts=true --verbose=true');
});

gulp.task('sass', function () {
  return gulp
  .src(input)
  .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
  return gulp
    // Watch the input folder for change,
    // and run `sass` task when something happens
    .watch(input, ['sass'])
    // When there is a change,
    // log a message in the console
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['hugo', 'sass', 'watch']);
