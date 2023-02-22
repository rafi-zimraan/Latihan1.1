"use strict";
for (let y = 0; y <= 10; y++) {
    for (let x = 0; x <= 10; x++) {
        if (y + x == 5 || x == 5 || y - x == 5 || x - y == 5 || x + y == 15 || x == 10 || x == 0 || y == 0 || y == 10) {
            document.writeln(" * ");
        }
        else {
            document.writeln(" _ ");
        }
    }
    document.write("</br>");
}
document.write("</br>");
for (let o = 0; o <= 10; o++) {
    for (let p = 0; p <= 10; p++) {
        if (o != 5 || p != 5) {
            document.write(" - ");
        }
        else {
            document.write(" 9 ");
        }
    }
    document.write("</br>");
}
