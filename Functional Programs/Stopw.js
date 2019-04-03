var readlinesync = require('readline-sync');

var access = require('../funutility')

var start;
var stop;
var ch = readlinesync.questionInt("Enter choice:");
var date = new Date();
function start()
{
    start = date.getMilliseconds();
    console.log(start);
}
function stop()
{
    stop = date.getMilliseconds();
    console.log(stop);
}
if (ch == 1) {
    start();
    var ch = readlinesync.questionInt("Enter choice:");

    if (ch == 2)
       stop();
    var ch = readlinesync.questionInt("Enter choice:");
    if (ch == 3) {
        access.stopWatch(start, stop);
    }

}
