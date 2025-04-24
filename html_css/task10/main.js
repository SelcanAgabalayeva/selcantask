function reverseString(str) {
    return str.split('').reverse().join('');
  }
  const original = 'ali';
  const reversed = reverseString(original);
  console.log(reversed);
  