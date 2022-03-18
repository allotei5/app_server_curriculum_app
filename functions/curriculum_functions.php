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

function display_grades() {
  $grades = select_all_grades();
  foreach($grades as $grade){
    echo "<option value=".$grade["grade_id"].">".$grade["grade_letter"]."</option>";
  }
}

function display_grade($id){
  $grade = select_grade_by_id($id);
  echo "<option selected value=".$grade["grade_id"].">".$grade["grade_letter"]."</option>";
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

function display_courses_table() {
  $courses = select_all_courses();
  foreach($courses as $course) {
    echo "<tr>
            <td>".$course["course_name"]."</td>
            <td><a href='add-prerequisites.php?course=".$course["course_id"] ."' id='w-node-_5b3a671f-fac3-e7ce-d746-be867dd2c9ab-c7d176ae' class='w-button'>Prerequisites</a></td>
          </tr>";
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

function display_curriculum_by_major_and_year_group_id($major_id, $year_group_id){
  // select curriculum by major and year group
  $curriculum = select_curriculum_by_year_group_and_major($year_group_id, $major_id);
  $four_year_plan = select_one_curriculum_and_its_details_formatted($curriculum["curriculum_id"]);
  

  if(!empty($four_year_plan)){
    echo "<h3>4-year ".$curriculum["major_code"]." Curriculum for the Class of ".$curriculum["year_group_name"]."</h3>";
    foreach($four_year_plan as $key => $level) {
      echo "<div>
      <h5>". $key ." Year</h5>";
      foreach($level as $j => $semester){
        echo "<div class='columns-4 w-row'>
        <div class='column-3 w-col w-col-3'>
          <div>".$j."</div>
        </div>
        <div class='column-2 w-col w-col-9'>";
          foreach($semester as $course){
            echo "<div>".$course["course_name"]."</div>";
          }
        echo "</div>
      </div>";
      }
        
    }
  }else{
    echo "No Curriculum was found";
  }
  
}

function display_prerequisites($course_id) {
  $course = select_one_course($course_id);
  $prerequisites = $course["prerequisites"];
  echo "<h2>".$course["course_name"]."</h2>";
  echo "<h4>Prerequisites</h4>";

  foreach($prerequisites as $prerequisite) {
    echo "<div class='div-block-14'>
    <div id='w-node-_6d8314c1-dc78-725d-c2d2-27f33593dde3-e91115e8'>".$prerequisite["course_name"]."</div>
    <a id='w-node-f095f4ce-d5cc-aba0-80cd-9b587cb89bba-e91115e8' href='../../actions/prerequisites/delete_prerequisite.php?prereq_id=".$prerequisite["pre_requisite_id"]."' class='button-4 w-button'>Remove</a>
  </div>";
  }
}

function curriculum_tracker_component($some_html) {
  return $some_html;
}

function display_curriculum_tracker($student_id) {
  // this function takes the user id
  // gets the users major and year
  // and displayes the curriculum tracker
  // first fetches the curriculum based on user id
  // if its empty, it'll fetch the curriculum based on year group and major

  // get the users major and year
  $student_details = select_student_major_and_year_group($student_id);


  // display based on user id
  $curriculum_tracker = select_users_courses_in_curriculum($student_id);
  // print_r($curriculum_tracker);

  if($curriculum_tracker) {
    // TODO change student id from hard code
    $four_year_plan = select_student_courses_in_tracker_formatted($student_id);
    echo "<form id='tracker' class='form' method='post' action='../actions/tracker/add_courses_to_tracker.php'>";
      foreach($four_year_plan as $key => $level) {
        echo "
        <div class='' >
        <h1 class='heading-4 list list_of_courses list_tracker' style='border: none; margin-bottom: -15px'><strong>".$key." year</strong></h1>
        
        ";
        foreach($level as $semester_name => $semester) {
          echo "
            <div class='list list_of_courses list_tracker' style='border:none';>
              <div class='data_heading_box'>
                <h3 class='heading-4'>".$semester_name."</h3>
              </div>
              
              ";
              foreach($semester as $course){
                //print_r($course);
                echo "
              
              <div class='list_item tracker__list_item' style='padding-bottom: 15px;'>
              <div class='columns-3 col_list w-row'>
                <div class='col w-col w-col-4 w-col-stack'>
                  <h3 class='tracker_text_h3 couse' style='font-size: small;'>".$course["course_name"]."</h3>
                </div>
                <div class='col w-col w-col-2 w-col-stack'>
                  <h1 class='tracker_text_h3' style='font-size: small;'>Credit: 0.5</h1>
                </div>
                  <div class='col w-col w-col-3 w-col-stack'>
                    <div class='form-block checkbox w-form'>
                        <div class='w-checkbox checkbox-field'>
                          <input type='checkbox' ";
                          if($course["completed"]==1){
                            echo "checked";
                          }
                          
                          echo " id='completed[]' oninput='return inputCheck(event,".$course['curriculum_detail_id'].")' name='completed[]' class='w-checkbox-input checkbox-2 custom-checkbox'>
                          <input type='hidden' name='curriculum_detail_id[]' value=".$course["curriculum_detail_id"]." >
                          <label class='checktext' style='font-size: small;'>Completed</label>
                        </div>                         
                    </div>
                  </div>
                  <div class='col w-col w-col-3 w-col-stack'>";
                          
                  if($course["completed"]==0){
                    echo "<div id=show".$course["curriculum_detail_id"]."></div>";
                  }else{
                    echo "<div id=show".$course["curriculum_detail_id"].">
                    <select required name='grade[]' data-name='Field 4' class='grade_track_input w-select'>";
                    ?>
                      <?= display_grade($course["grade_id"]) ?>
                      <?= display_grades() ?>
                    <?php
                    echo "</select>
                    </div>";
                  }
                  
                  echo "</div>
              </div>
          </div>";
              }
              echo "
              </div>";
          
        }
        echo "</div>";
      }
     echo "
     
     <div style='margin: 0 125px'><button type='submit' href='#' name='submit' class='primary_btn w-button'>Submit form</button></div>

     </form>";
    
  }else{
    // display based on major and year group
    $curriculum = select_curriculum_by_year_group_and_major($student_details["student_year_group"], $student_details["student_major"]);
    $four_year_plan = select_one_curriculum_and_its_details_formatted($curriculum["curriculum_id"]);

    if(!empty($four_year_plan)) {
      echo "<form id='tracker' class='form' method='post' action='../actions/tracker/add_courses_to_tracker.php'>";
      foreach($four_year_plan as $key => $level) {
        echo "
        <div class='' >
        <h1 class='heading-4 list list_of_courses list_tracker' style='border: none; margin-bottom: -15px'><strong>".$key." year</strong></h1>
        
        ";
        foreach($level as $semester_name => $semester) {
          echo "
            <div class='list list_of_courses list_tracker' style='border:none';>
              <div class='data_heading_box'>
                <h3 class='heading-4'>".$semester_name."</h3>
              </div>
              
              ";
              foreach($semester as $course){
                //print_r($course);
                echo "
              
              <div class='list_item tracker__list_item' style='padding-bottom: 15px;'>
              <div class='columns-3 col_list w-row'>
                <div class='col w-col w-col-4 w-col-stack'>
                  <h3 class='tracker_text_h3 couse' style='font-size: small;'>".$course["course_name"]."</h3>
                </div>
                <div class='col w-col w-col-2 w-col-stack'>
                  <h1 class='tracker_text_h3' style='font-size: small;'>Credit: 0.5</h1>
                </div>
                  <div class='col w-col w-col-3 w-col-stack'>
                    <div class='form-block checkbox w-form'>
                        <div class='w-checkbox checkbox-field'>
                          <input type='checkbox' id='completed[]' oninput='return inputCheck(event,".$course['curriculum_detail_id'].")' name='completed[]' class='w-checkbox-input checkbox-2'>
                          <input type='hidden' name='curriculum_detail_id[]' value=".$course["curriculum_detail_id"]." >
                          <label class='checktext' style='font-size: small;'>Completed</label>
                        </div>                         
                    </div>
                  </div>
                  <div class='col w-col w-col-3 w-col-stack'>";
                  ?>
                  
                  <div id="show<?= $course["curriculum_detail_id"]?>"></div>
                  <?php
                  echo "</div>
              </div>
          </div>";
              }
              echo "
              </div>";
          
        }
        echo "</div>";
      }
     echo "
     
     <div style='margin: 0 125px'><button type='submit' href='#' name='submit' class='primary_btn w-button'>Submit form</button></div>

     </form>";
    }
  }
}

function display_curriculum_tracker_completed_courses($student_id){
  $curriculum_tracker = select_users_courses_in_curriculum($student_id);
  $four_year_plan = select_student_courses_in_tracker_formatted($student_id);

  if($curriculum_tracker) {
    // TODO change student id from hard code
    $four_year_plan = select_student_courses_in_tracker_formatted_completed($student_id);
      foreach($four_year_plan as $key => $level) {
        echo "
        <div class='' >
        <h1 class='heading-4 list list_of_courses list_tracker' style='border: none; margin-bottom: -15px'><strong>".$key." year</strong></h1>
        
        ";
        foreach($level as $semester_name => $semester) {
          echo "
            <div class='list list_of_courses list_tracker' style='border:none';>
              <div class='data_heading_box'>
                <h3 class='heading-4'>".$semester_name."</h3>
              </div>
              
              ";
              foreach($semester as $course){
                echo "
              
              <div class='list_item tracker__list_item' style='padding-bottom: 15px;'>
              <div class='columns-3 col_list w-row'>
                <div class='col w-col w-col-4 w-col-stack'>
                  <h3 class='tracker_text_h3 couse' style='font-size: small;'>".$course["course_name"]."</h3>
                </div>
                <div class='col w-col w-col-2 w-col-stack'>
                  <h1 class='tracker_text_h3' style='font-size: small;'>Credit: 0.5</h1>
                </div>
                  <div class='col w-col w-col-3 w-col-stack'>
                    <div class='form-block checkbox w-form'>
                        <div class='w-checkbox checkbox-field'>
                          <input disabled type='checkbox' ";
                          if($course["completed"]==1){
                            echo "checked";
                          }
                          
                          echo " id='completed[]' oninput='return inputCheck(event,".$course['curriculum_detail_id'].")' name='completed[]' class='w-checkbox-input checkbox-2 custom-checkbox'>
                          <input type='hidden' name='curriculum_detail_id[]' value=".$course["curriculum_detail_id"]." >
                          <label class='checktext' style='font-size: small;'>Completed</label>
                        </div>                         
                    </div>
                  </div>
                  <div class='col w-col w-col-3 w-col-stack'>";
                          
                  if($course["completed"]==0){
                    echo "<div id=show".$course["curriculum_detail_id"]."></div>";
                  }else{
                    echo "<div id=show".$course["curriculum_detail_id"].">
                    <select required name='grade[]' data-name='Field 4' class='grade_track_input w-select'>";
                    ?>
                      <?= display_grade($course["grade_id"]) ?>
                    <?php
                    echo "</select>
                    </div>";
                  }
                  
                  echo "</div>
              </div>
          </div>";
              }
              echo "
              </div>";
          
        }
        echo "</div>";
      }
    
  }else{
    echo "<div class='div-block-6'><img src='images/completed.png' loading='lazy' width='413' sizes='(max-width: 479px) 31vw, (max-width: 767px) 35vw, 41vw' srcset='images/completed-p-500.png 500w, images/completed-p-800.png 800w, images/completed-p-1080.png 1080w, images/completed.png 1604w' alt='' class='image-3'>
              <h4 class='empthy'>Completed courses would appear here.</h4>
            </div>";
  }

}
function display_curriculum_tracker_uncompleted_courses($student_id){
  $curriculum_tracker = select_users_courses_in_curriculum($student_id);
  //$four_year_plan = select_student_courses_in_tracker_formatted($student_id);

  if($curriculum_tracker) {
    // TODO change student id from hard code
    $four_year_plan = select_student_courses_in_tracker_formatted_uncompleted($student_id);
    echo "<form id='tracker' class='form' method='post' action='../actions/tracker/add_courses_to_tracker.php'>";
      foreach($four_year_plan as $key => $level) {
        echo "
        <div class='' >
        <h1 class='heading-4 list list_of_courses list_tracker' style='border: none; margin-bottom: -15px'><strong>".$key." year</strong></h1>
        
        ";
        foreach($level as $semester_name => $semester) {
          echo "
            <div class='list list_of_courses list_tracker' style='border:none';>
              <div class='data_heading_box'>
                <h3 class='heading-4'>".$semester_name."</h3>
              </div>
              
              ";
              foreach($semester as $course){
                //print_r($course);
                echo "
              
              <div class='list_item tracker__list_item' style='padding-bottom: 15px;'>
              <div class='columns-3 col_list w-row'>
                <div class='col w-col w-col-4 w-col-stack'>
                  <h3 class='tracker_text_h3 couse' style='font-size: small;'>".$course["course_name"]."</h3>
                </div>
                <div class='col w-col w-col-2 w-col-stack'>
                  <h1 class='tracker_text_h3' style='font-size: small;'>Credit: 0.5</h1>
                </div>
                  <div class='col w-col w-col-3 w-col-stack'>
                    <div class='form-block checkbox w-form'>
                        <div class='w-checkbox checkbox-field'>
                          <input type='checkbox' id='completed[]' oninput='return inputCheckUncomplete(event,".$course['curriculum_detail_id'].")' name='completed[]' class='w-checkbox-input checkbox-2 custom-checkbox'>
                          <input type='hidden' name='curriculum_detail_id[]' value=".$course["curriculum_detail_id"]." >
                          <label class='checktext' style='font-size: small;'>Completed</label>
                        </div>                         
                    </div>
                  </div>
                  <div class='col w-col w-col-3 w-col-stack'>";
                          
                  if($course["completed"]==0){
                    echo "<div id=uncompleteshow".$course["curriculum_detail_id"]."></div>";
                  }
                  
                  echo "</div>
              </div>
          </div>";
              }
              echo "
              </div>";
          
        }
        echo "</div>";
      }
     echo "
     
     <div style='margin: 0 125px'><button type='submit' href='#' name='submit' class='primary_btn w-button'>Submit form</button></div>

     </form>";
    
  }else{
    echo "<div class='div-block-6'><img src='images/completed.png' loading='lazy' width='413' sizes='(max-width: 479px) 31vw, (max-width: 767px) 35vw, 41vw' srcset='images/completed-p-500.png 500w, images/completed-p-800.png 800w, images/completed-p-1080.png 1080w, images/completed.png 1604w' alt='' class='image-3'>
              <h4 class='empthy'>Completed courses would appear here.</h4>
            </div>";
  }

}

?>

