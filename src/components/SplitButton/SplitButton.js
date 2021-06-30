import * as React from 'react';
import * as PropTypes from 'prop-types';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { TooltipHost } from '@fluentui/react/lib/Tooltip';
import { getTokens, csv2arr } from '../_helpers/parser';



const defaultText = 'SplitButton';
const defaultIcon = '';

//Default items list to populate the control with.
//Leave these left aligned as they show up in UXPin exactly as-is. 
const defaultItems = `icon(Document) Add Document
icon(FileCode) Add Code File
icon(Picture) Add Picture`;



class SplitButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.set();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.items !== this.props.items
    ) {
      this.set();
    }
  }

  //Parse the choice items
  set() {

    if (!this.props.items)
      return;

    let items = csv2arr(this.props.items)
      .flat()
      .map((val, index) => ({
        text: getTokens(val).text,
        key: index + 1,  //1 based index
        disabled: false,
        iconProps: this.getIconProps(val),
        onClick: () => { this._onClick(index + 1) } //same as key, 1-based
      }));

    this.setState({
      items: items
    });
  }

  //Get the user-entered left icon name, if there is one
  getLeftIcon(str) {
    const tokens = getTokens(str).tokens
    const leftIcon = tokens && tokens.find(t => t.type === 'icon' && t.position.placement === 'start')
    return leftIcon ? leftIcon.target : null
  }

  //If the user has chosen a tiled options display, let's figure out the icon names.
  getIconProps(str) {
    return {
      iconName: this.getLeftIcon(str)
    }
  }

  //The main Icon Button always passes 0.
  //Any sub-menu buttons pass their 1-based index value.
  _onClick(index) {

    //Raise this event to UXPin. We'll send them the new index value in case they can catch it.
    if (this.props.onButtonClick) {
      this.props.onButtonClick(index);
    }
  }


  render() {

    const targetID = _.uniqueId('target_');
    const tooltipID = _.uniqueId('tooltip_');
    const ttProps = {
      gapSpace: 2,
      target: `#${targetID}`,
    };

    let iconProps = { iconName: this.props.iconName }

    var menuProps = undefined;
    if (this.props.items) {
      menuProps = {
        items: this.state.items,
        directionalHintFixed: true
      };
    }

    return (
      <>
        <TooltipHost
          content={this.props.tooltip}
          id={tooltipID}
          calloutProps={ttProps}
        >
          <DefaultButton
            {...this.props}
            id={targetID}
            iconProps={iconProps}
            aria-describedby={tooltipID}
            split={true}
            primary={this.props.primary}
            iconProps={iconProps}
            menuProps={menuProps}
            //Always send 0 for the main button part
            onClick={() => { this._onClick(0) }}
          />

        </TooltipHost>
      </>
    );
  }

}


/**
 * Set up the properties to be available in the UXPin property inspector.
 */
SplitButton.propTypes = {

  /**
   * @uxpindescription To display the button in the filled style. Otherwise, displays in the outline style
   * @uxpinpropname Primary Style
   * */
  primary: PropTypes.bool,

  /**
  * @uxpindescription The displayed text on the button
  * @uxpinpropname Text
  * */
  text: PropTypes.string,

  /**
   * @uxpindescription The exact name from the Fluent icon library (Optional)
   * @uxpinpropname Icon Name
   * */
  iconName: PropTypes.string,

  /**
   * @uxpindescription An optional list of menu items. Put each option on a separate line.  Add an icon(IconName) at the start of each line.
   * @uxpinpropname Menu Items
   * @uxpincontroltype codeeditor
   * */
  items: PropTypes.string,

  /**
   * @uxpindescription Tooltip for the control
   * @uxpinpropname Tooltip
   * */
  tooltip: PropTypes.string,

  /**
  * @uxpindescription To disable the control
  * @uxpinpropname Disabled
  * */
  disabled: PropTypes.bool,

  /**
 * @uxpindescription Fires when the button is clicked on.
 * @uxpinpropname Click
 * */
  onButtonClick: PropTypes.func,
};


/**
 * Set the default values for this control in the UXPin Editor.
 */
SplitButton.defaultProps = {
  primary: true,
  disabled: false,
  iconName: defaultIcon,
  text: defaultText,
  items: defaultItems,
  tooltip: '',
};


export { SplitButton as default };
