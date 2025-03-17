const {src, dest, task, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const plugins = [cssnano({ preset: 'default' })];

// console.log("GULP!", gulp);

// const PATH = {
//
// }


function scssMin() {
    return src("./src/**/*.scss")
        .pipe(sass()).on("error", sass.logError)
        .pipe(postcss(plugins))
        .pipe(rename({ suffix: '.min' }))
        // .pipe(dest("./assets"));
        .pipe(dest("./assets/styles"));
}

function syncInit () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

async function sync() {
    browserSync.reload();
}

function watchFiles() {
    syncInit();
    watch("./src/**/*.scss", scssMin);
    watch("./src/**/*.scss", sync);
    watch("./*.html", sync);
    watch("./src/**/*.js", sync);
}

// task("scss", scss);
task("watch", watchFiles);