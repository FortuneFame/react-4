import React from 'react';
import './HomeworkPage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Content from '../components/Content';

const HomeworkPage = ({ data }) => {
    return (
        <div className="homework-page">
            <Header data={data[0]} />
            <div className='main__content'>
                <Sidebar data={data[2]} />
                <Content />
            </div>
            <Footer data={data[1]} />
        </div>
    );
};

export default HomeworkPage;