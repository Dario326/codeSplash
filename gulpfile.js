const gulp = require("gulp");
const sass = reqire("gulp-sass");
const concat = require("gulp-concat");
const liveReload = require("gulp-livereload");


gulp.task('html', function(){
    gulp.src('html')
})
gulp.task('css', function(){
    gulp.src(['css/*.css', 'sass/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/css'))
        .pipe(liveReload())
});
gulp.task('images', function(){
    gulp.src('images/*')
        .pipe(gulp.dest('build/images'))
        .pipe(liveReload())
});
gulp.task('js', function(){
    gulp.src('js/**')
        .pipe(gulp.dest('build/js'))
        .pipe(liveReload())
})
gulp.task('watch',['build'], function(){
    liveReload.listen();
    
    gulp.watch('sass/*.scss', ['css']);
    gulp.watch('images/*', ['images']);
})

