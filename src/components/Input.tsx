import { InputHTMLAttributes } from "react"
import styles from "./Input.module.css"

export function Input ({...props}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input {...props} className={styles.input} placeholder="Adicione uma nova tarefa" type="text" />
    )
}