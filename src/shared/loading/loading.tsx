import { Container, Spinner } from "react-bootstrap";

export const Loading = () => (
<Container style={{
    justifyContent: 'center',
    margin: '10px 0'
    }}>
    <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
</Container>
)