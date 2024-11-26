
import PropTypes from "prop-types";


const Button = ({ bgColor, buttonText, onClick }) => {
  return (


    <button className={`${bgColor}  rounded-md bg-red-500 px-5 py-1 text-white`} onClick={onClick} >
    
      {buttonText}
    </button>

  );
};

export default Button;
Button.propTypes =
{
  bgColor: PropTypes.string,
  buttonText: PropTypes.string,
  onClick: PropTypes.function
}
