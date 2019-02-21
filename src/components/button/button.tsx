import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.less';
export const tuple = <T extends string[]>(...args: T) => args;
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'danger');
export type ButtonType = (typeof ButtonTypes)[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];
export interface BaseButtonProps {
  type?: ButtonType;
  size?: string;
  loading?: string;
  className?: string;
  circle?: boolean;
}

/**
 * TODO：此处不明白为什么要继承锚点的属性props
 * 摘自 antd --> 解决属性默认的undefined
 */
export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

class Button extends Component<ButtonProps> {
  static defaultProps = {};

  static propTypes = {
    type: PropTypes.string
  };

  render() {
    const { className, type, size = 'default', circle } = this.props;
    const classes: any = classNames('btn', className, {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
      [`btn-circle`]: circle
    });
    return (
      <Fragment>
        <button className={classes}>
          <span>{!circle && this.props.children}</span>
        </button>
      </Fragment>
    );
  }
}

export default Button;
