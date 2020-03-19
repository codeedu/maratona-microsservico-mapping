import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {Card, ListItemAvatar, ListItemText} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';

const OrderInformation = (props) => {
    const {order} = props;

    function labelStatus(status) {
        switch (status) {
            case 1:
                return 'Pedido Pendente';
            case 2:
                return 'Pedido Entregue';
        }
    }

    return (
        <Card>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={'https://avatars2.githubusercontent.com/u/4926329?s=460&v=4'}/>
                    </ListItemAvatar>
                    <ListItemText primary={order.driver_name} secondary={labelStatus(order.status)} />
                </ListItem>
                <ListItem>
                    <ListItemText secondary={`Local de entrega: Destino ${order.location_id}`} />
                </ListItem>
            </List>
        </Card>
    );
};

export default OrderInformation
