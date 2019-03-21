const gulp = require('gulp');
const ts = require('gulp-typescript');
const JSON_FILES = ['./*.json', './src/*.json', './src/**/*.json'];
const exec = require('child_process').exec;
const merge2 = require('merge2');
const rimraf = require('rimraf');

// pull in the project TypeScript config
const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', () => {
  const tsResult = tsProject.src().pipe(tsProject());
  return merge2([
    tsResult.js.pipe(gulp.dest('dist')),
    tsResult.dts.pipe(gulp.dest('dist/definitions'))
  ]);
});

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts']);
});

gulp.task('assets', () => {
  return merge2([
    gulp.src(JSON_FILES).pipe(gulp.dest('dist')),
    gulp.src('seed/*.seed.js').pipe(gulp.dest('dist/seed'))
  ]);
});

gulp.task('delete-dist', (cb) => {
  exec('npm run clear-dist', (err, stdout, stderr) => {
    cb(err);
  })
});

gulp.task('clean', (cb) => {
  rimraf('dist', cb);
});

gulp.task("build", (cb) => {
  exec('npm start', (err, stdout, stderr) => {
    cb(err);
  })
});

gulp.task('default', ['watch', 'assets']);

gulp.task('start', ['clean', 'scripts', 'assets']);