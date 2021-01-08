const { useState} = React
const { render } = ReactDOM;
const { Row, Col, Container} = ReactBootstrap;
const { Button, Form, FormControl } = ReactBootstrap;


const App = () => {

    const [input01, setInput01] = useState(null);
    const [input02, setInput02] = useState(null);
    const [answer, setAnswer] = useState(null);

    const submit = (evt) => {
        evt.preventDefault();
        console.log(input01)
        console.log(input02)
        setAnswer(solution(input01, input02))
        // console.log(add(input01, input02))
    }

    return (

        <Form>
            <Form.Row>
                <Col>
                    <Form.Label>Input: a</Form.Label>
                    <FormControl type='text' onChange={ (x => { setInput01(x.currentTarget.value) }) } />
                </Col>
                <Col>
                    <Form.Label>Input: b</Form.Label>
                    <FormControl type='text' onChange={ (x => { setInput02(x.currentTarget.value) }) } />
                </Col>
            </Form.Row>
            <Button variant="primary" type="submit" onClick={submit}> Submit </Button>
            <div>
                { (answer == null)? null : `My answer is ${answer}` } 
            </div>
        </Form>
    )
}

render(
    <Container>
        <App />
    </Container>
    , document.getElementById('root')
)
