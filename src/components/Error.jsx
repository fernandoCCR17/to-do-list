import PropTypes from "prop-types"

const Error = ({children}) => {
  return (
    <div className="text-center my-3 bg-red-700 text-white uppercase text-md font-bold py-2">
        <p>{children}</p>
    </div>
  )
}

Error.propTypes = {
    children: PropTypes.string.isRequired
}

export default Error