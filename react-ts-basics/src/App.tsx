import { useState } from 'react'
import './App.css'
import headerImg from './assets/react.svg'
import Header from './components/Header.tsx'
import CourseGoalList from './components/CourseGoalList.tsx'
import NewGoal from './components/NewGoal.tsx'

export type CourseGoal = {
  title: string;
  desc: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        title: goal,
        desc: summary,
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
      <NewGoal onAddGoal={handleAddGoal}/>
      <CourseGoalList goalList={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  )
}

export default App
