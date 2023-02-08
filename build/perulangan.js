"use strict";
for (let y = 0; y <= 10; y++) {
    for (let x = 0; x <= 10; x++) {
        if (y == x || x == 10 || y + x == 10 || x == 0 || x == 5) {
            document.write(" * ");
        }
        else {
            document.write(" _ ");
        }
    }
    document.write("<br>");
}
document.write("<br>");
for (let u = 0; u <= 10; u++) {
    for (let i = 0; i <= 10; i++) {
        if (i + u == 5 || u - i == 5 || i - u == 5 || i + u == 15) {
            document.write(" * ");
        }
        else {
            document.write(" _ ");
        }
    }
    document.write("<br>");
}
document.write("<br>");
for (let n = 0; n <= 10; n++) {
    for (let m = 0; m <= 10; m++) {
        if (n == 0 || m == 10 || n == m || m - n == 1 || m - n == 2 || m - n == 3 || m - n == 4 || m - n == 5 || m - n == 6 || m - n == 7 || m - n == 8) {
            document.write(" * ");
        }
        else {
            document.write(" _ ");
        }
    }
    document.write("<br>");
}
