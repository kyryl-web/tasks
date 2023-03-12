function isPangram(string) {
  let str = string.toLowerCase().split('');
  for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    if (str.includes(String.fromCharCode(i))) {
      continue
    } 
    else {
      return false;
    }
  }

  return true;
}