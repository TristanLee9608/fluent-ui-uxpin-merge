import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import StyledInput from './TextField.styles';
import { Position } from '@fluentui/react/lib/utilities/positioning';

const posTop = "top";
const posStart = "start";
const posEnd = "end";

export default class TextField extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    /**
     * @uxpindescription Description label of the SpinButton
     * @uxpinpropname Label
     * @uxpincontroltype textfield(2)
     * */
    labelDisplay: PropTypes.oneOf([posStart, posTop, posEnd]),
    /**
     * @uxpindescription Whether the label appears on the left or on top
     * @uxpinpropname Position
     * */
    width: PropTypes.oneOf(['stretched', 'auto']),
    onChange: PropTypes.func,
    /**
     * @uxpinbind onChange 0.target.value
     */
    value: PropTypes.string,
  };

  static defaultProps = {
    label: 'Basic Text Field',
    labelDisplay: posStart,
    width: 'stretched',
    onChange: () => undefined,
    value: '',
    placeholder: 'Enter some text',
  };

  render() {

    let iconProps = { iconName: this.props.iconName }
    let position = this.props.labelDisplay === posEnd ? Position.end :
        this.props.labelDisplay === posTop ? Position.top :
            Position.start;

    return (
    <StyledInput {...this.props} labelPosition={position} type="text" />
    );
  }
}
