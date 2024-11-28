var Like_count, comments, comment, item;

// Describe this function...
function display() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_count = document.getElementById('count');
  element_count.innerText = Like_count;
  let element_comments = document.getElementById('comments');
  comments.forEach((comment) => {
    let new_li = document.createElement('li');
    new_li.innerText = comment;

    element_comments.appendChild(new_li);
  });
}

function convertToNumber(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return 0
  } else {
    return number_value
  }
}


Like_count = 0;
comments = [];
display();


document.getElementById('like_btn').addEventListener('click', (event) => {
  Like_count = (typeof Like_count === 'number' ? Like_count : 0) + 1;
  let element_count2 = document.getElementById('count');
  element_count2.innerText = Like_count;

});

document.getElementById('comment_btn').addEventListener('click', (event) => {
  let element_input_comment = document.getElementById('input_comment');
  comments.push(document.getElementById('input_comment').value);
  let element_comments2 = document.getElementById('comments');
  element_comments2.replaceChildren();
  comments.forEach((item) => {
    let new_li2 = document.createElement('li');
    new_li2.innerText = item;

    element_comments2.appendChild(new_li2);
  });
  let element_input_comment2 = document.getElementById('input_comment');
  element_input_comment2.replaceChildren();

});