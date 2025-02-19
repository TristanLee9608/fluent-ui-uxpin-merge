import * as React from 'react';
import Pivot from '../Pivot';
import PivotPanel from '../../PivotPanel/PivotPanel';
import Text from '../../Text/Text';



const tab1text = "Tab 1 Contents";
const tab2text = "Tab 2 Contents";
const tab3text = "Tab 3 Contents";
const tab4text = "Tab 4 Contents";

const size = "large";



export default (
  <Pivot uxpId="pivot1" >
    <PivotPanel uxpId="pp1">
      <Text uxpId="t1" variant={size}>{tab1text}</Text>
    </PivotPanel>
    <PivotPanel uxpId="pp2">
      <Text uxpId="t2" variant={size}>{tab2text}</Text>
    </PivotPanel>
    <PivotPanel uxpId="pp3">
      <Text uxpId="t3" variant={size}>{tab3text}</Text>
    </PivotPanel>
    <PivotPanel uxpId="pp4">
      <Text uxpId="t4" variant={size}>{tab4text}</Text>
    </PivotPanel>
  </Pivot>
);
