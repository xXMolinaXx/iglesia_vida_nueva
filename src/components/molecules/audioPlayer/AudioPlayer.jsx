import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Row, Col, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive'
const { Text, Link } = Typography;

const AudioPlayer_ = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return (
        <Row>
            <Col span={isTabletOrMobile ? 24:11} offset={isTabletOrMobile ? 0 :1}>
                <AudioPlayer
                    autoPlay={true}
                    src="https://firebasestorage.googleapis.com/v0/b/web-iglesia-de-dios-vida-nueva.appspot.com/o/mp3%2Fmarcos.mp3?alt=media&token=b29a60ad-d614-41df-a537-e014830e10c6"
                    onPlay={e => console.log("onPlay")}
                />
            </Col>
            <Col span={isTabletOrMobile ? 24:11} offset={isTabletOrMobile ? 0 :1} className=''>
                <Text strong>AUTOR DESCONOCIDO</Text>
                <br />
                <Text italic>PORQUE PARA SIEMPRE</Text>
            </Col>
        </Row>

    )
}

export default AudioPlayer_