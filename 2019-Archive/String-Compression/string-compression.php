<?php

function Compression($n)
{
    $len = strlen($n); // length
    $temp = ''; // 現在どの文字か
    $cnt = ''; // 数字の個数
    $answer = ''; // 最後に出力する答え
    for ($i = 0; $i < $len; ++$i) {
        if ($temp != $n[$i]) { // tempに格納している文字と同じじゃなければ以下を実行
            $temp = $n[$i]; // tempに文字を格納
            $answer .= $cnt; // カウントを連結
            $answer .= $temp; // tempに格納されている文字を連結
            if ($i != $len) { // for文最後のループじゃなければ以下を実行
                $cnt = 1; // 次の文字のカウントに初期化
            }
        } elseif ($temp == $n[$i]) { //tempに格納している文字と同じならカウント増加
            ++$cnt;
        }
    }
    $answer .= $cnt;

    return $answer;
}

echo Compression('aaabbcccc'); // 出力結果：a3b2c4
