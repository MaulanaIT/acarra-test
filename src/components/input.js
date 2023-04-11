// Import Library
import React from 'react';

export default function Input({
    classNameContainer = 'relative',
    classNameContainerAdditional = '',
    classNameInput = 'bg-white border-[#D3DEE9] border-[1px] leading-[22px] mt-5 p-[19px_20px] rounded-[12px] text-base',
    classNameInputAdditional = '',
    classNameTitle = 'font-semibold leading-[30px] text-[22px] text-black',
    classNameTitleAdditional = '',
    placeholder = 'Enter text here',
    title = '',
    type = 'text',
    value = '',
    onChange = () => { },
    ...props
}) {
    return (
        <div className={`${classNameContainer} ${classNameContainerAdditional}`}>
            <p className={`${classNameTitle} ${classNameTitleAdditional}`}>{title}</p>
            <input type={type} className={`${classNameInput} ${classNameInputAdditional}`} placeholder={placeholder} value={value} onChange={onChange} {...props} />
        </div>
    )
}
