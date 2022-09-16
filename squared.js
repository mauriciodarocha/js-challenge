const squared = (arr) => arr.map(v=>v*v).sort((a,b)=>{ return a===b ? 0 : a>b ? 1 : -1 });

console.log(squared([1, 2, 3, 5, 6, 8, 9]))
console.log(squared([-2, -1]))
console.log(squared([-10, -5, 0, 5, 10]))
