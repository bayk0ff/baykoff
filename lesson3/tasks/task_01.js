function reverseString(str) {
  const result = []
  
  for (const s of str)
      result.unshift(s)
  
  return result.join('')
}

module.exports = reverseString;
