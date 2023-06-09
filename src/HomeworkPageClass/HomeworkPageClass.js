import React from 'react';
import './HomeworkPageClass.css';
import HeaderClass from '../componentsClass/HeaderClass';
import FooterClass from '../componentsClass/FooterClass';
import SidebarClass from '../componentsClass/SidebarClass';
import ContentClass from '../componentsClass/ContentClass';

class HomeworkPageClass extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className="homework-page">
                <HeaderClass data={data[0]} />
                <div className='main__content'>
                    <SidebarClass data={data[2]} />
                    <ContentClass />
                </div>
                <FooterClass data={data[1]} />
            </div>
        );
    }
}

export default HomeworkPageClass;