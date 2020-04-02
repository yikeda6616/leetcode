export function compression(str) {
  let temp = ''; // 現在どの文字か
  let cnt = ''; // 数字の個数
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    if (temp !== str[i]) {
      // tempに格納している文字と同じじゃなければ以下を実行
      temp = str[i]; // tempに文字を格納
      result += cnt; // カウントを連結
      result += temp; // tempに格納されている文字を連結
      if (i != str.length) {
        // for文最後のループじゃなければ以下を実行
        cnt = 1; // 次の文字のカウントに初期化
      }
    } else if (temp == str[i]) {
      //tempに格納している文字と同じならカウント増加
      cnt++;
    }
  }
  result += cnt;

  return result;
}
