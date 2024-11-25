
//  import propTypes from "propTypes"
const Button = ({buttonText})=> {
  return (
   
   
        <button type="button" className={`bg-purple-500 px-8 py-2 rounded-[16px] ${className}`}>
            {buttonText}
        </button>
    
  );
};

export default Button
// Button.propTypes = {
//   buttonText: propTypes.string.isRequired,
//   className: propTypes.string,
  
// };
