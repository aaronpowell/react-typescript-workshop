var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var path = require('path');
var tsProject = require('./tsconfig.json');
var browserify = require('browserify');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var lrload = require('livereactload');
var nodemon = require('gulp-nodemon');
var gutil = require('gulp-util');
var watchify = require('watchify');

var dest = './dest';
var tsOut = 'app.js';

gulp.task('clean:ts', function () {
    return del(dest);
});

var isProd = process.env.NODE_ENV === 'production';

var bundler = browserify({
    entries: ['./src/js/index.tsx'],
    transform: [[babelify, {}]],
    plugin: isProd ? [tsify] : [tsify, lrload],    // no additional configuration is needed
    debug: !isProd,
    cache: {},
    packageCache: {},
    fullPaths: !isProd                       // for watchify
});

gulp.task('bundle:js', ['clean:ts'], function () {
    bundler
        .bundle()
        .pipe(source(tsOut))
        .pipe(gulp.dest(dest));
});

gulp.task('watch:js', ['clean:ts'], function () {
    // start JS file watching and rebundling with watchify
    var watcher = watchify(bundler)
    rebundle()
    return watcher
        .on('error', gutil.log)
        .on('update', rebundle)

    function rebundle() {
        gutil.log('Update JavaScript bundle')
        watcher
            .bundle()
            .on('error', gutil.log)
            .pipe(source(tsOut))
            .pipe(buffer())
            .pipe(gulp.dest(dest));
    }
});

gulp.task('watch:server', function () {
    nodemon({ script: 'index.js', ext: 'js', ignore: ['gulpfile.js', tsOut, 'node_modules/*'] })
        .on('change', [])
        .on('restart', function () {
            console.log('Server restarted');
        });
});

gulp.task('default', ['watch:server', 'watch:js']);
