import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscClick);
  }

  handleEscClick = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return (
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}

Modal.protoType = {
  handleEscClick: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
