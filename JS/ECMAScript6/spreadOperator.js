"use strict";

function addNumbers(a,b,c) {
    console.log(a+b+c);

}

var nums = [3,4,5,8];
//addNumbers(nums[0],nums[1],nums[2]);

// the spread operator way

addNumbers(...nums)

var meats = ['bacon','ham'];
var food = ['apples','kiwi','rice'];

var wholeFood = ['apples',...meats, 'kiwi','rice'];

console.log(wholeFood);
