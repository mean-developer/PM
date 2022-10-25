import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { Observable } from 'rxjs';
declare var $: any;
declare var bootstrap: any;
@Component({
  selector: 'app-add-post-professionnels',
  templateUrl: './add-post-professionnels.component.html',
  styleUrls: ['./add-post-professionnels.component.css']
})
export class AddPostProfessionnelsComponent implements OnInit {
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  lat = 9.538582214731647;
    lng = 8.000075274759917;
  previews: Array<any> = []
  imageInfos?: Observable<any>;

  latitude!: number;
  longitude!: number;
  zoom!: number;
  address!: string;
  private geoCoder: any;
  
  @ViewChild('search')
  public searchElementRef!: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    $('.btnNext').click(function() {
      const nextTabLinkEl = $('.nav-tabs .active').closest('li').next('li').find('a')[0];
      const nextTab = new bootstrap.Tab(nextTabLinkEl);
      nextTab.show();
    });
    
    $('.btnPrevious').click(function() {
      const prevTabLinkEl = $('.nav-tabs .active').closest('li').prev('li').find('a')[0];
      const prevTab = new bootstrap.Tab(prevTabLinkEl);
      prevTab.show();
    });

    $('.next').click( function(){
      $('.active').next().addClass('active').prev().removeClass('active')
    })
    $('.prev').click( function(){
      $('.active').prev().addClass('active').next().removeClass('active')
    })


    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;
  
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      console.log(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude: any, longitude: any) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: any, status: any) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
  
    });
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  
    this.previews = [];
    if (this.selectedFiles && this.selectedFiles[0]) {
      const numberOfFiles = this.selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();
  
        reader.onload = (e: any) => {
          // this.previews.push(e.target.result);
          this.previews.push({"image": e.target.result })
          console.log(this.previews);
        };
  
        reader.readAsDataURL(this.selectedFiles[i]);
      }
    }
  }
  
  removeImage(i: any) {
    this.previews.splice(i, 1);
  }

}
