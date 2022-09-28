import React from "react";

const InputCheckbox = ({name, registerValue, objNameValue}) => {
    return (
        <div style={{ display: 'flex', gap: '10px', placeItems: 'center' }}>
            <input 
                style={{cursor: 'pointer'}}
                {...registerValue(objNameValue)}
                type="checkbox" 
                />
            <p style={{color: 'var(--text--place--input)',}}>{name}</p>
        </div>
    );
}

export default InputCheckbox;