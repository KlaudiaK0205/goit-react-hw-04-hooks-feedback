import PropTypes from 'prop-types';

export const Notifications = ({ message }) => {
    return <p> {message}</p>;
};

Notifications.prototype = {
    message: PropTypes.string.isRequired,
};
