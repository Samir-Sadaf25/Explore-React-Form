import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Special = ({name}) => {
    
    const asset = useContext(AssetContext);
    
    return (
        <div>
            <h3>Special: {name}</h3>
            <p>Asset : {asset}</p>
        </div>
    );
};

export default Special;