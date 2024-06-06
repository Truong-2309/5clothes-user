// import PropTypes from "prop-types";

const Button = ({ className, children, type }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
export default Button;

// Button.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.node.isRequired,
//   type: PropTypes.oneOf(["button", "submit", "reset"]),
// };

// Button.defaultProps = {
//   type: "button",
// };

// const Button = ({ className, children, type }) => {
//     return (
//       <button type={type} className={className}>
//         {children}
//       </button>
//     );
//   };

//   export default Button;
