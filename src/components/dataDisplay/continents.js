import React, { useEffect, useState } from 'react';
import { Card, Col, Collapse, Layout, Row, Space, Statistic, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import continentData from '../../assets/continents.json';
import countriesData from '../../assets/countries.json';
import { getVisitedCountriesPerContinent } from '../shared/functions';
import { SpaceCompactItemContext } from 'antd/es/space/Compact';

const { Panel } = Collapse;
const { Text } = Typography;

function Continents() {

    const [continents, setData] = useState(continentData.continents);

    useEffect(() => {


    }, []);

    return (
        <Card size='small' title="Continents">

            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            >
                <Panel header="" key="1" >

                    <Row gutter={{ lg: 24 }}>
                        {continents && (
                            continents.map((item, index) =>
                                <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={ { span: 24 }} lg={{ span: 24 } }>
                                    <Card size='small' title={item.name}>
                                        <Statistic title="Visited Countries"  value={getVisitedCountriesPerContinent(item, countriesData.countries)} suffix={`${"/ " + item.total}`} />
                                        
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