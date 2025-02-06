import { useState } from 'react'
const StatisticsLine = (props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics = (props) => {
  if (props.all === 0){
    return <p>No feedback given</p>
  }
  else{
    return(
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            <StatisticsLine text="good" value={props.good} />
            <StatisticsLine text="neutral" value={props.neutral} />
            <StatisticsLine text="bad" value={props.bad} />
            <StatisticsLine text="all" value={props.all} />
            <StatisticsLine text="average:" value={props.all > 0 ? (props.average/props.all).toFixed(2): 0} />
            <StatisticsLine text="positive:" value={props.all > 0 ? ((props.good/props.all)*100).toFixed(2): 0} />
          </tbody>
        </table>
      </div>
    )
  }
}
const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGoodClick = () => {
    const updateGood = good + 1;
    setGood(updateGood)
    setAll(updateGood + neutral + bad)
    setAverage(average + 1)
  }
  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setAll(updateNeutral + good + bad)
    setAverage(average + 0)

  }
  const handleBadClick = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setAll(updateBad + good + neutral)
    setAverage(average -1 )

  }
  return (
    <div>
      <div>
        <h2>give feedback</h2>
      </div>
      <div>
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
       
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average}/>
    </div>
  )
}

export default App