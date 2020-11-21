import React, { ReactNode } from "react"
import styles from "./index.module.scss"

const ButtonsContainer = ({
  children,
}: {
  children: ReactNode
}): JSX.Element => <div className={styles.buttons}>{children}</div>

export { ButtonsContainer }
