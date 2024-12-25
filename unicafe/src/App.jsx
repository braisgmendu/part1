const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.ex}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} ex={props.exercises1} />
      <Part name={props.part2} ex={props.exercises2} />
      <Part name={props.part3} ex={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  const totalExercises = props.ex1 + props.ex2 + props.ex3;
  return (
    <p>Number of exercises {totalExercises}</p>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
     <Header course={course.name} />
     <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises} 
     part2={course.parts[1].name} exercises2={course.parts[1].exercises} part3={course.parts[2].name} 
     exercises3={course.parts[2].exercises} />
     <Total ex1={course.parts[0].exercises} ex2={course.parts[1].exercises} ex3={course.parts[2].exercises}  />
    </div>
  )
}
export default App
