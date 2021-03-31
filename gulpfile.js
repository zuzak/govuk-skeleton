const gulp = require('gulp')
const path = require('path')

const sass = require('gulp-sass')
sass.compiler = require('sass')

const SASS_DIR = path.join('.', 'sass', '*.scss')
const CSS_DIR = path.join('public', 'stylesheets')
const ASSETS_DIR = path.join('public', 'assets')

gulp.task('copy-govuk-frontend-assets', () => 
    gulp.src(
        path.join('node_modules', 'govuk-frontend', 'govuk', 'assets', '*', '*')
    ).pipe(gulp.dest(ASSETS_DIR))
)


// taken from https://www.npmjs.com/package/gulp-sass readme
gulp.task('sass', () => gulp
    .src(SASS_DIR)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest(CSS_DIR))
)

gulp.task('sass:watch', () =>
    gulp.watch(SASS_DIR, ['sass'])
)

gulp.task('prestart', gulp.parallel([
    'sass'
]))

gulp.task('postinstall', gulp.parallel([
    'copy-govuk-frontend-assets'
]))
