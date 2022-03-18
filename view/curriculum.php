<?php
require_once(dirname(__FILE__)."/../functions/curriculum_functions.php");
?>
<!DOCTYPE html><!--  Last Published: Thu Mar 10 2022 08:34:59 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="62295b000c135e3b9a567354" data-wf-site="6213c852906b2539311153ea">
<head>
  <meta charset="utf-8">
  <title>Curriculum</title>
  <meta content="Curriculum" property="og:title">
  <meta content="Curriculum" property="twitter:title">
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
<body class="body-4">
  <div>
    <h1 class="heading-8">Curriculum</h1>
    <h3>View Curriculum</h3>
    <p>Choose the year group and major you wish to view their curriculum</p>
    <div class="w-form">
      <form id="wf-form-Curriculum-Form" name="wf-form-Curriculum-Form" data-name="Curriculum-Form" method="get"><label for="field">Year Group</label><select id="field" name="field" data-name="Field" class="w-select">
          <option value="">Select one...</option>
          <option value="First">First choice</option>
          <option value="Second">Second choice</option>
          <option value="Third">Third choice</option>
        </select><label for="field-2">Major</label><select id="field-2" name="field-2" data-name="Field 2" class="w-select">
          <option value="">Select one...</option>
          <option value="First">First choice</option>
          <option value="Second">Second choice</option>
          <option value="Third">Third choice</option>
        </select><input type="submit" value="Submit" data-wait="Please wait..." class="w-button"></form>
      <div class="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div class="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  </div>
  <div>
    <h3>Create New Curriculum</h3>
    <p>To create a new curriculum, duplicate one curriculum and you will be taken to another screen to edit the curriculum details for eg: the year group, major, and courses</p>
    <div>
      <?php display_curriculum() ?>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6213c852906b2539311153ea" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
  <script>
      const duplicate = curriculum_id => {
        $.ajax({
          type:    "POST",
          url:     "../actions/curriculum/duplicate_curriculum.php",
          data:    {
                      "submit": true,
                      "old_curriculum_id": curriculum_id
                    },
          success: function(data) {
            window.location.href = "add-new-curriculum.php?curriculum_id="+data;
          },
          // vvv---- This is the new bit
          error:   function(jqXHR, textStatus, errorThrown) {
                alert("Error, status = " + textStatus + ", " +
                      "error thrown: " + errorThrown
                );
          }
        });
      }
  </script>
</body>
</html>

