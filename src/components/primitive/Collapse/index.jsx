import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Item = ({ route, children }) => {
  return (
    <li>
      <Link to={route}>{children}</Link>
    </li>
  );
};

const Collapse = ({ heading, children, onClick, open }) => {
  const collapseContentRef = useRef(null);
  useEffect(() => {
    if (collapseContentRef) {
      const scrollHeight = collapseContentRef.current.scrollHeight;
      if (open) {
        collapseContentRef.current.style.height = `${scrollHeight}px`;
      } else {
        collapseContentRef.current.style.height = 0;
      }
    }
  }, [open]);

  return (
    <div className="footer-col">
      <h6 className="footer-heading" onClick={onClick}>
        {heading}
      </h6>
      <ul
        className={`footer-link ${open ? "show" : ""}`}
        ref={collapseContentRef}
        style={{ height: 0 }}
      >
        {children}
      </ul>
    </div>
  );
};

Collapse.Item = Item;

export default Collapse;

// import { useEffect, useRef } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// const Item = ({ route, children }) => {
//   return (
//     <li>
//       <Link to={route}>{children}</Link>
//     </li>
//   );
// };

// Item.propTypes = {
//   route: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
// };

// const Collapse = ({ heading, children, onClick, open }) => {
//   const collapseContentRef = useRef(null);

//   useEffect(() => {
//     if (collapseContentRef.current) {
//       const scrollHeight = collapseContentRef.current.scrollHeight;
//       if (open) {
//         collapseContentRef.current.style.height = `${scrollHeight}px`;
//       } else {
//         collapseContentRef.current.style.height = 0;
//       }
//     }
//   }, [open]);

//   return (
//     <div className="footer-col">
//       <h6 className="footer-heading" onClick={onClick}>
//         {heading}
//       </h6>
//       <ul
//         className={`footer-link ${open ? "show" : ""}`}
//         ref={collapseContentRef}
//         style={{ height: 0 }}
//       >
//         {children}
//       </ul>
//     </div>
//   );
// };

// Collapse.propTypes = {
//   heading: PropTypes.string.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
// };

// Collapse.Item = Item;

// export default Collapse;
