import { forwardRef } from 'react';

const TextInputWithLabel = forwardRef(
    (
        {
            value,
            onChange,
            elementId,
            labelText,
            maxLength,
        },
        ref
    ) => {
        return (
            <>
                <label htmlFor={elementId}>{labelText}</label>
                <input
                    ref={ref}
                    type="text"
                    value={value}
                    onChange={onChange}
                    id={elementId}
                    maxLength={maxLength}
                />
            </>
        );
    }
);

export default TextInputWithLabel;