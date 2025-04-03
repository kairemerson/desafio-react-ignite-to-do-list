import styles from "./HeaderList.module.css"

interface HeaderListProps {
    tasksCounter: number
    checkedTasksCounter: number
}

export function HeaderList ({tasksCounter, checkedTasksCounter}: HeaderListProps) {
    return (
        <div className={styles.container}>
            <div >
                <span className={styles.created}>Tarefas criadas</span>
                <span>{tasksCounter}</span>
            </div>
            <div>
                <span className={styles.completed}>Concluídas</span>
                <span>
                    {
                        tasksCounter == 0 ? tasksCounter : `${checkedTasksCounter} de ${tasksCounter}`
                        
                    }
                </span>
            </div>
        </div>
    )
}