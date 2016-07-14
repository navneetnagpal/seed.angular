'use strict';

var gulp = require('gulp'),
    debug = require('gulp-debug'),
    inject = require('gulp-inject'),
    del = require('del'),
    Config = require('./gulpfile.config'),
    browserSync = require('browser-sync'),
    superstatic = require('superstatic'),
    eslint = require('gulp-eslint'),
    hub = require('gulp-hub'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    merge = require('merge-stream'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps');
var production = false;
var config = new Config();
var karma = require('karma').server;
var browserify = require('browserify');
var _ = require('underscore');
var gutil = require('gulp-util');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var mkdirp = require('mkdirp');

var ngHtml2Js = require('browserify-ng-html2js');

var PATHS = {
    dest: './dist/',
    jsBuild: './dist/js',
    karmaConfig: path.resolve(__dirname, './karma.conf.js'),

    styles: {
        main: './src/scss/main.scss',
        all: './src/**/*.scss'
    },
    scriptsBuild: {
        libs: ['jquery', 'underscore', 'bootstrap', 'angular'],
        APP: './src/app/app.js'
    },
    scripts: {
        lib: './src/lib/**/*.js',
        APP: './src/app/**/*.js'
    }
};
var core = PATHS.scriptsBuild.libs;

gulp.task('clean', function(cb) {
    return del([
        path.join(PATHS.dest, '/*')
    ], cb);
});

gulp.task('test', function() {
    return karma.start({
        configFile: __dirname + '/karma.conf.js'
    });
});

gulp.task('styles', function() {
    var stream = gulp.src(PATHS.styles.main);

    if (!production) {
        stream = stream.pipe(plumber())
            .pipe(sourcemaps.init({
                loadMaps: true
            }));
    }
    stream = stream.pipe(sass())

    if (!production) {
        stream = stream.pipe(sourcemaps.write('./', {
            includeContent: true,
            sourceRoot: './'
        }));
    }
    return stream.pipe(gulp.dest(path.join(PATHS.dest, '/css/')));
});

/* creating tasks to build scripts.js */
// defining core scripts
defineScriptTask(gulp, {
    core: true,
    watch: true,
    bundleName: 'core',
    dest: PATHS.jsBuild
});
// defining application scripts
defineScriptTask(gulp, {
    core: false,
    watch: true,
    bundleName: 'app',
    dest: PATHS.jsBuild
});

gulp.task('scripts:all', ['scripts.core', 'scripts.app']);

gulp.task('build', ['styles', 'scripts:all']);
 

gulp.task('build:all', function() {
    return gulp.start('build:all:dev');
});



gulp.task('build:all:dev', function(cb) {
    return runSequence('clean', ['styles', 'scripts:all'],  'test', cb);
});


/*
/// for getting simple http server
var connect = require('gulp-connect');
gulp.task('static-connect', function () {
    connect.server({
        root: 'dist',
        livereload: true
    });
});

gulp.task('serve',['static-connect'])*/

gulp.task('default', ['build:all']);





function defineScriptTask(gulp, options) {
    var baseOptions = options;
    var bundler = _.memoize(function(bundlerOptions) {
        bundlerOptions = _.extend({
            debug: baseOptions.debug,
            entries: baseOptions.entries
        }, bundlerOptions);
        mkdirp.sync(bundlerOptions.dest);
        var defaults = {
            watch: false,
            debug: false
        };
        if (bundlerOptions.watch) {
            bundlerOptions = _.extend(defaults, bundlerOptions, watchify.args);
        }

        var b = browserify(bundlerOptions);
        if (baseOptions.core) {
            core.forEach(function(module) {
                b.require(module);
            });
        } else {
            b = b.require('APP').external(core);
        }
        if (bundlerOptions.watch) {
            b = watchify(b);
        }
        return b;
    });
    var bundle = function(options) {
        var stream = bundler(options).transform(ngHtml2Js({
            module: 'templates', // optional module name
            extension: 'ngt', // optionally specify what file types to look for
            baseDir: 'src/app', // optionally specify base directory for filename
            stripPathBefore: '/templates', // optionally specify the part of the path that should be the starting point
            prefix: '', // optionally specify a prefix to be added to the filename,
            requireAngular: false // (default: false) optionally include `var angular = require('angular');` 
            // Supported in Angular 1.3.14 and above if you bundle angular with browserify
        })).bundle();

        stream = stream.on('error', gutil.log.bind(gutil, gutil.colors.red.bold('x error ' + options.bundleName)))
            .pipe(source(options.bundleName + '.js'))
            .pipe(buffer());

        return stream.pipe(gulp.dest(options.dest))
            .on('end', options.message);
    };
    gulp.task('scripts.' + (baseOptions.core ? 'core' : 'app'), function() {
        bundle({
            debug: true,
            message: function() {
                gutil.log(gutil.colors.green.bold('☺ success on ' + baseOptions.bundleName + ':scripts'));
            },
            bundleName: baseOptions.bundleName,
            src: baseOptions.src,
            dest: baseOptions.dest,
            core: baseOptions.core
        });
    });
    if (baseOptions.watch) {
        gulp.task('scripts.' + (baseOptions.core ? 'core' : 'app') + ':watch', function() {
            var _options = {
                watch: true,
                debug: true,
                message: function() {
                    gutil.log(gutil.colors.green.bold(' ** watching ' + baseOptions.bundleName + ':scripts'));
                },
                bundleName: baseOptions.bundleName,
                src: baseOptions.src,
                dest: baseOptions.dest,
                core: baseOptions.core
            };
            bundle(_options);
            bundler(_options).on('update', function() {
                bundle(_options);
            });
        });
    }
}