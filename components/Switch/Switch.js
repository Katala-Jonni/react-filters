import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import './Switch.scss';

export default class Switch extends Component {
  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.value !== this.props.value;
  }

  handleClick () {
    this.props.onChange({
      name : this.props.name,
      value: !this.props.value
    });
  }

  render () {
    const { name, label, labelPosition, value, disabled } = this.props;

    const mainClass = classNames('rf', 'rf-switch', name, {
      'rf-disabled': disabled
    });

    const labelClass = classNames('rf-switch-label', {
      before: labelPosition === 'before',
      after : labelPosition === 'after'
    });

    const btnClass = classNames('rf-switch-btn', {
      on : value,
      off: !value
    });

    return (
      <div onClick={!disabled && this.handleClick} className={mainClass}>
        <div className={labelClass}>{label}</div>
        <div className='rf-switch-wrapper'>
          <div className={btnClass}></div>
        </div>
      </div>
    );
  }
}

Switch.propTypes = {
  disabled     : PropTypes.bool,
  label        : PropTypes.string,
  labelPosition: PropTypes.string,
  name         : PropTypes.string.isRequired,
  onChange     : PropTypes.func,
  value        : PropTypes.bool
};

function noop () {
}

Switch.defaultProps = {
  value        : false,
  onChange     : noop,
  labelPosition: 'before',
  disabled     : false
};
