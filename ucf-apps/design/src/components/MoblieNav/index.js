import React, { Component } from 'react';
import { Row,Col,FormControl,Select } from 'tinper-bee';
import logo from 'images/iuapdesignz.svg';
import './index.less';

const Option = Select.Option;
class NavBar extends Component {
    render() {
        return (
            <Row className='nav'>
                <Col className='nav-left' md={5}>
                    <span className='nav-logo '>
                        <img src={logo} />
                    </span>
                    <span className='nav-split'>|</span>
                    <span className='nav-search'>
                        <FormControl id='componentSearch' placeholder='在iuap design 中搜索' type='search' />
                    </span>
                </Col>
                <Col className='nav-right' md={7}>
                    <ul className="nav-options">
                        <li><a href="">设计</a></li>
                        <li><a href="">组件</a></li>
                        <li><a href="">文章</a></li>
                        <li><a href="">资源</a></li>
                        <li>
                            <Select defaultValue="zh_CN" dropdownClassName='nav-lang-select'>
                                <Option value="zh_TW" disabled={true}>繁体中文</Option>
                                <Option value="zh_CN">简体中文</Option>
                                <Option value="en_US" disabled={true}>英文</Option>
                            </Select>
                        </li>
                    </ul>  
                </Col>          
            </Row>
        );
    }
}

export default NavBar;