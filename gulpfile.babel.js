"use strict";

import gulp from "gulp";

const requireDir = require("require-dir"),
    paths = {
        views: {
            src: [
                "./src/views/**/*.html",
                "./src/views/pages/*.html",
                "!./src/views/tpl/**/*.html"
            ],
            dist: "./dist/",
            watch: [
                "./src/blocks/**/*.html",
                "./src/views/**/*.html",
            ]
        },
        styles: {
            src: "./src/styles/main.{scss,sass}",
            dist: "./dist/styles/",
            watch: [
                "./src/blocks/**/*.{scss,sass}",
                "./src/styles/**/*.{scss,sass}"
            ]
        },
        scripts: {
            src: "./src/scripts/index.js",
            dist: "./dist/scripts/",
            watch: [
                "./src/blocks/**/*.js",
                "./src/scripts/**/*.js"
            ]
        },
        images: {
            src: [
                "./src/images/**/*.{jpg,jpeg,png,gif,tiff,svg}",
                "!./src/images/favicon/*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/images/",
            watch: "./src/images/**/*.{jpg,jpeg,png,gif,svg,tiff}"
        },
/*        webp: {
            src: [
                "./src/images/!**!/!*.{jpg,jpeg,png,tiff}",
                "!./src/images/favicon/!*.{jpg,jpeg,png,gif,tiff}"
            ],
            dist: "./dist/images/",
            watch: [
                "./src/images/!**!/!*.{jpg,jpeg,png,tiff}",
                "!./src/images/favicon/!*.{jpg,jpeg,png,gif,tiff}"
            ]
        },*/
        sprites: {
            src: "./src/images/svg/*.svg",
            dist: "./dist/images/sprites/",
            watch: "./src/images/svg/*.svg"
        },
        media: {
            src: [
                "./src/media/**/*.{mp3,mp4,webm,ogg}",
            ],
            dist: "./dist/media/",
            watch: "./src/media/**/*.{mp3,mp4,webm,ogg}"
        },
        fonts: {
            src: "./src/fonts/**/*.{woff,woff2}",
            dist: "./dist/fonts/",
            watch: "./src/fonts/**/*.{woff,woff2}"
        },
        gzip: {
            src: "./src/.htaccess",
            dist: "./dist/"
        }
    };

requireDir("./gulp-tasks/");

export { paths };

export const development = gulp.series("clean", "smart-grid",
    gulp.parallel(["views", "styles", "scripts", "images", "sprites", "media", "fonts"]),
    gulp.parallel("serve"));

export const prod = gulp.series("clean",
    gulp.series(["views", "styles", "scripts", "images", "sprites", "media", "fonts", "gzip"]));

export default development;
