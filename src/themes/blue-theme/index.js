import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { nextData, getData } from "../../redux/index"
import NextVar from "./next-data"
import { Button, Jumbotron } from "react-bootstrap"
import Table from "react-bootstrap/Table"
import Axios from "axios"

class BlueTheme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      manifest: "You Don't Have A Manifest",
      getListData: [],
      responseData: [],
      search: "",
    }
  }

  componentDidMount() {
    this.props.dispatch(getData())

    if (document.querySelector('link[rel="manifest"]')) {
      this.setState({ manifest: "You Have A Manifest" })
    } else {
      this.setState({ manifest: "You Don't Have A Manifest" })
    }

    const data = JSON.stringify({ ara: "123", sayfa: 1 })

    const config = {
      method: "post",
      url:
        "https://testdinamikotoapi.yuceyazilim.com.tr/api/services/app/UrunAramaService/SearchProduct",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }

    Axios(config)
      .then(response => {
        this.setState({ responseData: response.data.result })
      })
      .catch(error => {
        console.log(error)
      })
  }

  searchSubmit = () => {
    console.log(this.state.search)

    const data = JSON.stringify({ ara: this.state.search, sayfa: 1 })

    const config = {
      method: "post",
      url:
        "https://testdinamikotoapi.yuceyazilim.com.tr/api/services/app/UrunAramaService/SearchProduct",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    }

    Axios(config)
      .then(response => {
        this.setState({ responseData: response.data.result })
        console.log(this.state.responseData)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <Jumbotron>
        <p>
          <NextVar />
        </p>
        <p>
          <Button
            variant="warning"
            onClick={() => this.props.dispatch(nextData())}
          >
            Change Reducers
          </Button>
        </p>
        <p>{this.state.manifest}</p>
        <p>
          <input
            name="search"
            type="text"
            onChange={event => this.setState({ search: event.target.value })}
            placeholder="Ürün adı"
          />
          <Button variant="warning" onClick={() => this.searchSubmit()}>
            Ara
          </Button>
        </p>
        <pre>
          <Table striped bordered hover>
            <thead>
              <tr>
                {this.props.getListData.map((val, key) => {
                  return <th key={key}>{val.sutunAdi}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.responseData.map((val, key) => {
                return (
                  //console.log(val),
                  <tr key={key}></tr>
                )
              })}
            </tbody>
          </Table>
        </pre>
      </Jumbotron>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    ...bindActionCreators({ nextData, getData }, dispatch),
  }
}

const mapStateToProps = ({ getListData }) => ({ getListData })

export default connect(mapStateToProps, mapDispatchToProps)(BlueTheme)
