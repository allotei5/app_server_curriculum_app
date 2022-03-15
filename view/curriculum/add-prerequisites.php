
<?php 
require_once("../../functions/curriculum_functions.php");
?>
<!DOCTYPE html><!--  Last Published: Tue Mar 15 2022 12:42:42 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="62307f748799dba5e91115e8" data-wf-site="6213c852906b2539311153ea">
<head>
  <meta charset="utf-8">
  <title>add-prerequisites</title>
  <meta content="add-prerequisites" property="og:title">
  <meta content="add-prerequisites" property="twitter:title">
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
<body>
  <div class="w-container">
    <h1>Heading</h1>
    <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
    <?= display_prerequisites($_GET["course"]) ?>
    <div class="w-form">
      <form id="email-form" method="post" action="../../actions/prerequisites/add_new_prerequisite.php">
        <input type="hidden" name="course_id" value="<?= $_GET["course"] ?>">
      <div id="testing">  
        <div class="div-block-13" id="grid-div">
            <div>
              <label for="">Choose a Course</label>
              <select name="prerequisite_course_id[]" data-name="Field 2" class="w-node-c00e8ecf-31a0-2a60-3ebf-2b908046af83-e91115e8 w-select">
                <option value="" disabled selected>Select one...</option>
                <?= display_courses() ?>
              </select>          
            </div>
            <div>
              <label for="">Choose the Minimum Grade</label>
              <select  name="min_grade_id[]" class="w-node-c00e8ecf-31a0-2a60-3ebf-2b908046af83-e91115e8 w-select">
                <option value="" disabled selected>Select one...</option>
                <?= display_grades() ?>
              </select>
            </div>
          </div>
      </div>
        <div>
          <input type="button" value="Add New Prerequisite" style="margin-top:25px" id="add-prereq" class="submit-button w-button"></>
        </div>
        <div>
          <input type="submit" name="submit" value="submit" style="margin-top:25px" data-wait="Please wait..." id="w-node-ec6bfedb-a443-b166-2fef-2089e7178f08-e91115e8" class="submit-button w-button"></>

        </div>
          
          
      </form>
      <div class="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div class="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
    
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6213c852906b2539311153ea" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
  <script>
    $("#add-prereq").click(()=>{
      $("#grid-div").clone().appendTo("#testing");
    })
  </script>
</body>
</html>