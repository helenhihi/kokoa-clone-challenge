const topIcon = document.querySelector("#top-icon");
const topNum = document.querySelector("#top-number");
const downIcon = document.querySelector("#down-icon");
const downNum = document.querySelector("#down-number");

const iconIdArray = ["top-icon", "down-icon"];
const iconTagArray = [topIcon, downIcon];
const numTagArray = [topNum, downNum];
const clickableArray = [true, true];

function onClickIcon(event) {
  console.log(event.target);
  for (let i = 0; i < iconIdArray.length; i++) {
    if (event.target.id === iconIdArray[i]) {
      const ICON = iconTagArray[i];
      const NUMBER = numTagArray[i];

      if (ICON.classList.contains("white-heart")) {
        ICON.classList.remove("white-heart");
        ICON.classList.add("red-heart");
      } else if (ICON.classList.contains("red-heart")) {
        ICON.classList.add("white-heart");
        ICON.classList.remove("red-heart");
      }

      let countNum = Number(NUMBER.innerText);
      if (clickableArray[i] === true) {
        countNum++;
      } else if (clickableArray[i] === false) {
        countNum--;
      }
      clickableArray[i] = !clickableArray[i];
      NUMBER.innerText = countNum;
      break;
    }
  }
}
topIcon.addEventListener("click", onClickIcon);
downIcon.addEventListener("click", onClickIcon);