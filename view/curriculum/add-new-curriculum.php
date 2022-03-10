<?php
require_once(dirname(__FILE__)."/../../functions/curriculum_functions.php");
?>
<!DOCTYPE html><!--  Last Published: Wed Mar 09 2022 23:28:05 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="62291ca3a067fe35695cc561" data-wf-site="6213c852906b2539311153ea">
<head>
  <meta charset="utf-8">
  <title>add-new-curriculum</title>
  <meta content="add-new-curriculum" property="og:title">
  <meta content="add-new-curriculum" property="twitter:title">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <link href="css/normalize.css" rel="stylesheet" type="text/css">
  <link href="css/webflow.css" rel="stylesheet" type="text/css">
  <link href="css/carrriculum-site.webflow.css" rel="stylesheet" type="text/css">
  <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript"></script>
  <script type="text/javascript">WebFont.load({  google: {    families: ["Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"]  }});</script>
  <!-- [if lt IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js" type="text/javascript"></script><![endif] -->
  <script type="text/javascript">!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);</script>
  <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon">
  <link href="images/webclip.png" rel="apple-touch-icon">
</head>
<body class="body-3">
  <div>
    <h1 class="heading-7">Create Curriculum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
  </div>
  <div class="w-form">
    <form id="curriculum-form" name="curriculum-form" data-name="Curriculum Form" method="post">
      <label for="field">Choose a Class</label>
      <select id="field" name="field" data-name="Field" required="" class="w-select">
        <option value="">Select one...</option>
        <?php
          display_year_groups();
        ?>
      </select>
      <label for="email">Choose a Major</label>
      <select id="majors" name="majors" data-name="Field 2" required="" class="w-select">
        <option value="">Select one...</option>
        <?php
          display_majors();
        ?>
      </select>
      <label for="field-2">Courses</label>
      <div class="div-block-7">
        <select id="field-2" name="field-2" data-name="Field 2" required="" class="select-field w-select">
          <option value="">Student Level</option>
          <option value="First">First choice</option>
          <option value="Second">Second choice</option>
          <option value="Third">Third choice</option>
        </select>
        <select id="field-2" name="field-2" data-name="Field 2" required="" class="select-field w-select">
          <option value="">Course</option>
          <option value="First">First choice</option>
          <option value="Second">Second choice</option>
          <option value="Third">Third choice</option>
        </select>
        <a id="w-node-_6c21eb62-7a3e-a4e5-1f27-6874230e6bcc-695cc561" href="#" class="button w-button">Button</a>
        <select id="field-2" name="field-2" data-name="Field 2" required="" class="select-field w-select">
          <option value="">Course Type</option>
          <option value="First">First choice</option>
          <option value="Second">Second choice</option>
          <option value="Third">Third choice</option>
        </select>
      </div>
      <input type="submit" value="Submit" data-wait="Please wait..." class="w-button">
    </form>
    <div class="w-form-done">
      <div>Thank you! Your submission has been received!</div>
    </div>
    <div class="w-form-fail">
      <div>Oops! Something went wrong while submitting the form.</div>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6213c852906b2539311153ea" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</body>
</html>