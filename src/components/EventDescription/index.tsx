import React, { Component, ReactNode } from "react"
import { EventPageQuery, MarkdownRemark } from "../../../types/graphql"
import styles from "./index.module.scss"

interface Props {
  markdownRemark: MarkdownRemark
}

class EventDescription extends Component<Props> {
  render(): ReactNode {
    const { frontmatter } = this.props.markdownRemark

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
