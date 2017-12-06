$(document).ready( () => {
  data = [
    {title: "Default Parameters",
    desc: "Remember we had to do these statements to define default parameters? They were okay until the value was 0 and because 0 is falsy in JavaScript it would default to the hard-coded value instead of becoming the value itself. Of course, who needs 0 as a value (#sarcasmfont), so we just ignored this flaw and used the logic OR anyway",
    answer: "No more! In ES6, we can put the default values right in the signature of the functions"},
    {title: "Template Literals",
    desc: "Template literals or interpolation in other languages is a way to output variables in the string. So in ES5 we had to break the string.",
    answer: "Luckily, in ES6 we can use a new syntax ${NAME} inside of the back-ticked string."},
    {title: "Const & let",
    desc: "What is the most important new feature of Let and Const variables?",
    answer: "They are Block Scoped. Var is function scoped."},
    {title: "Benefit of let and const",
    desc: "Name the most important benefit of using let and consts and explain why it is important.",
    answer: "Rather than being scoped to the function, it is scoped to the block. This prevents variables leaking out of blocks into parent functions and even the window in certain cases."},
    {title: "Const & let",
    desc: "Can you redefine a let in the same scope?",
    answer: "No, it will throw an error."},
    {title: "Const & Obj.",
    desc: "Can you reassign a const variable object. Name an example that illustrates this relationship.",
    answer: "You can't reassign them. The same object will always be used and cannot be wiped. Properties updatable. Just like a person you wouldn't change their name or body, but their age be changed."},
    {title: "IIFE",
    desc: "What does an IIFE stand for?",
    answer: "Immediately invoked function expression."}

  ]

  getData(0)

  let count = 1

  $(document).on('click', '#next-info', () => {
    if (count >= data.length) count = 0;
    console.log("click")
    getData(count)
    count++;
  });
});

let getData = (num) => {
  $('.title').hide().text(data[num].title).fadeIn("slow")
  $('#card-content').hide().text(data[num].desc).fadeIn(1000)
  $('#answer').text(data[num].answer)
}
