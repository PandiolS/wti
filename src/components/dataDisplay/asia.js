import React, { useEffect, useState } from 'react';
import { Card, Col, Collapse, List, Row } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import countriesData from '../../assets/countries.json';
import Flag from 'react-world-flags'

const { Panel } = Collapse;

function Asia({ continents }) {

    const [countries, setCountries] = useState(countriesData.countries);
    const [continent, setContinent] = useState(null);

    useEffect(() => {
        let data = countries.filter(obj => obj.continent === 2).sort((a, b) => a.name.localeCompare(b.name));
        setCountries(data);
        let continentData = continents.filter(obj => obj.id === 2);
        setContinent(continentData[0]);
    }, []);

    return (
        <Card title="Countries in Asia">

            <Collapse
                bordered={false}                
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            >

                <Panel header={`Visited Countries ${countries.length} / ${continent ? continent.total : ""} `} key="1" >
                    <Row gutter={{ lg: 24 }}>

                        {countries && (
                            countries.map((country, index) =>
                                <Col key={index} className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 4 }}>
                                    <Card size='small' title={country.name} extra={<Flag code={country.code} height="17" style={{ borderRadius: "50%" }} />}>
                                        <Collapse
                                            bordered={false}
                                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                        >
                                            <Panel header={`${country.cities.length} Cities`} key={index} >
                                                <Row gutter={{ lg: 24 }}>
                                                    <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                                                        <List
                                                            itemLayout="horizontal"
                                                            size='small'
                                                            dataSource={country.cities}
                                                            renderItem={(item, index) => (
                                                                <List.Item>
                                                                    <List.Item.Meta
                                                                        title={item.name}
                                                                    />
                                                                </List.Item>
                                                            )}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Panel>

                                        </Collapse>
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

export default Asia;