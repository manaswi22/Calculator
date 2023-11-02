// Accessing the html elements
let inputVal = document.getElementById("inputVal");
let BtnEle = document.querySelectorAll("button");

// Adding the functionality to buttons
let Text = "";
BtnEle.forEach((buttons) => {
  console.log(buttons);
  buttons.addEventListener("click", (e) => {
    // debugger;
    console.log(e);
    console.log(e.target.innerHtml);
    if (e.target.innerText === "=") {
        console.log(eval(Text))
      Text = eval(Text);
      console.log(Text);
      inputVal.value = Text;
    } else if (e.target.innerText === "AC") {
      Text = "";
      inputVal.value = Text;
    } else {
      Text += e.target.innerText;
      inputVal.value = Text;
    }
  });
});