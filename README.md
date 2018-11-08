# lightning:map + Lightning Data Service = SUPER GENERIC MAPS

Winter '19 release introduced tons of new features and cool new functionality. As in any other release, new components are delivered to extend the Salesforce Platform capabilities. But there is a new component that comes to rock it. The [lightning:map](https://developer.salesforce.com/docs/component-library/bundle/lightning:map/example) component for displaying Google maps, right there in Salesforce out of the box.

For the ones that had to fight (I did), to obtain a similar result before this component exist, will understand how useful this will be. The approach for including a map from Google in Salesforce was always a Frankenstein. From an iframe as a Visualforce page, since the javascript library from Google did not work within a Lightning Component, to more creative solutions.

Now it is drastically easier. The lightning:map component supports natively, both geo coordinates and and physical addresses, as Map Markers; following the standards of the Google maps API.

![MapGIF](https://rahamber.sirv.com/GoogleMapComponent.gif)
