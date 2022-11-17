import PropTypes from 'prop-types';


export const Sections = ({ title, children }) => {
  return (
    <sections>
        <h1 className={title}>{title}</h1>
    {children}
    </sections>
  )
}

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};