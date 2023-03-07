import React, { useEffect, useState } from 'react';
import { Card, Col, Collapse, Layout, Row, Statistic } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import continentData from '../../assets/continents.json';
import countriesData from '../../assets/countries.json';
import { getVisitedCountriesPerContinent } from '../shared/functions';

const { Panel } = Collapse;

function Continents() {

    const [continents, setData] = useState(continentData.continents);

    useEffect(() => {


    }, []);

    return (
        <Card title="Continents">

            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            >
                <Panel header="" key="1" >

                    <Row gutter={{ lg: 24 }}>
                        {continents && (
                            continents.map((item, index) =>
                                <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 6 }} md={index === 0 ? { span: 6 } : { span: 3 }} lg={index === 0 ? { span: 6 } : { span: 3 }}>
                                    <Card size='small' title={item.name}>
                                        <Statistic title="Visited Countries" value={getVisitedCountriesPerContinent(item, countriesData.countries)} suffix={`${"/ " + item.total}`} />
                                    </Card>
                                </Col>
                            )
                        )}
                    </Row>
                </Panel>

            </Collapse>


        </Card>

    )

}

export default Continents;