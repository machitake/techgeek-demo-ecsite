// フィボナッチ数列のn項を求める
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// メインスレッドからのメッセージを受け取る
self.addEventListener('message', function (e) {
  var data = e.data;
  var result = fib(data);
  // メインスレッドにメッセージを送信する
  self.postMessage(result);
});