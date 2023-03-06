import React, { useEffect } from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function AppFooter() {

    useEffect(() => {

    }, []);


    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2023 Created by Ant UED
        </Footer>

    )

}

export default AppFooter;