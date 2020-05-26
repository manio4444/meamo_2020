const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
// const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
// const browserSync = require('browser-sync').create();

const PROJECT_NAME = 'meamo_2020';
const THEME_FOLDER = './themes/meamo';
const THEME_ASSETS = `${THEME_FOLDER}/**/*`;

const HTDOCS_MAC = '/Users/marcin.kalinowski/.bitnami/stackman/machines/xampp/volumes/root/htdocs/';
const THEME_DEPLOY_PATH = `${HTDOCS_MAC}/${PROJECT_NAME}/${THEME_FOLDER}`;

const CONFIG = {
  SRC: {
    JS: [
      // './src/js/*.js',
    ],
    SCSS: [
      `${THEME_FOLDER}/src/scss/main.scss`
      ],
    CSS: [
      // './src/css/**/*.css'
    ],
    THEME: `${THEME_FOLDER}/**/*`
  },
  DIST: {
    FILENAME_STYLES: `meamo.min.css`,
    FILENAME_SCRIPTS: `meamo.min.js`,
    FOLDER_STYLES: `${THEME_FOLDER}/assets/css`,
    FOLDER_SCRIPTS: `${THEME_FOLDER}/assets/js`,
  },
  WATCHERS: {
    SCSS: [
      `${THEME_FOLDER}/src/scss/**/*.scss`
    ],
    TEMPLATES: [
      `${THEME_FOLDER}/templates/**/*.tpl`,
      `${THEME_FOLDER}/modules/**/*.tpl`
    ],
    THEME: [
      `${THEME_FOLDER}/**/*`
    ]
  }
};

const StylesTaskDev = done => {
  // TODO: css vendors should be imported from node_modules
  gulp.src([...CONFIG.SRC.CSS, ...CONFIG.SRC.SCSS])
  .pipe(sourcemaps.init())
  .pipe(sass())
  .on('error', swallowError)
  .pipe(concat(CONFIG.DIST.FILENAME_STYLES))
  // .pipe(autoprefixer({browsers: ['last 2 versions', '> 1% in PL', 'ie >=10']}))
  .pipe(cleanCSS())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(CONFIG.DIST.FOLDER_STYLES));
  done();
}

const deployToXamppMac = done => {
    gulp.src(CONFIG.SRC.THEME)
    .pipe(gulp.dest(THEME_DEPLOY_PATH))
    done();
};

const watchers = () => {
  gulp.watch(CONFIG.WATCHERS.SCSS, gulp.series(StylesTaskDev, deployToXamppMac));
  // gulp.watch(config.src.css, series(StylesTask, reload));
  // gulp.watch(config.src.js, series(JsTask, reload));
  gulp.watch(CONFIG.WATCHERS.TEMPLATES, deployToXamppMac);
}

function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString());
  this.emit('end')
}

exports.default = gulp.parallel(
  StylesTaskDev,
  // JsTask,
  deployToXamppMac,
  watchers,
  // liveReload
);
