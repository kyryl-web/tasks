function deepCount(a){
  if (a.length === 0) return 0;
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      count += 1;
      if (i + 1 === a.length) return count + deepCount(a[i]);
      else {
        count = count + deepCount(a[i])
      }
    }
    else {
      count += 1;
      if (i + 1 === a.length) return count;
    }
  }
}

// function deepCount(a){
//   let count = 0;
//   const stack = a;
//   while (stack.length > 0) {
//     const current = stack.pop();
//     count += 1;
//     for (let i = 0; i < current.length; i++) {
//       if (Array.isArray(current[i])) {
//         stack.push(current[i]);
//         continue;
//       } else {
//         count += 1
//       }
//     }
//   }
//   return count;
// }

let arr = [[[[[[[[[]]]]]]]],7, [9]]
console.log(deepCount([1, 2, [3, 4, [5]], 9, 10, [3, 4, [5]]]))
console.log(deepCount([]))
console.log(deepCount([[[[[[[[[[]]]]]]]]], 5, ['a']]))


// console.log(...arr)