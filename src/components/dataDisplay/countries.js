import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import continentData from '../../assets/continents.json';
import Europe from './europe';
import Asia from './asia';

function Countries() {

    const [continents, setContinents] = useState(continentData.continents);

    useEffect(() => {

    }, []);


    return (

        <Row gutter={{ lg: 24 }}>

            <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <Europe continents={continents} />
            </Col>

            <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <Asia continents={continents} />
            </Col>

        </Row>
    )

}

export default Countries;