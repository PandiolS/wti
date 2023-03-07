import { Col, Row } from 'antd';
import React, { useEffect } from 'react';
import Continents from '../dataDisplay/continents';
import Countries from '../dataDisplay/countries';
import WorldMap from '../wordMap/worldMap';

function HomePage() {

    useEffect(() => {

    }, []);


    return (
        <Row gutter={{ lg: 24 }}>
            <Col className="gutter-row" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>

                <WorldMap />

            </Col>

            {/* <Col className="gutter-row" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>

                <Continents />

            </Col> */}

            <Col className="gutter-row" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>

                <Countries />

            </Col>


        </Row>

    )

}

export default HomePage;