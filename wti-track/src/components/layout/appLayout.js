import React, {useEffect } from 'react';
import "./layout.scss"
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd';
import AppFooter from './footer';
import AppHeader from './header';

const { Content } = Layout;

function AppLayout() {

    useEffect(() => {

    }, []);


    return (
        <Layout className="appLayout">     

                <AppHeader />

                <Content className="site-layout-content"  >
                    <Outlet />
                </Content>

                <AppFooter />

           
        </Layout>

    )

}

export default AppLayout;