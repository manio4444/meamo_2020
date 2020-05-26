const gulp = require('gulp');

const FOLDERS = {
  PROJECT: 'meamo_2020',
  THEME: 'themes/meamo',
  HTDOCS_MAC: '/Users/marcin.kalinowski/.bitnami/stackman/machines/xampp/volumes/root/htdocs/'
};

const CONFIG = {
  SRC: {
    JS: [
      // './src/js/*.js',
    ],
    SCSS: [
      // './src/scss/main.scss',
      ],
    CSS: [
      // './src/css/**/*.css'
    ],
    THEME: `./${FOLDERS.THEME}/**/*`
  },
  DIST: {
    THEME: `${FOLDERS.HTDOCS_MAC}/${FOLDERS.PROJECT}/${FOLDERS.THEME}`
  },
  WATCHERS: {
    SCSS: [
      // './src/scss/**/*.scss'
    ],
    THEME: [
      `./${FOLDERS.THEME}/**/*`
    ]
  }
};

const deployToXamppMac = done => {
    gulp.src(CONFIG.SRC.THEME)
    .pipe(gulp.dest(CONFIG.DIST.THEME))
    done();
};

function watchers() {
  // gulp.watch(config.watchers.scss, series(StylesTask, reload));
  // gulp.watch(config.src.css, series(StylesTask, reload));
  // gulp.watch(config.src.js, series(JsTask, reload));
  gulp.watch(CONFIG.WATCHERS.THEME, deployToXamppMac);
}

exports.default = gulp.parallel(
  // StylesTask,
  // JsTask,
  deployToXamppMac,
  watchers,
  // liveReload
);
