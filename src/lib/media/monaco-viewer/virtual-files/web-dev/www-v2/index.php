<!DOCTYPE html>
<html lang="en">
<head>
  <?php readfile($_SERVER['GLOBAL_HEAD']); ?>
  <link rel='stylesheet' href='style.css'>
  <link rel="canonical" href="<?=$_SERVER['WEB_ROOT'].'home/'?>">
  <title><?=$_SERVER['BRAND_NAME']?> website</title>
  <meta name="description" content="Hobbyist website made for all things <?=$_SERVER['BRAND_NAME']?>">
</head>

<body>
<?php include $_SERVER['GLOBAL_BODY']; ?>
<main>
  <p>As I'm writing this, www-v2 is still my active website, although I've stopped making changes to it.</p>
  <p>I'm still pretty proud of it, but it revolved around PHP which I no longer think is the right language for me.</p>
  <p>It also desperately needed a re-design!</p>
</main>
</body>
</html>
