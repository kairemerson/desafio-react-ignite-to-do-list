import { Header } from "./components/Header"
import { Input } from "./components/Input"
import "./global.css"
import styles from "./App.module.css"
import { Button } from "./components/Button"
import { NoList } from "./components/List/NoList"
import { HeaderList } from "./components/List/HeaderList"
import { ListItem } from "./components/List/ListItem"
import { useState } from "react"
import { PlusCircle } from "@phosphor-icons/react"
import { v4 as uuidv4 } from 'uuid';

export interface Task {
  id: string
  text: string
  isChecked: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!input) {
      return
    }
    
    const newTask: Task = {
      id: uuidv4(),
      text: input,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInput('')
  }

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <>
     <Header></Header>
     <div className={styles.container}>
      <Input onChange={(e)=> setInput(e.target.value)} value={input}/>
      <Button onClick={handleAddTask} >
        Criar
        <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
      </Button>
     </div>
     <div className={styles.listContainer}>
      <HeaderList tasksCounter={tasks.length} checkedTasksCounter={checkedTasksCounter}/>
      {tasks.length > 0 ? (
        tasks.map((task)=>(
          <ListItem key={task.id} data={task} removeTask={handleRemoveTask} toggleTaskStatus={handleToggleTask}/>

        ))
      ) : (
        <NoList/>

      )}

     </div>

    </>
  )
}

export default App
