import React, { useEffect, useState } from 'react';
import { Card, Col, Collapse, Layout, List, Row } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import countriesData from '../../assets/countries.json';
import continentData from '../../assets/continents.json';
import Flag from 'react-world-flags'

const { Panel } = Collapse;

function Countries() {

    const [europeCountries, setCountries] = useState(countriesData.countries);
    const [europeContinent, setEuropeContinent] = useState(null);

    const [continents, setContinents] = useState(continentData.continents);

    useEffect(() => {

        let europeData = europeCountries.filter(obj => obj.continent === 1).sort((a, b) => a.name.localeCompare(b.name));
        setCountries(europeData);
        let europeContinent = continents.filter(obj =>obj.id === 1);        
        setEuropeContinent(europeContinent[0]);
        

    }, []);

    debugger
    return (
        <Card title="Countries">

            <Collapse
                bordered={false}
                defaultActiveKey={['1']}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            >

                <Panel header={`Countries in Europe ${europeCountries.length} / ${europeContinent ? europeContinent.total : ""} `} key="1" >
                    <Row gutter={{ lg: 24 }}>

                        {europeCountries && (

                            europeCountries.map((country, index) =>
                                <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 4 }} lg={{ span: 4 }}>
                                    <Card size='small' title={country.name} extra={<Flag code={country.code} height="17" style={{borderRadius: "50%"}} />}>
                                        <Collapse
                                            bordered={false}
                                            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                        >
                                            <Panel header={`${country.cities.length} cities`} key={index} >
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

export default Countries;