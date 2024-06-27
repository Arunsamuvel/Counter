const demo = document.getElementById("demo");
var count = 0;
function increment() {
  count++;
  demo.innerHTML = count;
  console.log(count);
}
function reset() {
  count = 0;
  demo.innerHTML = count;
}
function decrement() {
  count--;
  demo.innerHTML = count;
  console.log(count);
}
