<?php

function randomFloat($min = 0, $max = 1)
{
    return $min + mt_rand() / mt_getrandmax() * ($max - $min);
}

$i = 0;
$ltone = 0;
$try = 5;
while ($i < $try) {
    $x = randomFloat();
    $y = randomFloat();

    $x *= $x;
    $y *= $y;
    $sqrt = sqrt($x + $y);
    if ($sqrt < 1) {
        ++$ltone;
    }
    ++$i;
}

echo 'Number of Attempts:'.$try;
echo 'Number of Hit:'.$ltone;
echo 'Area:'.($ltone / $try) * 4;
