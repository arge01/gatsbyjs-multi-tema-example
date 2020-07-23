import React from "react"
import { graphql } from "gatsby"

const RandomApi = ({ randomApi }) => {
  return (
    <>
      çağardık
      <pre>{JSON.stringify(randomApi, null, 4)}</pre>
    </>
  )
}

export default RandomApi
