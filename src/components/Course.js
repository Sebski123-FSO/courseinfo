import React from "react";

const Header = (props) => {
  return (
    <>
      <h2>{props.course}</h2>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      {props.parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </>
  );
};

const Total = (props) => {
  const total = props.parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <>
      <strong>
        <p>Number of exercises {total}</p>
      </strong>
    </>
  );
};

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      ))}
    </>
  );
};

export default Course;
