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
           WTI
        </Footer>

    )

}

export default AppFooter;