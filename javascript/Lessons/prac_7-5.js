// # use nested loops to iterate through elements in an array

let multiArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
        console.log(multiArray[i][j]);
    }
}
    
// # use nested loops to iterate through a 3d array and print the elements
let multiArray3D = [
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],],
    
    [[10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],],
    
    [[19, 20, 21],
    [22, 23, 24],
    [25, 26, 27],],
];

for(let i = 0; i < multiArray3D.length; i++) {
    for(let j = 0; j < multiArray3D[0].length; j++) {
        for(let k = 0; k < multiArray3D[0][0].length; k++) {
            console.log(multiArray3D[i][j][k]);
        }
    }
}