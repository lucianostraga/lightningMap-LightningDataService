({
	setMapCoordinates : function(component) {
		var latitudeField = "v.simpleRecord."+component.get("v.latitudeField");
        var longitudeField = "v.simpleRecord."+component.get("v.longitudeField");
        
        var latitude = component.get(latitudeField);
        var longitude = component.get(longitudeField);
        
        if(latitude == null || longitude == null){
            component.set('v.mapReady', false);
        }else{
            
            component.set('v.mapMarkers', [
                {
                    location: {
                        Latitude : latitude,
                        Longitude : longitude 
                    },
                    
                    title: component.get("v.simpleRecord.Name")
                }
            ]);
            
            component.set('v.mapReady', true);
        }
	},    
})