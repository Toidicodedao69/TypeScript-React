import { useState } from 'react'
import './App.css'
import headerImg from './assets/react.svg'
import Header from './components/Header.tsx'
import CourseGoalList from './components/CourseGoalList.tsx'

export type CourseGoal = {
  title: string;
  desc: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: 'React + TS',
        desc: 'Example',
        id: Math.random()
      }
      return [...prevGoals, newGoal];
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: headerImg, alt: 'Goals Image' }}>
        <h1>Your Course Goals</h1>
      </Header>

      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goalList={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}

export default App
