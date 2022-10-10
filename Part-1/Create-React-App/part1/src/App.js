const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name} you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const age = 10
  const name = "Mike"
  return (
    <div>
      <p>Greetings</p>
      <Hello name="timmy" age = {age +1}/>
      <Hello name={name} age = {age}/>
    </div>
  )
}

export default App;
