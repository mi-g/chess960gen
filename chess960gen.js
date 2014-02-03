/*
 * This code is public domain
 *
 * Original author: Michel Gutierrez (http://www.jocly.com/)
 * 
 */

"use strict";

function chess960Gen(seed) {
    var cols = [], empty = [0, 1, 2, 3, 4, 5, 6, 7], fullSeed = 960,
        b1, b2, nn;

    if (seed === undefined) {
        seed = Math.floor(Math.random() * 960);
    } else {
        seed %= 960;
    }

    function rand(range) {
        fullSeed /= range;
        var value = Math.floor(seed / fullSeed);
        seed %= fullSeed;
        return value;
    }
    function assign(piece, col) {
        cols[col] = piece;
        empty.splice(empty.indexOf(col), 1);
    }
    b1 = rand(4) * 2;
    b2 = rand(4) * 2 + 1;
    assign('B', b1);
    assign('B', b2);
    assign('Q', empty[rand(6)]);
    nn = [ [0, 1], [0, 2], [0, 3], [0, 4], [1, 2],
        [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]][rand(10)];
    assign('N', empty[nn[1]]);
    assign('N', empty[nn[0]]);
    assign('R', empty[0]);
    assign('K', empty[0]);
    assign('R', empty[0]);
    return cols;
}

/*

console.log(chess960Gen(123).join(""));

*/
