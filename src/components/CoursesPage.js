import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CourseList from "./CourseList";

import { getCourses } from "../api/courseApi";

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        AddCourse
      </Link>
      <CourseList {...{ courses }} />
    </>
  );
}

export default CoursesPage;
