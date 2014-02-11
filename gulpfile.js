'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var browserify = require('gulp-browserify');
var csso = require('gulp-csso');
var mocha = require('gulp-mocha');
var rename = require('gulp-rename');
var rework = require('gulp-rework');
var uglify = require('gulp-uglify');
var breakpoints = require('rework-breakpoints');
var npm = require('rework-npm');
var vars = require('rework-vars');

gulp.task('Compile and compress modules', function () {
  gulp
    .src('client/modules/index.js')
    .pipe(browserify({buffer: false, debug: true}))
    .pipe(uglify({outSourceMap: true}))
    .pipe(rename('application.js'))
    .pipe(gulp.dest('build/scripts/'));
});

gulp.task('Copy static assets', function () {
  gulp.src('client/index.html').pipe(gulp.dest('build/'));
  gulp.src('client/fonts/**').pipe(gulp.dest('build/fonts'));
  gulp.src('client/images/**').pipe(gulp.dest('build/images/'));
});

gulp.task('Compile stylesheets', function () {
  gulp
    .src('client/styles/index.css')
    .pipe(rework(npm(), vars(), rework.colors(), rework.extend(), breakpoints))
    .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 10'))
    .pipe(csso(true))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('build/styles'));
});

gulp.task('Perform tests', function () {
  gulp
    .src('tests/index.js')
    .pipe(mocha({ui: 'bdd', reporter: 'dot', globals: []}));
});

gulp.task('Copy client-side JavaScript libraries', function () {
  gulp.src("client/vendor/backbone/backbone-min.js").pipe(gulp.dest("build/js"));
  gulp.src("client/vendor/backbone/backbone-min.map").pipe(gulp.dest("build/js"));
  gulp.src("client/vendor/jquery/jquery.min.js").pipe(gulp.dest("build/js"));
  gulp.src("client/vendor/jquery/jquery.min.map").pipe(gulp.dest("build/js"));
  gulp.src("client/vendor/lodash/dist/lodash.underscore.min.js").pipe(gulp.dest("build/js"));
  gulp.src("client/vendor/react/react.min.js").pipe(gulp.dest("build/js"));
});

gulp.task('default', [
  'Compile and compress modules',
  'Copy static assets',
  'Compile stylesheets',
  'Perform tests',
  'Copy client-side JavaScript libraries'
]);
