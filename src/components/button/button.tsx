import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import './button.less';
interface ButtonProps {
  type?: string;
  size?: string;
  loading?: string;
  className?: string;
}
class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { className, type, size = 'default' } = this.props;
    const classes: any = classNames('btn', className, {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size
    });
    return (
      <Fragment>
        <button className={classes}>
          <span>{this.props.children || 'button'}</span>
        </button>
      </Fragment>
    );
  }
}

export default Button;
