const {src, dest, task, watch} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
// console.log("GULP!", gulp);

function scss() {
    return src("./src/**/*.scss")
        .pipe(sass()).on("error", sass.logError)
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
    watch("./src/**/*.scss", scss);
    watch("./src/**/*.scss", sync);
    watch("./*.html", sync);
    watch("./src/**/*.js", sync);
}

// task("scss", scss);
task("watch", watchFiles);