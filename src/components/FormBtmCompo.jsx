import { Link } from "react-router-dom"

function FormBtmCompo({text,to,totext}) {
  return (
    <div className="flex dark:text-white/60 justify-center space-x-1 mt-4">
       <h1>{text}</h1>
       <Link to={to}><h1 className="underline">{totext}</h1> </Link>
    </div>
  )
}

export default FormBtmCompo