type labelProps = {
    children: string,
    customStyle: string
}

export const Label = ({ children, customStyle }: labelProps) => {
  return (
    <label className={` text-center text-2xl ${ customStyle ? customStyle : ' text-black font-semibold'  } `} >
        { children }
    </label>
  )
}
