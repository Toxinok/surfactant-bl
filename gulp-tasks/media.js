"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import debug from "gulp-debug";

gulp.task("media", () => {
    return gulp.src(paths.media.src)
        .pipe(gulp.dest(paths.media.dist))
        .pipe(debug({
            "title": "Media"
        }));
});
