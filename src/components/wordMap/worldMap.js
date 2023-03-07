import React, { useEffect, useState } from 'react';
import { Card, Col, Progress, Row, Space } from 'antd';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsMap from "highcharts/modules/map";
import countriesData from '../../assets/countries.json';
import continentData from '../../assets/continents.json';
import map from '@highcharts/map-collection/custom/world-robinson.geo.json';
import Continents from '../dataDisplay/continents';

highchartsMap(Highcharts);



function WorldMap() {

    const [countriesOnCHart, setCountries] = useState([]);
    const [totalCountries, setTotalCountries] = useState(0);

    useEffect(() => {
        let data = [];
        countriesData.countries.map((item, index) => {
            let obj = [item.code, item.cities.length]           
            data.push(obj)
        })
        setCountries(data);

        let countCountries =  ( countriesData.countries.length / 195) * 100;
        setTotalCountries(countCountries.toFixed(1));

    }, []);


    const maptChartData = {
        chart: {
            map: map,
            height: 600,
        },
        title: {
            text: 'Wolrd Map'
        },
        tooltip: {
            headerFormat: "",
            pointFormat: "{point.name}: {point.value} cities"
        },
        credits: {
            enabled: false
        },
        yAxis: {
            title: {
                text: ""
            }
        },
        mapNavigation: {
            enabled: true,
            enableDoubleClickZoomTo: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },


        series: [{
            name: "",
            data: countriesOnCHart,
            states: {
                hover: {
                    color: '#BADA55'
                }
            },

        }]
    }


    return (
        <Row gutter={{ lg: 24 }}>

            <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 18 }} lg={{ span: 18 }}>
                <Card size='small' title="World Map" style={{ minHeight: "600px" }}>
                    <HighchartsReact
                        constructorType={"mapChart"}
                        highcharts={Highcharts}
                        options={maptChartData}
                    />
                </Card>
            </Col>

            <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 6 }} md={{ span: 6 }} lg={{ span: 6}}>
                <Card size='small' title="Info">
                    <Row gutter={{ lg: 24 }}>
                        <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} style={{textAlign: "center"}}>
                            <Space wrap>
                                <Progress type="circle" percent={totalCountries} format={(percent) => `${percent} % visited`}  strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />

                            </Space>

                        </Col>

                        {/* <Col className="gutter-row mb10" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} style={{textAlign: "center"}}>
                            <Space wrap>
                            <Continents />

                            </Space>

                        </Col> */}
                    </Row>
                </Card>
            </Col>

        </Row>


    )

}

export default WorldMap;