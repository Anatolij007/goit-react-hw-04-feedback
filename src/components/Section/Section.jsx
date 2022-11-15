import PropTypes from 'prop-types';
import './section.css';

export const Section = ({ title, children }) => {
  return (
    <section className="sections">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
