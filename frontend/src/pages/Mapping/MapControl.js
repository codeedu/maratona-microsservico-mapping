import * as React from 'react';
import {useMemo} from "react";
import {createPortal} from "react-dom";
import {useEffect} from "react";

const MapControl = (props) => {
    const {map, position, children} = props;
    const controlDiv = useMemo(() => document.createElement('div'), []);

    useEffect(() => {
        if (map && position) {
            map.controls[position].push(controlDiv);
        }
    }, [map, position]);

    return createPortal(children, controlDiv);
};


export default MapControl;
