import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Term = () => {
    return (
        <Container>
            <h3>Thi is term condtion</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere enim a, aspernatur nisi praesentium magnam dolorum soluta itaque obcaecati delectus dignissimos in nesciunt, consequatur architecto, sapiente sint numquam qui fugiat?
                <Link to="/regester"></Link>
            </p>
        </Container>
    );
};

export default Term;