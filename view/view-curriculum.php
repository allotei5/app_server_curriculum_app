<?php
require_once(dirname(__FILE__)."/../functions/curriculum_functions.php");
?>

<!DOCTYPE html><!--  Last Published: Mon Mar 14 2022 08:25:33 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="622b439af8a8f0196d0f25c9" data-wf-site="6213c852906b2539311153ea">
<head>
  <meta charset="utf-8">
  <title>view-curriculum</title>
  <meta content="view-curriculum" property="og:title">
  <meta content="view-curriculum" property="twitter:title">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/webflow.css" rel="stylesheet" type="text/css">
  <link href="css/carrriculum-site.webflow.css" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]  }});</script>
  <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
  <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="images/webclip.png" rel="apple-touch-icon">
</head>
<body>
<?php require_once("navbar.php"); ?>

  <div class="container-2 w-container" style="margin-top: 90px ;">
    <h1>View Curriculum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
    <div class="w-form">
      <form method="get" action="./view-curriculum.php">
        <div class="div-block-8">
          <div>
            <label for="">Choose a major</label>
            <select name="major" class="w-node-_6252aa01-e90a-bb1c-4ceb-7e38900b4a88-6d0f25c9 w-select">
              
              <option value=''>Select one...</option>
              <?= display_majors() ?>
            </select>
          </div>
          <div>
            <label for="">Choose a year group</label>
            <select name="year_group" class="w-node-f63c3155-1a9e-0e6e-3d65-08a2403d5dc1-6d0f25c9 w-select">
              <option value="">Select one...</option>
              <?= display_year_groups() ?>
            </select>
          </div>
          <input name="submit" type="submit" value="Submit" style="margin-top: 25px;" id="w-node-d63b1fa4-19c0-4d93-2b8c-c835fa952711-6d0f25c9" class="w-button"></div>
      </form>
      
      <?php
        if(isset($_GET["major"]) && isset($_GET["year_group"])){
          display_curriculum_by_major_and_year_group_id($_GET["major"], $_GET["year_group"]);
        }
      ?>
    </div>
    
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6213c852906b2539311153ea" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</body>
</html>