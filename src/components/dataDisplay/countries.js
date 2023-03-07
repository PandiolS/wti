import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import continentData from '../../assets/continents.json';
import Europe from './europe';
import Asia from './asia';
import Africa from './africa';
import NorthAmerica from './northAmerica';
import SouthAmerica from './southAmerica';
import Oceania from './oceania';
import Antarctica from './antarctica';

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

            <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <Africa continents={continents} />
            </Col>

            <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <NorthAmerica continents={continents} />
            </Col>

            <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <SouthAmerica continents={continents} />
            </Col>

            <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <Oceania continents={continents} />
            </Col>

            <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <Antarctica continents={continents} />
            </Col>

        </Row>
    )

}

export default Countries;