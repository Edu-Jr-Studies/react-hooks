import React, { useEffect } from "react";

const ListProduct = ({list, listModifier}) => {
    const modifiedList = listModifier(list);

    useEffect(() => {
        console.log('CRIOU A FUNÇÃO DO ZERO');
    },[listModifier]);
    
    return (
        <ul>
            {
                modifiedList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    );
};

export default ListProduct;