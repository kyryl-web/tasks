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

console.log(deepCount([1, 2, [3, 4, [5]], 9, 10]))
console.log(deepCount([]))
console.log(deepCount([[[[[[[[[]]]]]]]]]))


