type Button = { 
    customStyle?: string //? Indica que le prop puede ser requierido o no
    text: string
    handlePress?: () => void
}

export const Button = ({ customStyle, text, handlePress } : Button) => {
  return (
    //* Si customStyle contiene algo, se aplican sus estilos, si no, se aplican los estilos por defecto.
    <button className = {` text-lg font-bold rounded-xl shadow-md active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out ${ customStyle ? customStyle : ' bg-red-500 p-4 hover:bg-red-800' }`} onClick={ handlePress } >
        { text }
    </button>
  )
}
