({
	init: function (component, event, helper) {
        component.set('v.mapMarkers', [{location: {},}]);
        component.set('v.zoomLevel', 16);
    },
    
    handleRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "LOADED") {
            
            try{
                helper.setMapCoordinates(component);
            }
            
            catch(err) {}
            
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading, saving, or deleting the record
        }
    }
})