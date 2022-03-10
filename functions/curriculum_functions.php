<?php
require_once(dirname(__FILE__)."/../controllers/curriculum_controller.php");

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

function display_courses_in_curriculum($curriculum_id) {
    
}