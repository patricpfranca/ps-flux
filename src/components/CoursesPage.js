import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CourseList from "./CourseList";

import courseStore from "../stores/courseStore";
import { loadCourses, deleteCourses } from "../actions/courseActions";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        AddCourse
      </Link>
      <CourseList {...{ courses }} {...{ deleteCourses }} />
    </>
  );
}

export default CoursesPage;
