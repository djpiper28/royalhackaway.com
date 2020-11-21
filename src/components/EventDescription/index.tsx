import React, { Component, ReactNode } from "react"
import { EventPageQuery } from "../../../types/graphql"
import styles from "./index.module.scss"

interface Props {
  data: EventPageQuery
}

class EventDescription extends Component<Props> {
  render(): ReactNode {
    const { markdownRemark } = this.props.data
    const { frontmatter } = markdownRemark

    return (
      <section style={{ backgroundColor: frontmatter.color }}>
        <div className="container text-light">
          <p className={styles.description}>{frontmatter.short_description}</p>
        </div>
      </section>
    )
  }
}

export { EventDescription }
