import React from "react"
import styles from "./index.module.scss"
import Img from "gatsby-image"
import { PersonHandle } from "../PersonHandle"
import { CombineStyles } from "../../helpers/CombineStyles"

const PeopleSection = ({ event_name, people }) => (
  <section className={styles.people}>
    <div className="row justify-content-center">
      <div className="col-sm-4 text-center">
        <h2 className="display-4 fw-bold">Team</h2>
        <p>These are the people that make {event_name} possible!</p>
      </div>
    </div>
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-xl-8">
          <div className="row justify-content-center">
            {people.map(person => (
              <div
                className={CombineStyles(
                  "col-6 col-sm-4 col-md-3",
                  styles.card
                )}
                key={person.frontmatter.name}
              >
                <div className={styles.pictureContainer}>
                  <Img
                    fluid={{
                      ...person.frontmatter.image.childImageSharp.fluid,
                      aspectRatio: 1,
                    }}
                    className={styles.picture}
                    title={person.frontmatter.description}
                  />
                </div>
                <div className={styles.cardContent}>
                  <div className="text-center">
                    <span className={styles.name}>
                      {person.frontmatter.name}
                    </span>
                    <br />
                    <span
                      className={CombineStyles(
                        styles.description,
                        "text-muted"
                      )}
                    >
                      {person.frontmatter.short_description}
                    </span>
                    <div className={styles.handles}>
                      {person.frontmatter.handles.map(handle => (
                        <PersonHandle
                          key={handle.handle}
                          handle={handle.handle}
                          service={handle.service}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export { PeopleSection }
