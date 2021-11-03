/*
  WRITE YOUR SOLUTION HERE
*/
function urlify(blogTitle) {
  const punctuation = /[@"\|!#$%&/()=?»«@£§€{}.-;'<>_,"]/g;
  const removeChar = blogTitle.replace(punctuation, "");
  return removeChar.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("oare ce mai face Mona?"));
