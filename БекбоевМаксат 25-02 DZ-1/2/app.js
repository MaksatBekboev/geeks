function moveBlock() {
    var block = document.querySelector(".moving-block");
    var currentPosition = parseInt(block.style.left) || 0;
    var newPosition = currentPosition + 10;
    block.style.left = newPosition + "px";
    setTimeout(moveBlock, 100);
}
  