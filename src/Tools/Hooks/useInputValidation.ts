import { useState } from 'react';

type ValidationResult = {
    value: string;
    setValue: (value: string) => void;
    isInvalid: boolean;
    validate: () => void;
}

export const useInputValidation = (initialValue: string = ''): ValidationResult => {
    const [value, setValue] = useState<string>(initialValue);
    const [isInvalid, setIsInvalid] = useState<boolean>(false);

    const validate = () => {
        if (!value.trim()) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
    };

    return {
        value,
        setValue,
        isInvalid,
        validate,
    };
};
