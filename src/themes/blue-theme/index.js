import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { nextData, getData } from "../../redux/index"
import NextVar from "./next-data"
import { Button, Jumbotron } from "react-bootstrap"
import Table from "react-bootstrap/Table"
import Axios from "axios"
import { StaticQuery, graphql } from "gatsby"

class BlueTheme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      manifest: "You Don't Have A Manifest",
      getListData: [],
      responseData: [],
      search: "",
      loading: false,
      err: false,
      randomApi: {}
    }
  }

  componentDidMount() {
    this.props.dispatch(getData())

    if (document.querySelector("link[rel=\"manifest\"]")) {
      this.setState({ manifest: "You Have A Manifest" })
    } else {
      this.setState({ manifest: "You Don't Have A Manifest" })
    }
  }

  searchSubmit = () => {

    this.setState({ loading: true })
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
        this.setState({ responseData: response.data.result, loading: false })
      })
      .catch(error => {
        this.setState({ loading: false, err: true })
        console.log(error)
      })
  }

  jsonColumn = (obj, column) => {
    const columnRes = column.veriTabaniSutunu
    let colmunRest = ""

    if (typeof columnRes === "string")
      colmunRest = columnRes.charAt(0).toLowerCase() + columnRes.slice(1)

    return obj[colmunRest]
  }

  render() {
    return (
      <Jumbotron>
        <p>
          <NextVar/>
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
            onKeyDown={(e) => e.keyCode === 13 && this.searchSubmit()}
          />
          <Button variant="warning" onClick={() => this.searchSubmit()}>
            Ara
          </Button>
          {this.state.loading && <p style={{ padding: "30px", color: "red", fontWeight: "bold" }}>
            Yükleniyor...
          </p>}
          {this.state.err && <p style={{ padding: "30px", color: "red", fontWeight: "bold" }}>
            Sorgulama hatası!
          </p>}
        </p>

        <StaticQuery
          query={graphql`
                {
                  randomApi {
                    allData {
                      results {
                        id {
                          name
                          value
                        }
                        email
                        gender
                        location {
                          city
                          country
                          state
                          street {
                            name
                            number
                          }
                        }
                        nat
                        phone
                      }
                    }
                  }
                }
              `}
          render={data => {
            return (
              <pre>{JSON.stringify(data, null, 4)}</pre>
            )
          }}
        ></StaticQuery>

        <pre>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th key={0}>#</th>
                {this.props.getListData.map((val, key) => {
                  return <th data-veri-tabani-sutunu={val.veriTabaniSutunu} key={key}>{val.sutunAdi}</th>
                })}
              </tr>
            </thead>
            <tbody>
              {this.state.responseData.map((val, key) => {
                return (
                  <tr key={key}>
                    <td key={key}>{key += 1}</td>
                    {
                      this.props.getListData.map(list => {
                        return (
                          <td key={list.veriTabaniSutunu}>
                            {
                              this.jsonColumn(val, list)
                            }
                          </td>
                        )
                      })
                    }
                  </tr>
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
