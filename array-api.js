// Q1. make a string out of an array
// 배열을 스트링으로 변환하는 방법
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(' `');
    console.log(result);
}

// Q2. make an array out of a string 
// 스트링을 배열로 변환하는 방법
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// 배열을 거꾸로 만드는 방법
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first two elements
// 배열에서 원하는 부분만 잘라내어 새로운 배열을 만드는 방법
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),

]

// Q5. find a student with the score 90
{
    const result = students.forEach((student) => {
        if(student.score === 90){
            console.log(student);
        }
    });

    const result2 = students.find((student) => student.score === 90);
    console.log(result2);
}
// Q6. make an array of enrolled students
{
    const result = students.filter( (student)=>
        student.enrolled === true
    );
    console.log(result);   
}

// Q7. make an array containing only the students' scores
{
    // map메서드는 배열안에 있는 모든 요소들을 콜백함수로 전달하여 처리하고, 
    // 그 결과를 새로운 배열로 반환한다.
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    // some메서드는 배열의 요소 중에서 콜백함수의 조건을 만족하는 요소가 
    // 하나라도 있는지 없는지 확인한다.
    const result = students.some((student) => student.score < 50);
    console.log(result);

    const result2 = students.every((student) => student.score < 50);
    console.log(result2);
}

// Q9. compute students' average score
{
    const result = students.reduce( (prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
{
    const result = students.map((student) => student.score)
    .join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
{
    const result = students.map( (student) => student.score).sort( (a, b) => a - b).join();
    console.log(result);
}