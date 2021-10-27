import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import StyledInput from './TextField.styles';

export default class TextField extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    width: PropTypes.oneOf(['stretched', 'auto']),
    onChange: PropTypes.func,
    /**
     * @uxpinbind onChange 0.target.value
     */
    value: PropTypes.string,
  };

  static defaultProps = {
    label: 'Basic Text Field',
    width: 'stretched',
    onChange: () => undefined,
    value: '',
    placeholder: 'Enter some text',
  };

  render() {
    var label = this.props.label
    return (
    <TextField label={label}>
    <StyledInput {...this.props} type="text" />
    </TextField>);
  }
}
