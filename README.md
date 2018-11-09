# Installation

1. The project is built using Gulp, to run it, you must have Node.js installed.
[Node.js](https://nodejs.org/en/)

2. After the Node is installed, you can install Gulp. Open a terminal (Command Prompt on Windows) and run the following command: **- npm i gulp -g**. The -g switch says that the package will be installed globally on the system, that is, on the system, and not on the project folder. Without the -g switch, the packages are installed in the folder where the current commands are executed.

3. **init** (create package.json).

4. npm install **--save-dev gulp** (if you do not use already created package.json).

5. installing all the modules you need.

6. Create gulpfile.js (if you do not use already created gulpfile.js).

7. **gulp** (run a project).



## Work with gulp in a specific project

First create package dependency package.json
The package.json file contains a list of all the packages that are used in the project.

When installing a package with the --save-dev key, the package is automatically added to package.json. In order not to install all packages in each new project manually, use the already ready package.json with the required modules and dependencies (**you can take it in my project**), placing it in the root of our project.

Package.json is generated using the **- npm init** command, which will output several questions to the console to create a file.
The name item displays the name of your project directory by default.


##### My package.json contains:

    "autoprefixer": "^9.1.3",
    "browser-sync": "^2.18.2",
    "gulp": "^3.9.1",
    "gulp-autoprefixer": "^6.0.0",
    "gulp-clean-css": "^2.0.13",
    "gulp-imagemin": "^3.2.0",
    "gulp-notify": "^2.2.0",
    "gulp-rename": "^1.2.2",
    "gulp-sass": "^3.1.0",
    "gulp-sourcemaps": "^2.6.4",
    "gulp-uglify": "^2.0.0",
    "gulp-watch": "^4.3.11"
    
    
To install a specific version, use @, i.e. plugin @ version number. Example:
npm install --save-dev gulp-livereload@1.5.0

##### Example gulpfile.js:

```var gulp = require('gulp'),
    minify = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create();

gulp.task('default', ['browsersync', 'watch']);

/* gulp command runs two tasks => 'browsersync', 'watch'
'browsersync' - display code change in real time.
'watch' - keeps track of file changes (scss, script.js), if changes occur - files are minimized and the page reloads.*/

gulp.task('browsersync', function () {
    bs.init({
        server: "./",
        port: 8080
    });
});

gulp.task('watch', function() {
    gulp.watch('sass/*.scss', ['style']);
    gulp.watch('script/script.js', ['script']);
    bs.watch('*.html').on('change', bs.reload);
});

gulp.task('style', function() {
    return gulp.src('sass/main.scss', {style : 'expended'})
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: ['sass/**']}))
        .pipe(autoprefixer())
        .pipe(rename({suffix: '.min'}))
        .pipe(minify())
        .pipe(gulp.dest('css/'))
        .pipe(notify({message: 'Style task is finished'}))
        .pipe(bs.reload({stream: true}));
});

gulp.task('script', function() {
    return gulp.src('script/script.js')
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js/'))
        .pipe(notify({message: 'Script task is finished'}))
        .pipe(bs.reload({stream: true}));
});

gulp.task('imagemin', function() {
    return gulp.src('img/**')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'));
});
```
