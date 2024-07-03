import {Input} from "@nextui-org/react";

type inputProps = {
    placeholder: string,
    type: string,
    label: string
}

export const InputAtom = ({ placeholder, type, label } : inputProps) => {
  return (
    <Input 
        type={ type } 
        label={ label } 
        placeholder={ placeholder }  
    />
  )
}
