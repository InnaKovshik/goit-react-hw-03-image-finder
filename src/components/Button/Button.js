import PropTypes from 'prop-types';

const Button = ({ onClickBtn }) => {
  return (
    <button className="Button" onClick={onClickBtn}>
      Load more...
    </button>
  );
};

Button.protoType = {
  onClickBtn: PropTypes.func.isRequired,
};

export default Button;
