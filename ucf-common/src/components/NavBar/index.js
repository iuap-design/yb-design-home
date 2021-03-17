import React, { Component } from 'react';
import { Button,Row,Col,FormControl,Dropdown,Menu,Select,Icon,InputGroup } from 'tinper-bee';
import './index.less';

const Option = Select.Option;
const { Item } = Menu;

class NavBar extends Component {
    constructor(props){ 
        super(props);
        this.state={
            version:''
        } 
    }
    componentDidMount(){
        docsearch({ 
            apiKey: 'd388a4977faabf821db64112c8abdcf7', 
            indexName: 'bee_tinper', 
            inputSelector: '#componentSearch', 
            debug: false // Set debug to true if you want to inspect the dropdown 
        }); 
    }
    render() {
        const { activeKey } = this.props;
        const mobileMenu = (
            <Menu>
              <Item key="2"><a href="/design" onTouchStart={()=>{}}>设计</a></Item>
              <Item key="3"><a href="/components" onTouchStart={()=>{}}>组件</a></Item>
              <Item key="4"><a className={activeKey === '5' ? 'first-show' : ''} href="/articles" onTouchStart={()=>{}}>文章</a></Item>
              <Item key="5"><a className={activeKey === '6' ? 'first-show' : ''} href="/resources" onTouchStart={()=>{}}>资源</a></Item>
            </Menu>
        );
        return (
            <div >
                <Row className='nav'>
                <Col className='nav-left' md={5}>
                    <span className='nav-logo '>
                        <a href="#">
                            <img src='//design.yonyoucloud.com/static/tinper-bee/logo/iuapdesign.svg' />
                            <span className='version'>{ TINPERVERSION }</span>
                        </a>
                    </span>
                    <span className='nav-split'>|</span>
                    <span className='nav-search'>
                        <FormControl id='componentSearch' placeholder='在iuap design 中搜索' type='search' />
                    </span>
                </Col>
                <Col className='nav-right' md={7}>
                    <ul className="nav-options">
                        <li key="2"><a href="/design">设计</a></li>
                        <li key="3"><a href="/components">组件</a></li>
                        <li key="4"><a href="/articles">文章</a></li>
                        <li key="5"><a href="/resources">资源</a></li>
                        <li>
                            <Select defaultValue="zh_CN" dropdownClassName='nav-lang-select'>
                                <Option value="zh_CN">简体中文</Option>
                                <Option value="zh_TW" disabled={true}  disabletarget="_blank">繁体中文</Option>
                                <Option value="en_US" disabled={true}>英文</Option>
                            </Select>
                        </li>
                    </ul>  
                </Col>          
            </Row>
            <div className="mob-nav">
                <a href="#">
                    <img src='//design.yonyoucloud.com/static/tinper-bee/logo/iuapdesign.svg' />
                    <span className='version'>{ TINPERVERSION }</span>
                </a>
               <span className="nav-content">
                   <Dropdown
                        overlayClassName="aaa"
                        trigger={['click']}
                        overlay={mobileMenu}
                        animation="slide-up">
                        <Button ><Icon type="uf-navmenu"></Icon></Button>
                   </Dropdown> 
               </span>
            </div>
        </div> 
        );
    }
}

export default NavBar;