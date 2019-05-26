Promise.resolve(1)
  .then(2)
  .then(value => console.log(value));

/*

Promise の状態は以下のいずれかとなります。

  > pending: 初期状態。成功も失敗もしていません。
  > fulfilled: 処理が成功して完了したことを意味します。
  > rejected: 処理が失敗したことを意味します。

pending 状態の Promise は、何らかの値を持つ fulfilled 状態、もしくは何らかの理由 (エラー) を持つ rejected 状態のいずれかに変わります。そのどちらとなっても、then メソッドによって関連付けられたハンドラーが呼ばれます。

一度状態が変わったPromiseの値は後から変わらないため、1が返ってくる。

*/
