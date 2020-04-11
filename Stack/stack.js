function Stack() {
  const collection = [];
  let max_min = [];
  this.pop = function () {
    if (collection.length === 0) return undefined;

    return collection.pop();
  };
  this.top = function () {
    return collection[collection.length - 1];
  };
  this.push = function (num) {
    if (collection.length >= 1) {
      let max = Math.max(num, max_min[0]);
      let min = Math.min(num, max_min[1]);
      max_min = [max, min];
      collection.push(num);
    } else {
      max_min = [num, num];
      collection.push(num);
    }
  };
  this.getMin = function () {
    return max_min[1];
  };
  this.getMax = function () {
    return max_min[0];
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let miniStack = new Stack();

miniStack.push(20);

console.log(miniStack.top());
console.log(miniStack.getMax());
console.log(miniStack.getMin());

miniStack.push(19);

console.log(miniStack.top());
console.log(miniStack.getMax());
console.log(miniStack.getMin());
