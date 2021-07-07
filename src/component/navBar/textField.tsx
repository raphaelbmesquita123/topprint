import React from 'react'
import { forwardRef, ForwardRefRenderFunction} from 'react'
import { FieldError } from 'react-hook-form'
import { InputContainer } from './stylesTextField'

interface InputProps {
    name: string
    label?: string
    error?: FieldError
    type: string
    placeholder: string
}

const inputField:ForwardRefRenderFunction<HTMLInputElement , InputProps> = ({ name, type, error = null, placeholder,...rest }, ref) => {
    return (
        <InputContainer >
            <input 
                id={name} 
                name={name} 
                ref={ref} 
                type={type}
                placeholder={placeholder}
                {...rest}
                />

                {
                    error !== null ?
                    <div>
                        {error?.message}
                    </div>
                    : 
                    ''
                }
        </InputContainer>
    )
}

export const TextField = forwardRef(inputField)