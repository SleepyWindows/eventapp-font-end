import React from 'react';
import QRCode from "react-qr-code";

const qrCode = (props) => {
    return ( 
        <QRCode value={props.url}/>
        );
}
 
export default qrCode;