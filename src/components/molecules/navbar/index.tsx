import { Layout, Menu, Row, Col } from 'antd';
import url_imagenes from '../../../extras/img/index';
import { useMediaQuery } from 'react-responsive'
const { Header, } = Layout;
const { SubMenu } = Menu;

const Navbar = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
    return (
        <Header className='bg-color-pink ' style={{padding:0}}  >
            <Row >
                <Col span={isTabletOrMobile ? 19 : 4} offset={0}>
                    <img src={url_imagenes.textIglesiadeDios} style={{objectFit:'contain',marginLeft:'10%'}} width={isTabletOrMobile ? '70%':'90%'}  />
                </Col>
                <Col span={isTabletOrMobile ? 5 : 20} offset={0} >
                    <Menu className={ !isTabletOrMobile ? 'bg-main-color' : 'bg-color-pink'} mode="horizontal" >
                        <Menu.Item key="mail" >
                            Navigation One
                        </Menu.Item>
                        <Menu.Item key="app"  >
                            Navigation Two
                        </Menu.Item>
                        <SubMenu key="SubMenu"  title="Navigation Three - Submenu">
                            <Menu.ItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                                Navigation Four - Link
                            </a>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>

        </Header>
    )
}

export default Navbar