var gulp = require("gulp");
var browserify = require("browserify");
var source = require("vinyl-source-stream");
var sass = require("gulp-ruby-sass")

gulp.task("default", function(){
	console.log("gulp gulp");
});

gulp.task("compile:js", function(){
	var bundle = browserify("./src/js/main.js").bundle();
	bundle
		.pipe(source("main.js"))
		.pipe(gulp.dest("./public/assets/js"))
});

gulp.task("compile:css", function(){
	return gulp.src(["./src/scss/*.scss"])
		.pipe(sass())
		.pipe(gulp.dest("./public/assets/css"))
})

gulp.task("watch", ["compile:js", "compile:css"], function(){
	gulp.watch(["./src/js/**/*.js"], ["compile:js"]);
	gulp.watch(["./src/scss/**/*.scss"], ["compile:css"])
})