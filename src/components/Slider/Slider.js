import * as React from "react";
import * as PropTypes from "prop-types";
import { Slider as FSlider } from '@fluentui/react/lib/Slider';



class Slider extends React.Component {
  constructor(props) {
    super(props);

    //Set the default value
    this.set();
  }

  set() {
    //Track the slider value state within the control
    this.setState({
      _sliderValue: this.props.value
    })
  }

  componentDidMount() {
    this.set();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.value !== this.props.value
    ) {
      this.set();
    }
  }

  _onValueChange(newValue) {
    //The newValue object here is the new slider value already as a number.

    //We MUST  set the state with the updated slider value. This will force the control to update in UXPin at runtime.
    this.setState({ _sliderValue: newValue });

    //Raise this event to UXPin. We'll send them the value in case they can catch it.
    if (this.props.onChange) {
      this.props.onChange(newValue.toString());
    }
  }

  // //TODO: Figure out how to handle sizing, especially vertical.
  // getSliderClasses() {
  //   return mergeStyles({
  //     height: this.props.vertical ? this.props.verticalHeight : 'auto',
  //     marginBottom: 4,
  //   });
  // }

  render() {
    //Get the updated slider value from
    const sliderValue = this.state._sliderValue;

    return (
      <FSlider
        // className={this.getSliderClasses()}
        {...this.props}
        value={sliderValue}
        onChange={(v) => {
          this._onValueChange(v);
        }}
      />
    );
  }
}

/**
 * Set up the properties to be available in the UXPin property inspector.
 */
Slider.propTypes = {

  /**
   * @uxpindescription The value of the Slider. This prop's live value is available for scripting.
   * @uxpinbind onChange
   * @uxpinpropname * Value
   * */
  value: PropTypes.number,

  /**
   * @uxpindescription Description label of the Slider
   * @uxpinpropname Label
   * @uxpincontroltype textfield(3)
   * */
  label: PropTypes.string,

  /**
   * @uxpindescription The minimum value of the Slider
   * @uxpinpropname Min
   * */
  min: PropTypes.number,

  /**
   * @uxpindescription The max value of the Slider
   * @uxpinpropname Max
   * */
  max: PropTypes.number,

  /**
   * @uxpindescription The difference between the two adjacent values of the Slider
   * @uxpinpropname Step
   * */
  step: PropTypes.number,

  // /**
  //  * @uxpindescription Optional flag to render the slider vertically. Defaults to rendering horizontal
  //  * @uxpinpropname Vertical
  //  * */
  // vertical: PropTypes.bool,

  // /**
  //  * @uxpindescription Height for the vertical slider, including the label
  //  * @uxpinpropname Vertical Height
  //  * */
  // verticalHeight: PropTypes.number,

  /**
   * @uxpindescription Optional flag whether to display the current Slider value
   * @uxpinpropname Show Value
   * */
  showValue: PropTypes.bool,

  /**
   * @uxpindescription Fires when the control's Value property changes.
   * @uxpinpropname * Value Changed
   * */
  onChange: PropTypes.func,
};


/**
 * Set the default values for this control in the UXPin Editor.
 */
Slider.defaultProps = {
  label: "Slider",
  min: 0,
  max: 10,
  step: 1,
  value: 2,
  showValue: true,
  // vertical: false,
  // verticalHeight: 300
};


export { Slider as default };
