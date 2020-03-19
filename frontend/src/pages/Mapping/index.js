import * as React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import {Loader} from 'google-maps';
import {useParams} from 'react-router-dom';
import axios from 'axios';

import io from 'socket.io-client';
import {Box} from "@material-ui/core";
import MapControl from "./MapControl";
import OrderInformation from "./OrderInformation";
import {useSnackbar} from "notistack";

const loader = new Loader(process.env.REACT_APP_GOOGLE_API_KEY);
const socket = io(process.env.REACT_APP_MICRO_MAPPING_URL);

const Mapping = () => {
    const {id} = useParams();

    const [order, setOrder] = useState();
    const [map, setMap] = useState();
    const [startMarker, setStartMarker] = useState();
    const [endMarker, setEndMarker] = useState();
    const [position, setPosition] = useState();

    const snackbar = useSnackbar();

    useEffect(() => {
        async function load() {
            const {data} = await axios
                .get(`${process.env.REACT_APP_MICRO_MAPPING_URL}/orders/${id}`);

            setOrder(data);

            const [lat, lng] = data.location_geo;
            const position = {lat: parseFloat(lat), lng: parseFloat(lng)};
            window.google = await loader.load();
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: position,
                zoom: 15,
            });

            const start = new window.google.maps.Marker({
                title: 'Início',
                icon: 'http://maps.google.com/mapfiles/kml/pal4/icon7.png'
            });

            const end = new window.google.maps.Marker({
                position: position,
                map: map,
                title: 'Destino'
            });

            setMap(map);
            setStartMarker(start);
            setEndMarker(end);
        }

        load();
    }, [id]);

    useEffect(() => {
        socket.on(`order.${id}.new-position`, (payload) => {
            console.log(payload);
            setPosition(payload)
        });
    }, [id]);

    useEffect(() => {
        if (!map || !position) {
            return;
        }

        if(position.lat === 0 && position.lng === 0){
            snackbar.enqueueSnackbar('Motorista chegou no destino', {
                variant: 'success',
                anchorOrigin: {
                    horizontal: 'right',
                    vertical: 'bottom'
                },
            });
            return;
        }

        startMarker.setPosition({lat: position.lat, lng: position.lng});
        startMarker.setMap(map);
        const bounds = new window.google.maps.LatLngBounds();

        bounds.extend(startMarker.getPosition());
        bounds.extend(endMarker.getPosition());

        map.fitBounds(bounds);
    }, [map, position]);

    return (
        <div id={'map'} style={{width: '100%', height: '100%'}}>
            {
                map &&
                <MapControl map={map} position={window.google.maps.ControlPosition.TOP_RIGHT}>
                    <Box m={'10px'}>
                        <OrderInformation order={order}/>
                    </Box>
                </MapControl>
            }
        </div>
    );
};

export default Mapping;
