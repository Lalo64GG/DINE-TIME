type DividingLineProps = {
    direction?: String
  }
  
  export const DividingLine = ({ direction }: DividingLineProps) => {
    return (
      <div className={`flex justify-${direction}`}>
      <div className=" mt-10 border-8 w-full inline-block border-[#8E0000] mb-2  "></div>
      </div>
    )
  }
  