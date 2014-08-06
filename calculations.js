var numberArray = process.argv;

numberArray.shift();
numberArray.shift();

for(var i = 0; i < numberArray.length; i++){
    numberArray[i] = parseInt(numberArray[i]);
}

numberArray.sort(function(a, b){return a-b});

var mean = 0, median = 0, mode = 0;
var medianMin = 0, medianMax = 0;

//mean
for(var i = 0; i < numberArray.length; i++){
    mean += numberArray[i];
}
mean /= numberArray.length;
console.log("Mean: " + mean);

//median
if((numberArray.length % 2) == 0){
    medianMin = numberArray.length/2;
    medianMax = numberArray.length/2 + 1;
    median = (numberArray[medianMin] + numberArray[medianMax])/2;
} else {
    median = numberArray[Math.floor(numberArray.length/2)];
}
console.log("Median: " + median);

//mode
var modeNum;
var count = 0;
var maxCount = 0;
for(var i = 0; i < numberArray.length; i++){
    if(numberArray[i] == (numberArray[i+1])){
        count++;
        if(count > maxCount){
            modeNum = numberArray[i];
            maxCount = count;
        }
    } else {
        count = 0;
    }
}
mode = modeNum;
console.log("Mode: " + mode);
