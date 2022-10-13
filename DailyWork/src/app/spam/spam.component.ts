import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.css']
})
export class SpamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  readyForSubmit:any

  onKeydown($event: KeyboardEvent, searchLocation:any) {
    if ($event.key === 'Enter') {
      this.readyForSubmit = true;
    }
    if (searchLocation) {
      this.zoomToSearch();
    }
  }


  private zoomToSearch() {
    const displaySuggestions = function (
      predictions: google.maps.places.QueryAutocompletePrediction[],
      status: google.maps.places.PlacesServiceStatus
    ) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        alert(status);
        return;
      }

      const completeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?place_id=' + predictions[0].place_id + '&key=API-KEY-HERE';
      axios.get(completeUrl)
        .then(response => {
          // get the first item from the results
          searchPrediction = response.data.results[0].geometry.location;
        })
        .catch(error => {
          console.log(error);
        });
    };
    const service = new google.maps.places.AutocompleteService();
    // get the input value 
    service.getQueryPredictions({ input: this.searchLocation }, displaySuggestions);
    service.getQueryPredictions({ input: this.searchLocation }, displaySuggestions);
    this.location = searchPrediction;
  
  }

}
