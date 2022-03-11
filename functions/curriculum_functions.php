<?php
require_once(dirname(__FILE__)."/../controllers/curriculum_controller.php");
require_once(dirname(__FILE__)."/../controllers/course_controller.php");


function display_year_groups() {
    $year_groups = select_year_groups();
    foreach($year_groups as $group){
        echo "<option value=".$group["year_group_id"].">".$group["year_group_name"]."</option>";
    }    
}

function display_majors() {
    $majors = select_majors();
    foreach($majors as $major){
        echo "<option value=".$major["major_id"].">".$major["major_name"]."</option>";

    }
}

function display_student_level() {
  $levels = select_student_level();
  foreach($levels as $level){
    echo "<option value=".$level["student_level_id"].">".$level["student_level_name"]."</option>";
  }
}

function display_courses() {
  $courses = select_all_courses();
  foreach($courses as $course) {
    echo "<option value=".$course["course_id"].">".$course["course_name"]."</option>";
  }
}

function display_course_types() {
  $types = select_course_type();
  foreach($types as $type){
    echo "<option value=".$type["course_type_id"].">".$type["course_type_name"]."</option>";
  }
}

function display_semesters() {
  $semesters = select_semesters();
  foreach($semesters as $semester) {
    echo "<option value=".$semester["semester_id"].">".$semester["semester_name"]."</option>";

  }
}

function display_curriculum(){
    $curricula = select_all_curriculum();
    $counter = 1;
    foreach($curricula as $curriculum){
        echo "<div>
        <h3>".$counter.". 4-year ". $curriculum["major_code"]." Curriculum for ".$curriculum["year_group_name"]." </h3>
        <div>
          <a href='#' class='button-2 w-button' onclick='return duplicate(".$curriculum["curriculum_id"].")'>Duplicate</a>
          <a href='#' class='button-3 w-button'>Edit</a>
          <a href='#' class='w-button'>Delete</a>
        </div>
      </div>";
      $counter++;
    }
}

// function display_courses_in_curriculum($courses) {
//     foreach($courses as $course){
//         echo "<div class='div-block-7'>
//         <select data-name='Field 2' required='' class='select-field w-select'>
//           <option value=".$course["student_level"].">".$course["student_level_name"]."</option>
//           ".display_student_level()."

//         </select>
        
//         <select name='field-2' data-name='Field 2' required='' class='select-field w-select'>
//           <option value=''>Course</option>
//           <option value='First'>First choice</option>
//           <option value='Second'>Second choice</option>
//           <option value='Third'>Third choice</option>
//         </select>
//         <a id='w-node-_6c21eb62-7a3e-a4e5-1f27-6874230e6bcc-695cc561' href='#' class='button w-button'>Button</a>
//         <select name='field-2' data-name='Field 2' required='' class='select-field w-select'>
//           <option value=''>Course Type</option>
//           <option value='First'>First choice</option>
//           <option value='Second'>Second choice</option>
//           <option value='Third'>Third choice</option>
          
//         </select>
        
//       </div>";
//     }
// }
function display_courses_in_curriculum($courses) {
  foreach($courses as $course){
    ?>
      <div class='div-block-7'>
      <input type="hidden" name="curriculum_detail_id[]" value="<?= $course["curriculum_detail_id"] ?>" >
      <select data-name='level' name="level[]" required='' class='select-field w-select'>
        <option value="<?= $course["student_level"] ?>"><?= $course["student_level_name"] ?></option>
        <?= display_student_level() ?>

      </select>
      
      <select name='course[]' data-name='Field 2' required='' id="select" class='select-field w-select'>
      <option value="<?= $course["course_id"] ?>"><?= $course["course_name"] ?></option>
        <?= display_courses() ?>

      </select>
      <!-- <input list='courses' class='select-field w-select'>
      <datalist id='courses'>
        <option value='' selected disabled>Course</option>
        <option value='First'>First choice</option>
        <option value='Second'>Second choice</option>
        <option value='Third'>Third choice</option>
      </datalist> -->
      <select name='semester[]' data-name='Field 2' required='' class='select-field w-select'>
      <option value="<?= $course["semester_id"] ?>"><?= $course["semester_name"] ?></option>
        <?= display_semesters() ?>
        
      </select>
      <select name='course_type[]' data-name='Field 2' required='' class='select-field w-select'>
      <option value="<?= $course["course_type"] ?>"><?= $course["course_type_name"] ?></option>
        <?= display_course_types() ?>
        
      </select>
      
      
    </div>

    <?php
  }
}

?>