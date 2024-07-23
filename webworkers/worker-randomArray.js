// データセットの作成
function createRandomArray(n) {
  const length = n; // 処理が長すぎる、または短すぎる場合は数字を変更して動作確認してください。
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * length));
  }
  return array;
};

self.addEventListener('message', (event) => {
  var data = event.data;
  var array = createRandomArray(data);
  self.postMessage(array);
});

