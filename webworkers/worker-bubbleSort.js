// バブルソートアルゴリズム（あえて効率の悪いソートを行うコード）
function bubbleSort(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

self.addEventListener('message', (event) => {
  var array = event.data;
  var sortedArray = bubbleSort(array);
  self.postMessage(sortedArray);
});