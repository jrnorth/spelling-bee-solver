import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true, solving: false, input: '' }
    this.dictionary = {}

    this.initialize = this.initialize.bind(this)
    this.inputChanged = this.inputChanged.bind(this)
    this.modalClosed = this.modalClosed.bind(this)
    this.solve = this.solve.bind(this)
  }
  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/jrnorth/spelling-bee-solver/master/dictionary.txt'
    )
      .then((res) => res.text())
      .then(this.initialize)
  }
  initialize(words) {
    this.dictionary = words.split('\n').reduce((prev, cur) => {
      const chars = cur.toLowerCase().split('')
      const charSet = new Set(chars)
      const key = [...charSet].sort().join('')
      if (prev[key]) {
        prev[key].push(cur)
      } else {
        prev[key] = [cur]
      }
      return prev
    }, {})
    this.setState({ loading: false })
  }
  inputChanged(event) {
    const value = event.currentTarget.value
    const chars = value.split('')
    const input = chars.filter((c) => /^[A-Z]$/i.test(c)).join('')
    this.setState({ input })
  }
  modalClosed() {
    this.setState({ solution: undefined })
  }
  solve() {
    this.setState({ solving: true })
    const required = this.state.input.toLowerCase().charAt(0)
    const uniq = new Set(this.state.input.toLowerCase().split(''))
    const powerSet = [...uniq].sort().reduce((prev, cur) => {
      const withCur = prev.map((set) => [...set, cur])
      withCur.forEach((set) => prev.push(set))
      prev.push([cur])
      return prev
    }, [])
    const solution = powerSet
      .filter((set) => set.length > 3)
      .filter((set) => set.includes(required))
      .reduce((prev, cur) => {
        const words = this.dictionary[cur.join('')]
        if (words) {
          words.forEach((word) => prev.push(word))
        }
        return prev
      }, [])
      .sort()
    this.setState({ solution, solving: false })
  }
  solutionRows() {
    const rows = []
    for (var r = 0; r < this.state.solution.length; r += 4) {
      const cols = []
      for (var c = 0; c < 4 && r + c < this.state.solution.length; c++) {
        cols.push(
          <Col key={'r' + r + 'c' + c} className="col-sm-3">
            {this.state.solution[r + c]}
          </Col>
        )
      }
      rows.push(<Row key={'r' + r}>{cols}</Row>)
    }
    return rows
  }
  render() {
    return (
      <div className="jumbotron d-flex align-items-center min-vh-100">
        <Container className="text-center">
          <Row>
            <Col className="col-sm-4 mx-auto">
              {this.state.loading && <Spinner animation="grow" />}
              {!this.state.loading && (
                <InputGroup>
                  <FormControl
                    placeholder="Spelling Bee letters"
                    onChange={this.inputChanged}
                    maxLength={7}
                    className="shadow-none"
                    value={this.state.input}
                    autoFocus
                  />
                  <InputGroup.Text>
                    {this.state.input
                      ? this.state.input.charAt(0).toUpperCase()
                      : 'Required Letter'}
                  </InputGroup.Text>
                  {!this.state.solving && (
                    <Button
                      variant="primary"
                      id="solve"
                      disabled={this.state.input.length !== 7}
                      className="shadow-none"
                      onClick={this.solve}
                    >
                      Solve
                    </Button>
                  )}
                  {this.state.solving && (
                    <Button
                      variant="primary"
                      id="solve"
                      disabled
                      className="shadow-none"
                    >
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      &nbsp; Solving
                    </Button>
                  )}
                </InputGroup>
              )}
            </Col>
          </Row>
        </Container>
        {this.state.solution && (
          <Modal
            size="lg"
            show={true}
            onHide={this.modalClosed}
            scrollable={true}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                Solution ({this.state.solution.length} words)
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Container>{this.solutionRows()}</Container>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={this.modalClosed}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    )
  }
}

export default App
