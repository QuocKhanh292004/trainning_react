// layout toàn trang
import React from 'react';
import Header from '../../components/header';
import Content from '../../components/content';
import Footer from '../../components/footer';

function DefaultLayout() {
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div>
                <Content></Content>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default DefaultLayout;
