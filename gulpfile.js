'use strict';


// ---
// Setup: load plugins and load tasks
// ---

// Project variables
const project = {
  buildSrc: './documentation',
  buildDest: './_site',
  cssSrc: '/assets/_scss/*.scss',
  cssDest: '/assets/css/',
  revDest: '/assets/build/',
  scriptsSrc: [
    'documentation/assets/js/**/*.js'
  ],
  scriptsDest: '/assets/js',
  vendorDest: './_vendor/'
}

// Plugins
var gulp         = require('gulp');
var shell        = require('gulp-shell');
var browsersync  = require("browser-sync").create();
var clean        = require('gulp-clean');
var sass         = require("gulp-sass");
var postcss      = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano      = require("cssnano");
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var rename       = require("gulp-rename");
var rev          = require('gulp-rev');
var babel        = require('gulp-babel');


// ---
// Functions
// ---

// Run our static site generator to build the pages
// ---
gulp.task('generate', shell.task('ELEVENTY_ENV=development eleventy'));
gulp.task('generateBuild', shell.task('ELEVENTY_ENV=production eleventy'));


// Browsersync
// ---
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: project.buildDest,
      reloadDelay: 2000,
      debounce: 200,
      notify: true,
      ghostMode: {
        clicks: true,
        location: true,
        forms: true,
        scroll: false
      }
    }
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// Clean
// ---
function cleanBuild() {
  return gulp.src(project.buildDest, {read: false, allowEmpty: true},)
    .pipe(clean());
}


// Compile Documentation SCSS files to CSS
// ---
function css() {
  return gulp.src(project.buildSrc + project.cssSrc)
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(project.buildDest + project.cssDest))
    .pipe(browsersync.stream());
}

function publishedCss() {
  return gulp.src("./appuniversum.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("./"))
    .pipe(postcss([cssnano()]))
    .pipe(rename((path) => {
      path.basename += ".min";
    }))
    .pipe(gulp.dest("./"))
}

function productionCss() {
  return gulp.src(project.buildSrc + project.cssSrc)
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename((path) => {
      path.basename += ".min";
    }))
    .pipe(rev())
    .pipe(gulp.dest(project.buildSrc + project.revDest))
    .pipe(rev.manifest({
      base: project.buildSrc + project.revDest,
      path: "documentation/_data/" + 'manifest.json',
      merge: true
    }))
    .pipe(gulp.dest(project.buildSrc + project.revDest));
}


// Uglify our javascript files into one.
// ---
function scripts() {
  return gulp
    .src(project.scriptsSrc)
    .pipe(concat('scripts.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest(project.buildDest + project.scriptsDest))
    .pipe(browsersync.stream());
}

function productionScripts() {
  return gulp.src(project.scriptsSrc)
    .pipe(concat('scripts.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rev())
    .pipe(gulp.dest(project.buildSrc + project.revDest))
    .pipe(rev.manifest({
      base: project.buildSrc + project.revDest,
      path: "documentation/_data/" + 'manifest.json',
      merge: true
    }))
    .pipe(gulp.dest(project.buildSrc + project.revDest));
}


// Watch folders for changes
// ---
function watchFiles() {
  gulp.watch('documentation/assets/_scss/**/*', gulp.parallel('css'));
  gulp.watch('appuniversum/**/*', gulp.parallel('css'));
  gulp.watch('documentation/assets/js/**/*', gulp.parallel('scripts'));
  gulp.watch(
    [
      'documentation/assets/img/**/*.png',
      'documentation/assets/img/**/*.jpg',
      'documentation/assets/img/**/*.svg',
      'documentation/pages/**/*',
      'documentation/_data/**/*.json',
      'documentation/_includes/**/*.liquid',
      'documentation/_pages/*.md',
      'documentation/components/*.md',
      'documentation/patterns/*.md',
    ],
    gulp.series('generate', 'browserSyncReload')
  );
}


// ---
// Tasks
// ---
gulp.task('cleanBuild', cleanBuild);
gulp.task('css', css);
gulp.task('publishedCss', publishedCss);
gulp.task('productionCss', productionCss);
gulp.task('scripts', scripts);
gulp.task('productionScripts', productionScripts);
gulp.task('watchFiles', watchFiles);
gulp.task('browserSync', browserSync);
gulp.task('browserSyncReload', browserSyncReload);


// Assets
gulp.task('assets', gulp.parallel(
  'css',
  'scripts'
));


// Default
gulp.task('default', gulp.series(
  'cleanBuild',
  'css',
  'publishedCss',
  'productionCss',
  'productionScripts',
  'generateBuild',
));

// Production
gulp.task('develop', gulp.series(
  'cleanBuild',
  'generate',
  'assets'
));

// Watch
gulp.task('watch', gulp.series(
    'develop',
    gulp.parallel('watchFiles', 'browserSync')
  )
);
