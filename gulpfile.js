const gulp = require('gulp')
const path = require('path')

const standard = require('gulp-standard')
const sass = require('gulp-dart-sass')
sass.compiler = require('sass')

const SASS_DIR = path.join('.', 'sass', '*.scss')
const CSS_DIR = path.join('public', 'stylesheets')
const ASSETS_DIR = path.join('public', 'assets')

gulp.task('copy-govuk-frontend-assets', () =>
  gulp.src(
    path.join('node_modules', 'govuk-frontend', 'govuk', 'assets', '*', '*')
  ).pipe(gulp.dest(ASSETS_DIR))
)

gulp.task('copy-govuk-frontend-js', () =>
  gulp.src(
    path.join('node_modules', 'govuk-frontend', 'govuk', 'all.js')
  ).pipe(gulp.dest(ASSETS_DIR))
)

gulp.task('copy-govuk-frontend', gulp.parallel([
  'copy-govuk-frontend-assets',
  'copy-govuk-frontend-js',
]))

gulp.task('copy-accessible-autocomplete-js', () =>
  gulp.src(
    path.join('node_modules', 'accessible-autocomplete', 'dist', 'accessible-autocomplete.min.js')
  ).pipe(gulp.dest(ASSETS_DIR))
)
gulp.task('copy-accessible-autocomplete-css', () =>
  gulp.src(
    path.join('node_modules', 'accessible-autocomplete', 'dist', 'accessible-autocomplete.min.css')
  ).pipe(gulp.dest(CSS_DIR))
)

gulp.task('copy-accessible-autocomplete', gulp.parallel([
  'copy-accessible-autocomplete-js',
  'copy-accessible-autocomplete-css'
]))

gulp.task('copy-assets', gulp.parallel([
  'copy-govuk-frontend',
  'copy-accessible-autocomplete'
]))



// taken from https://www.npmjs.com/package/gulp-sass readme
gulp.task('sass', () => gulp
  .src(SASS_DIR)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest(CSS_DIR))
)

gulp.task('sass:watch', () =>
  gulp.watch(SASS_DIR, ['sass'])
)

gulp.task('lint', () => gulp
  .src(['*.js'])
  .pipe(standard())
  .pipe(standard.reporter('default', {
    breakOnError: true,
    quiet: true
  }))
)

// these are named for convenience only
// the hooks are defined in package.json
gulp.task('prestart', gulp.parallel([
  'sass'
]))

gulp.task('postinstall', gulp.parallel([
  'copy-assets'
]))

gulp.task('precommit', gulp.parallel([
  'lint'
]))
