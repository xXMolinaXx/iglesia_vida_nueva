import { Card } from 'antd';
import { propsCard } from '../../variables/interface';

const CardLayout = ({title,extra,children,style,cover}:propsCard) => {
    return (
        <Card title={title} extra={extra} style={style} cover={cover}>
            {children}
        </Card>
    )
}

export default CardLayout;