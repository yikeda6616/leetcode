function getRandomInt(max = 1) {
  return Math.random() * Math.floor(max);
}

export function montecarlo(diameter) {
  let i = 0;
  let hit = 0;
  const attempts = 20000;

  while (i < attempts) {
    let x = getRandomInt();
    let y = getRandomInt();
    x *= x;
    y *= y;
    const sqrt = Math.sqrt(x + y);
    if (sqrt < diameter) {
      ++hit;
    }
    ++i;
  }

  console.log('Number of Attempts: ' + attempts);
  console.log('Number of Hit: ' + hit);
  console.log('Area: ' + (hit / attempts) * 4);

  const area = (hit / attempts) * 4;

  return area;
}

/*

モンテカルロ法を使って円の面積を求める

x, yランダムに座標を10000個ほど打つ

円の中に座標が入る確率を求めることで、円の面積の近似値が計算できる

例）5000/10000が円の中に入ったら、1 * 1の半分

打った点の数が少ないと正確性が少ない

打った数のうち何個入ったかっていうのを近似的に計算する


原点からの距離が 1 以下になった距離

√(X2 + y2) < 1

入った数 (1以下)
———
打った数　をまず出力する

*/
