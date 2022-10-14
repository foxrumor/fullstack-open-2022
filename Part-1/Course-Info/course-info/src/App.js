const Header = (props) => {
  return(
  <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return(
    <>
    <p>Part: {props.course.parts[0].name} , Exercises: {props.course.parts[0].exercises}</p>
    <p>Part: {props.course.parts[1].name} , Exercises: {props.course.parts[1].exercises}</p>
    <p>Part: {props.course.parts[2].name} , Exercises: {props.course.parts[2].exercises}</p>
    </>
  )
  }

  const Total = props => {
    return(
      <>
      <p>
        Number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
      </p>
      </>
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
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}

// pseudo code:
//const App = () => {
//   // const-definitions

//   return (
//     <div>
//       <Header course={course} />
//       <Content ... />
//       <Total ... />
//     </div>
//   )
// }

export default App