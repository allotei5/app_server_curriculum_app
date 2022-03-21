<?php 
require_once("../functions/curriculum_functions.php");
?>
<!DOCTYPE html><!--  Last Published: Tue Mar 15 2022 12:42:42 GMT+0000 (Coordinated Universal Time)  -->
<html data-wf-page="62154646299761cf544af6ed" data-wf-site="6213c852906b2539311153ea">
<head>
  <meta charset="utf-8">
  <title>CarriculumChecker</title>
  <meta content="CarriculumChecker" property="og:title">
  <meta content="CarriculumChecker" property="twitter:title">
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
<body class="body-2">
<?php require_once("navbar.php"); ?>
  <a data-w-id="9a146a39-bcc2-86ed-9b24-87ff5f050073" href="#" class="settings fab w-inline-block"><img src="images/filter-6535.png" loading="lazy" width="37" sizes="37px" srcset="images/filter-6535-p-500.png 500w, images/filter-6535-p-800.png 800w, images/filter-6535.png 1024w" alt="">
    <h5 class="settings_text">Profile</h5>
  </a>
  <div class="hero-section section second_hero tracker wf-section">
    <div class="search_div search">
      <h1 class="search_h1">Hello Abena,</h1>
      <h3 class="search_h">Use this tool to keep track of your curriculum and meet your<br>four year requirements.</h3>
      <div class="div-block-5">
        <h3 class="search_h cgpa">CGPA<br> <span id='cgpa'></span> </h3>
      </div>
    </div>
    
    <div class="div_hero"></div>
  </div>
  <div class="section_top wf-section">
    <div class="div_for_prereq tracker_c">
      <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" class="w-tabs">
        <div class="tabs-menu-2 w-tab-menu" style="margin-bottom: 15px;">
          <a data-w-tab="Tab 1" id="tab-1" class="tab w-inline-block w-tab-link w--current">
            <div>All Courses</div>
          </a>
          <a data-w-tab="Tab 2" class="tab w-inline-block w-tab-link" id="tab-2">
            <div class="text-block-3">Completed Courses</div>
          </a>
          <a data-w-tab="Tab 3" class="tab w-inline-block w-tab-link" id="tab-3">
            <div class="text-block-4">Uncompleted Courses</div>
          </a>
        </div>
        <div class=" w-tab-content">
          <div data-w-tab="Tab 1" class="pane w-tab-pane w--tab-active">
            <div id="all-courses"></div>
          </div>
          <div data-w-tab="Tab 2" class="pane w-tab-pane">
           <div id="completed-courses"></div>
          </div>
          <div data-w-tab="Tab 3" class="pane w-tab-pane">
            <div id="uncompleted-courses"></div>
          </div>
        </div>
        
      </div>
      
    </div>
    
  </div>
  
  <div class="modal_outer_wrapper">
    <div class="modal_inner_wrapper">
      <a href="#" class="w-inline-block"><img src="images/icons8-close-512.png" loading="lazy" width="36" data-w-id="359506d1-5868-b5d7-77b2-20239954de07" srcset="images/icons8-close-512-p-500.png 500w, images/icons8-close-512.png 512w" sizes="100vw" alt="" class="image"></a>
      <h2>Basic Information</h2>
      <p>This limits the amount of information you see. It only gives you course information that is relevant to your courses. You can  save the data for later use.</p>
      <div class="w-form">
        <form id="email-form" name="email-form" data-name="Email Form" method="get"><label for="field-2">Chose your academic year</label><select id="field-2" name="field-2" data-name="Field 2" class="w-select">
            <option value="">Select one...</option>
            <option value="2021/2022">2021/2022</option>
            <option value="2020/2021">2020/2021</option>
            <option value="2022/2023">2022/2023</option>
          </select><label for="field-3">Choose your major</label><select id="field-3" name="field-3" data-name="Field 3" class="form_last w-select">
            <option value="">Select one...</option>
            <option value="CE">Computer Engineering</option>
            <option value="EE">Electrical Engineering</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="CS">Computer Science</option>
            <option value="MIS">Management Information Systems</option>
            <option value="BA">Business Administration</option>
          </select><input type="submit" value="Save my details" data-wait="Please wait..." class="primary_btn w-button"><input type="submit" value="CHANGE BUT DONT SAVE" data-wait="Please wait..." class="secon_btn w-button"></form>
        <div class="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
        <div class="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </div>
    <div data-w-id="359506d1-5868-b5d7-77b2-20239954de1c" class="modal_click_outside_wrapper"></div>
  </div>
  <div class="footer-thin-wrapper footer-thin copyright wf-section">
    <div class="footer-thin-container">
      <div class="copyright-text">Copyright 2021. All Rights Reserved. </div>
    </div>
  </div>
  <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6213c852906b2539311153ea" type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
  <script src="js/webflow.js" type="text/javascript"></script>
  <script src="./js/curriculumTracker.js"></script>
  <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
</body>
</html>