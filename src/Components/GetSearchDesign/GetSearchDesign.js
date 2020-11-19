import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchField from "react-search-field";
import ReactSearchBox from 'react-search-box'

const GetSearchDesign = () => {
    return (
         <Container className = "mt-5 mb-5">
             <Row>
                 <Col xs={8} className="m-auto d-flex justify-content-center border border-primary" xl={6} md="8">
                    <Row className="m-auto">
                    {/* <h1>Bismillah</h1> */}
                    <ReactSearchBox
        placeholder="Enter your email address."
        // value="Doe"
        // data={this.data}
        // callback={record => console.log(record)}
      />
                    </Row>
                    {/* <Row>
                        <SearchField
                            placeholder="Search..."
                            searchText=" search "
                            classNames="test-class"
                        />
                    </Row> */}
                   
                 </Col>
             </Row>
         </Container>
    );
};

export default GetSearchDesign;