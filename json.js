// JSON
// JavaScript Object NOTATION

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);


const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump: () => {   // 함수는 JSON에 포함되지 않음
        console.log(`${name} can jump!`);
    }
}
json = JSON.stringify(rabbit); 
console.log(json);

json = JSON.stringify(rabbit, ['name',, 'color', 'size']); // 원하는 property만 JSON으로 변환
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);

// obj.jump(); // 함수는 JSON에 포함되지 않았기 때문에 obj에는 jump 함수가 없음
console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); // JSON으로 변환된 birthDate는 string이기 때문에 getDate() 사용 불가

