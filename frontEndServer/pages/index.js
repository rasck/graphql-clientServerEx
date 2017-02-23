import React from 'react'
import gql from 'graphql-tag'
import 'isomorphic-fetch'
import apollo from '../apollo'

const query = gql` {
     hello
}`
export default class extends React.Component {
  static async getInitialProps({req}) {
    return await apollo.query({
      query,
    })
  }
  render() {
    const {loading} = this.props
    if (loading) {
      return <span>Loading...</span>
    } else {
      return <div>
        <h1>Hello:</h1>
        <p>{this.props.data.hello}</p>
      </div>
    }
  }
}
