import PropTypes from 'prop-types';

const CloseBtn = ({ handleClickBtn, className, id }) => {
  return (
    <button className={className} onClick={handleClickBtn} id={id}>
      X
    </button>
  );
};

CloseBtn.protoType = {
  onClickBtn: PropTypes.func.isRequired,
};

export default CloseBtn;
