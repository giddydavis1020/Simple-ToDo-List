import { forwardRef } from 'react';
import styles from './TextInputWithLabel.module.css';

const TextInputWithLabel = forwardRef(
    ({ value, onChange, elementId, labelText }, ref) => {
        return (
            <div className={styles.field}>
                <label
                    className={styles.label}
                    htmlFor={elementId}
                >
                    {labelText}
                </label>

                <input
                    className={styles.input}
                    ref={ref}
                    type="text"
                    value={value}
                    onChange={onChange}
                    id={elementId}
                    maxLength={200}
                />
            </div>
        );
    }
);

TextInputWithLabel.displayName = 'TextInputWithLabel';

export default TextInputWithLabel;