function Stack() {
  const collection = [];

  this.pop = function () {
    if (collection.length === 0) return undefined;

    return collection.pop();
  };
  this.top = function () {
    let index = collection.length - 1;
    return collection[index];
  };
  this.push = function (num) {
    if (collection.length >= 1) {
      let index = collection.length - 1;
      let max = Math.max(num, collection[index][2]);
      let min = Math.min(num, collection[index][1]);

      collection.push([num, min, max]);
    } else {
      collection.push([num, num, num]);
    }
  };
  this.getMin = function () {
    let index = collection.length - 1;
    return collection[index][1];
  };
  this.getMax = function () {
    let index = collection.length - 1;
    return collection[index][2];
  };
  this.isEmpty = function () {
    return collection.length === 0;
  };
}

let miniStack = new Stack();
miniStack.push(8);
miniStack.push(1);
miniStack.push(3);
miniStack.push(80);
console.log(miniStack.getMax());
console.log(miniStack.getMin());
