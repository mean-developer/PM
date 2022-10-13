import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title: boolean = true
  titleany: any = ""
  choose_a_suggest_category: boolean = false
  cars: any = ""
  criteria: boolean = false;
  Model: any = [{ id: 1, name: 'model1' }, { id: 2, name: 'model2' }, { id: 3, name: 'model3' }];
  SubModel: any = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];
  Modelvalue: any = 0;
  SubModelvalue: any = 0;
  year: any;
  room: any;
  Room: any = [{ id: 1, name: '2018' }, { id: 2, name: '2019' }, { id: 3, name: '2020' }];
  Fuel: any;
  Gearbox: any;
  Vehicleconditioninput: any = [{ id: 1, name: 'New' }, { id: 2, name: 'Demo Vichele' }, { id: 3, name: 'Opportunity' }]
  Vehiclecondition: any = 0;
  colors: any = [{ id: 1, name: 'red' }, { id: 2, name: 'yellow' }, { id: 3, name: 'green' }];
  color: any = 0;
  Numberofmonths: any = ["00", "01", "02", "03"];
  numbrofmonth: any = 0
  Maintenanceinvoice: any;
  DamagedRequired: any;
  Originalpaint: any;
  Matchingnumber: any;
  Matching_color_paint: any;
  Interior_color_matching: any;
  Prices_for_pros: any;
  Deductible_VAT: any;
  Numberofowners: any
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
  describeyourp: boolean = false;
  upload_pictures: boolean = false;
  maps: boolean = false;
  contact_details: boolean = false;
  showsbutton: any = true
  state: any;
  WarrantyApproved: any;
  Servicebook: any;
  uploadFile: any;
  firstName: any;
  lastName: any;
  email: any;
  telephone: any;
  Description: any;
  dptitle: any = this.titleany;
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
  titleobj: any = {}
  carcategoryObj: any = {}
  criteriaObj: any = {}
  displaytitleObj: any = {}
  imagobj: any = {}
  contactObj: any = {}
  constructor() { }

  ngOnInit(): void {

  }

  imageDeleteFrom: any = FormGroup;
  imageurls: any = [];
  base64String: any;
  name: any;
  imagePath: any;


  continuebutt(i: any) {
    if (i == 1) {
      this.choose_a_suggest_category = true;
      this.titleobj = { title: this.titleany }
    }
    if (i == 2) {
      this.title = false;
      this.choose_a_suggest_category = false;
      this.criteria = true;
      this.carcategoryObj = { select: this.cars }
    }
    if (i == 3) {
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
      this.criteriaObj = {
        checkbox: this.checkBox,
        Modelvalue: this.Modelvalue,
        SubModelvalue: this.SubModelvalue,
        year: this.year,
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
    }
    if (i == 4) {
      this.title = false;
      this.choose_a_suggest_category = false;
      this.criteria = false;
      this.describeyourp = false;
      this.upload_pictures = true;
      this.displaytitleObj = {
        dptitle: this.titleany,
        Description: this.Description
      }
    }
    if (i == 5) {
      this.title = false;
      this.choose_a_suggest_category = false;
      this.criteria = false;
      this.describeyourp = false;
      this.upload_pictures = false;
      this.maps = true;
      this.imagobj = {
        images: this.imageurls,
      }
    }
    if (i == 6) {
      this.title = false;
      this.choose_a_suggest_category = false;
      this.criteria = false;
      this.describeyourp = false;
      this.upload_pictures = false;
      this.maps = false;
      this.contact_details = true;

    }
    if (i == 7) {
      this.contactObj = {
        firstname: this.firstName,
        lastname: this.lastName,
        email: this.email,
        telephone: this.telephone,
      }
      this.tmpObj = { ...this.titleobj, ...this.carcategoryObj, ...this.criteriaObj, ...this.displaytitleObj, ...this.imagobj, ...this.contactObj }
      console.log(this.tmpObj)
    }
  }


  removeImageEdit(i: any, imagepath: any) {
    this.imageDeleteFrom.value.id = i;
    this.imageDeleteFrom.value.ImagePath = imagepath;

  }

  removeImage(i: any) {
    this.imageurls.splice(i, 1);

  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (events: any) => {
          this.imageurls.push({ base64String: events.target.result, });

        }
        reader.readAsDataURL(event.target.files[i]);
        this.idfiles = ""
      }
    }

  }
  return(flag: any) {
    if (flag == 1) {
      this.title = true
      this.choose_a_suggest_category = true
      this.criteria = false
      this.describeyourp = false;
      this.upload_pictures = false;
      this.maps = false;
      this.contact_details = false;
    }
    if (flag == 2) {
      this.title = false
      this.choose_a_suggest_category = false
      this.criteria = true
      this.describeyourp = false;
      this.upload_pictures = false;
      this.maps = false;
      this.contact_details = false;
    }
    if (flag == 3) {
      this.title = false
      this.choose_a_suggest_category = false
      this.criteria = false
      this.describeyourp = true;
      this.upload_pictures = false;
      this.maps = false;
      this.contact_details = false;
    }
    if (flag == 4) {
      this.title = false
      this.choose_a_suggest_category = false
      this.criteria = false
      this.describeyourp = false;
      this.upload_pictures = true;
      this.describeyourp = false;
      this.maps = false;
      this.contact_details = false;
    }
    if (flag == 5) {
      this.title = false
      this.choose_a_suggest_category = false
      this.criteria = false
      this.describeyourp = false;
      this.upload_pictures = false;
      this.maps = true;
      this.contact_details = false;
    }
  }

}
