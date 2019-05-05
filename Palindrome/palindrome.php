<?php

function isPalindrome($str)
{
    $len = strlen($str);
    $palindrome = true;

    for ($i = 0; $i < $len / 2; ++$i) {
        if ($str[$i] != $str[$len - $i - 1]) {
            $palindrome = false;
        }
    }

    return $palindrome;
}
