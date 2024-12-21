let grade = [85, 92, 78, 90, 88];
let sum = 0;
let count = 0;
for (let i = 0; i < grade.length; i++){
    console.log(grade[i]);
    if (grade[i] >= 90) {
        console.log(`Grade ${grade[i]} is excellent.`);
        count++;
    }
    sum += grade[i];
}
let summary = {
    total: grade.length,
    exc_grade: count,
    avg: sum/grade.length,
};

console.log(`Total number of grades is ${summary.total}`);
console.log(`Number of excellent grades is ${summary.exc_grade}`);
console.log(`Average grade is ${summary.avg}`);