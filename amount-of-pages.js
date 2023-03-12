function amountOfPages(summary){
  let num = '';
  let count = 0;
  while (num.length < summary) {
    count += 1;
    num += count;
  }

  return count;
}