import { Layout, Carousel, Divider, Row, Col } from 'antd';
import { AudioPlayer, Card } from '../../components/molecules';
import { useMediaQuery } from 'react-responsive'
import url_imagenes from '../../extras/img';
import './main.css'


const { Content, Footer } = Layout;


const Home = () => {
    
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <div  >
            <Layout className="layout all-bg-color">


                <Content style={{ padding: '0 50px', }}>
                    <Carousel >
                        <div >
                            <div className={ isTabletOrMobile ? '' :'height-200 px-96 '}>
                                <img alt='imagen' src={url_imagenes.carousel1} />
                            </div>
                        </div>
                        <div >
                            <div className={ isTabletOrMobile ? '' :'height-200 px-96 '}>
                                <img alt='imagen' src={url_imagenes.carousel2} />
                            </div>
                        </div>
                        <div >
                            <div className={ isTabletOrMobile ? '' :'height-200 px-96 '}>
                                <img alt='imagen' src={url_imagenes.carousel3} />
                            </div>
                        </div>
                    </Carousel>
                    <AudioPlayer />
                    <Divider>Nuestros Servicios </Divider>
                    <Row >

                        <Col span={isTabletOrMobile ? 24 : 7} offset={1}>
                            <Card title={'Servicio dominical'} />
                        </Col>
                        <Col span={isTabletOrMobile ? 24 : 7} offset={1}>
                            <Card title={'Servicio dominical'} />
                        </Col>
                        <Col span={isTabletOrMobile ? 24 : 7} offset={1}>
                            <Card title={'Servicio dominical'} />
                        </Col>
                    </Row>

                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED & KenJ Product</Footer>
            </Layout>
        </div>
    )
}

export default Home;