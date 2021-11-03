/*
  WRITE YOUR SOLUTION HERE
*/

classList = ["Galina", "Vasea", "Ion", "Ioana", "Cosmin", "Gabi Torje"];

function getStudents(classroom) {
  let {
    hasAssistant,
    classList
  } = classroom;
  let teacher, assistant, students;
  if (hasAssistant) {
    [teacher, assistant, ...students] = classList;
    return students;
  } else {
    [teacher, ...students] = classList;
    return students;
  }
}

console.log(getStudents({
  hasAssistant: false,
  classList: classList
}))