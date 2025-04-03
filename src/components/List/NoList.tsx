import styles from "./NoList.module.css"
import clipboard from "../../assets/Clipboard.png"

export function NoList () {
    return(
        <div className={styles.container}>
            <img src={clipboard} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}