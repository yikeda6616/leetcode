<?php

function randomFloat($min = 0, $max = 1)
{
    return $min + mt_rand() / mt_getrandmax() * ($max - $min);
}

$i = 0;
$hit = 0;
$attempts = 10000;

while ($i < $attempts) {
    $x = randomFloat();
    $y = randomFloat();

    $x *= $x;
    $y *= $y;
    $sqrt = sqrt($x + $y);
    if ($sqrt < 1) {
        ++$hit;
    }
    ++$i;
}

echo 'Number of Attempts:'.$attempts;
echo 'Number of Hit:'.$hit;
echo 'Area:'.($hit / $attempts) * 4;
