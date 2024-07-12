"use strict";
let sales = 12345678;
let numbers = [1, 2, 3];
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
;
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map