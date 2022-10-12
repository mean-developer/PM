import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  // @ViewChild('attachments') attachment: any;

  titleboolean: boolean = true
  choose_a_suggest_category: boolean = false
  criteria: boolean = false;
  describeyourp: boolean = false;
  upload_pictures: boolean = false;
  maps: boolean = false;
  contact_details: boolean = false;
  title: any 
  propertyTitle:any;
  cars: any = ""
  showsbutton: any = true
  Model: any = [{ id: 1, name: 'model1' }, { id: 2, name: 'model2' }, { id: 3, name: 'model3' }];
  Modelvalue: any = 0;
  SubModel: any = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];
  SubModelvalue: any = 0;
  year: any;
  Room: any = [{ id: 1, name: '2018' }, { id: 2, name: '2019' }, { id: 3, name: '2020' }];
  state: any;
  Numberofowners: any
  Fuel: any;
  Gearbox: any;
  Vehiclecondition: any = 0;
  Vehicleconditioninput: any = [{ id: 1, name: 'New' }, { id: 2, name: 'Demo Vichele' }, { id: 3, name: 'Opportunity' }]
  colors: any = [{ id: 1, name: 'red' }, { id: 2, name: 'yellow' }, { id: 3, name: 'green' }];
  color: any = 0;
  WarrantyApproved: any;
  Servicebook: any;
  Numberofmonths: any = ["00", "01", "02", "03"];
  Maintenanceinvoice: any;
  DamagedRequired: any;
  Originalpaint: any;
  Matchingnumber: any;
  Matching_color_paint: any;
  Interior_color_matching: any;
  Prices_for_pros: any;
  Deductible_VAT: any;
  Displacement: any;
  Paint_Thickness: any;
  ptGate: any; //paint thinkness Gate
  ptWings: any;
  ptHood: any;
  ptRoof: any;
  rbGate: any; //rb means repainted bodywork Gate
  rbWings: any;
  rbHood: any;
  rbRoof: any;
  Total_engine_operating_hours_counter: any;
  uploadFile: any;
  firstName: any;
  lastName: any;
  email: any;
  telephone: any;
  Description: any;
  Date1: any;
  Date2: any;
  Date3: any;
  Date4: any;
  Date5: any;
  Date6: any;
  mileage_of_interviews1: any;
  mileage_of_interviews2: any;
  mileage_of_interviews3: any;
  mileage_of_interviews4: any;
  mileage_of_interviews5: any;
  mileage_of_interviews6: any;
  checkBox: any = []
  air_conditioning: any = "";
  Rim: any = "";
  Leather: any = "";
  tmpObj: object = {};
  Urls: any = [];
  idfiles: any = ""

  constructor() { }

  ngOnInit(): void {

  }

//------------------------Multiple Files-----------
@ViewChild('attachments') attachment:any;

fileList: File[] = [];
listOfFiles: any[] = [];

onFileChanged(event: any) {
    for (var i = 0; i <= event.target.files.length - 1; i++) {
      var selectedFile = event.target.files[i];
      this.fileList.push(selectedFile);
      this.listOfFiles.push(selectedFile.name)
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[i]);
  }

  this.attachment.nativeElement.value = '';
}



removeSelectedFile(index:any) {
 // Delete the item from fileNames list
 this.listOfFiles.splice(index, 1);
 // delete file from FileList
 this.fileList.splice(index, 1);
}


