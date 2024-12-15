let N = 2005;
if (N % 4 === 0 && (N % 100 !== 0 || N % 400 === 0)) {
    console.log(`${N} is a leap year`);
}
else {
    console.log(`${N} is not a leap year`);
}


