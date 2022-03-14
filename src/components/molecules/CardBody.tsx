import { Col, Divider, Row } from "antd"
import url_imagenes from "../../extras/img"
import { CardLayout } from "../atoms"


const CardBody = ({ style, title, cover }: any) => {
  return (
    <CardLayout title={title} style={style} cover={<img alt="example" src={url_imagenes.family} />}>
      <div>
        <Row >

          <Col span={10} offset={1}>
            <p>Domingos</p>
          </Col>

          <Col span={12} offset={1}>
            <p>10:00 am a 12:00 pm</p>
          </Col>
        </Row>
        <Divider />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo tempore sunt, suscipit assumenda, neque optio mollitia ratione tenetur, recusandae sequi voluptatum dolore! Explicabo magni labore iure excepturi consectetur aliquam porro.
        </p>
      </div>
    </CardLayout>
  )
}

export default CardBody