//------------------------Multiple Files-----------















  titleanyModified(v:any) {
    this.propertyTitle = v;
  }

 
  titlef() {
    this.choose_a_suggest_category = true;

  }
  choose_a_suggest_categoryf() {
    this.title = false;
    this.choose_a_suggest_category = false;
    this.criteria = true;

    this.tmpObj = {
      select: this.cars
    }
    console.log(this.tmpObj)

  }
  criteriasf() {
    if (this.air_conditioning == true) {
      this.checkBox.push("air_conditioning")
    }
    if (this.Leather == true) {
      this.checkBox.push("Leather")
    }
    if (this.Rim == true) {
      this.checkBox.push("Rim")
    }
    this.title = false;
    this.choose_a_suggest_category = false;
    this.criteria = false;
    this.describeyourp = true;

    this.tmpObj = {
      checkbox: this.checkBox,
      Modelvalue: this.Modelvalue,
      SubModelvalue: this.SubModelvalue,
      year: this.year,
      // state: this.state,
      Numberofowners: this.Numberofowners,
      Fuel: this.Fuel,
      Gearbox: this.Gearbox,
      Vehiclecondition: this.Vehiclecondition,
      color: this.color,
      WarrantyApproved: this.WarrantyApproved,
      Servicebook: this.Servicebook,
      Maintenanceinvoice: this.Maintenanceinvoice,
      DamagedRequired: this.DamagedRequired,
      Originalpaint: this.Originalpaint,
      Matchingnumber: this.Matchingnumber,
      Matching_color_paint: this.Matching_color_paint,
      Interior_color_matching: this.Interior_color_matching,
      Prices_for_pros: this.Prices_for_pros,
      Deductible_VAT: this.Deductible_VAT,
      Displacement: this.Displacement,
      Paint_Thickness: this.Paint_Thickness,
      ptGate: this.ptGate,
      ptWings: this.ptWings,
      ptHood: this.ptHood,
      ptRoof: this.ptRoof,
      rbGate: this.rbGate,
      rbWings: this.rbWings,
      rbHood: this.rbHood,
      rbRoof: this.rbRoof,
      Total_engine_operating_hours_counter: this.Total_engine_operating_hours_counter,
      Date1: this.Date1,
      Date2: this.Date2,
      Date3: this.Date3,
      Date4: this.Date4,
      Date5: this.Date5,
      Date6: this.Date6,
      mileage_of_interviews1: this.mileage_of_interviews1,
      mileage_of_interviews2: this.mileage_of_interviews2,
      mileage_of_interviews3: this.mileage_of_interviews3,
      mileage_of_interviews4: this.mileage_of_interviews4,
      mileage_of_interviews5: this.mileage_of_interviews5,
      mileage_of_interviews6: this.mileage_of_interviews6,
    }
    console.log("criteriasf", this.tmpObj)


  }
  describePropertyf() {
    this.title = false;
    this.choose_a_suggest_category = false;
    this.criteria = false;
    this.describeyourp = false;
    this.upload_pictures = true;
    this.tmpObj = {
      Description: this.Description
    }
  }
  uploadf() {

    this.title = false;
    this.choose_a_suggest_category = false;
    this.criteria = false;
    this.describeyourp = false;
    this.upload_pictures = false;
    this.maps = true;
    this.tmpObj = {
      // images: this.imageurls,
    }
  }
  mapf() {
    this.title = false;
    this.choose_a_suggest_category = false;
    this.criteria = false;
    this.describeyourp = false;
    this.upload_pictures = false;
    this.maps = false;
    this.contact_details = true;

  }
  yourpropf() {
    alert("art")
    this.tmpObj = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      telephone: this.telephone,
    }
    console.log("tmpobj", this.tmpObj)
  }
  return(flag: any) {
    if (flag == 1) {
      this.title = true
      this.choose_a_suggest_category = true
    }
    if (flag == 2) {
      this.title = true
      this.choose_a_suggest_category = true
      this.criteria = true
    }
    if (flag == 3) {
      this.title = true
      this.choose_a_suggest_category = true
      this.criteria = true
      this.describeyourp = true;
    }
    if (flag == 4) {
      this.title = true
      this.choose_a_suggest_category = true
      this.criteria = true
      this.describeyourp = true;
      this.upload_pictures = true;
    }
    if (flag == 5) {
      this.title = true
      this.choose_a_suggest_category = true
      this.criteria = true
      this.describeyourp = true;
      this.upload_pictures = true;
      this.maps = true;
    }
  }

   // checkbox() {
  //   if (this.air_conditioning.length > 0) {
  //     this.checkBox.push(this.air_conditioning)
  //   }
  //   if (this.Rim.length > 0) {
  //     this.checkBox.push(this.Rim)
  //   }
  //   if (this.Leather.length > 0) {
  //     this.checkBox.push(this.Leather)
  //   }
  // }



//   //--------------------------------------MF 2--------------
// imageDeleteFrom: any = FormGroup;
// imageurls: any = [];
// base64String: any;
// name: any;
// imagePath: any;

// removeImageEdit(i: any, imagepath: any) {
//   this.imageDeleteFrom.value.id = i;
//   this.imageDeleteFrom.value.ImagePath = imagepath;

// }

// removeImage(i: any) {
//   this.imageurls.splice(i, 1);

// }
// onSelectFile(event: any) {
//   if (event.target.files && event.target.files[0]) {
//     var filesAmount = event.target.files.length;
//     for (let i = 0; i < filesAmount; i++) {
//       var reader = new FileReader();
//       reader.onload = (events: any) => {
//         this.imageurls.push({ base64String: events.target.result, });

//       }
//       reader.readAsDataURL(event.target.files[i]);
//       this.idfiles = ""
//     }
//   }
//   // this.idfiles = ""
// }



// <!-- <div class="col-12 col-sm-12 col-md-12 col-lg-12 mb-4 mb-md-0 p-0">
// <div class="upload__box"> &nbsp; &nbsp; Upload pictures
//    <div class="upload__btn-box">
//       <div class="col-md-2 productAddfromImages" *ngFor='let url of imageurls; let i = index'>
//          <img class="img-fluid" [src]="url.base64String">
//          <a (click)="removeImage(i)" class="btn btn-xs btn-danger">Remove</a>
//       </div>
//       <div>
//          <br>
//          <label>Add Images</label>
//          <input type="file" [(ngModel)]="idfiles" (change)="onSelectFile($event)" multiple
//             accept="image/*" />
//       </div>
//    </div>
// </div>
// </div> -->
// //--------------------------------------MF 2--------------
}
