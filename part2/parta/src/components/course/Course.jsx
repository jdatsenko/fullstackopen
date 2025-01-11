import Part from "./Part";
import Total from "./Total";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
            <h1>{course.name}</h1>
            {course.parts.map((part) => <Part part={part} key={part.id} />)}
            <Total parts={course.parts} />
        </div>
      ))}
    </>
  )
};

export default Course;
