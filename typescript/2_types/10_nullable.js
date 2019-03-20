"use strict";
// null has its own type!
// if we want to clear a value given some condition
// used in values you want to reset or clear after some process.
// can explicitly say if can be null or not.
// if you want to use the feature:
// change tsconfig to // "strictNullChecks": true,  **see tsconfig file!!!
// and do a union type:
var canBeNull;
canBeNull = 12;
canBeNull = null;
