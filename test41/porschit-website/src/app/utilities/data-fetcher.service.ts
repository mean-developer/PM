import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataFetcherService {
  ngOnInit(){
  }
  constructor(private _http: HttpClient) { }
  doGetRequest(url:any) {    
    return this._http.get<any>(url); 
  } 

  doPostRequest(url:any, body:any) { 
    return this._http.post<any>(url, body, this.getHeaders()); 
  }
  
  doPutRequest(url:any, body:any) { 
    return this._http.put<any>(url, body, this.getHeaders()); 
  } 
  doDeleteRequest(url:any) { 
    return this._http.delete<any>(url, this.getHeaders()); 
  } 
  getHeaders(file_upload = 0) {   
    if(file_upload > 0){
      return { 'headers': new HttpHeaders({'Authorization': 'Basic QXhvbkFkbWluOnFtejMxQ3lAVkk0eCQlZHVjQTJVTk5Oa1huUUM=', 'responseType': 'json'}) };     
    }
      return { 'headers': new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Basic QXhvbkFkbWluOnFtejMxQ3lAVkk0eCQlZHVjQTJVTk5Oa1huUUM=', 'responseType': 'json'}) };
  } 
  doFileUpload(url:any, formData:any) { 
    return this._http.put<any>(url, formData, this.getHeaders(1)); 
  } 

//   navigateToHome() {
//     this.router.navigate(['/layout/home']).then(() => { location.reload() });
// //   }
}
