import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from "./../../environments/environment";
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

// export class ApiService {

//     token:any;user_id:any;
//     public endpoint = environment.url
//     public httpOptions = {
//         headers: new HttpHeaders({
//             // "Content-Type" : "application/x-www-form-urlencoded",
//             // "Content-Type": "application/json"
//         }),
//     };
//     constructor(private http: HttpClient,private cookie:CookieService) { }
//     private extractData(res: Response) {
//         let body = res;
//         return body || {};
//     }

//     get(url: string): Promise<any> {
//         return this.http.get(this.endpoint + url, this.getHeaders()).toPromise()
//     }
//     post(url: string, body: any): Promise<any> {
//         //console.log("headers "+JSON.stringify(this.getHeaders()));
//         return this.http.post<any>(this.endpoint + url, body, this.getHeaders()).pipe(
//             map(this.extractData),
//             catchError(this.handleError)
//         ).toPromise()
//     }
//     put(url: string, body: any): Observable<any> {
//         return this.http.put(this.endpoint + url, body, this.getHeaders()).pipe(
//             );
//     }
//     handleError(error: { error: { message: any; }; status: any; message: any; }) {
//         console.log(error)
//         let errorMessage = '';
//         if (error.error instanceof ErrorEvent) {
//             // client-side error
//             errorMessage = `Error: ${error.error.message}`;
//         } else {
//             // server-side error
//             errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
//         }
//         return throwError(error.error);
//     }
//     delete(url: string): Observable<any> {
//         return this.http.delete<any>(this.endpoint + url, this.getHeaders()).pipe(
//             map(this.extractData));
//     }

//     getHeaders() {
//         //console.log("hhherrrrr");
//         if(localStorage.getItem("token") && localStorage.getItem("_id"))
//         {
//             //console.log("hhherrrrr");
//             this.token = localStorage.getItem("token");
//             this.user_id = localStorage.getItem("_id");
//             //console.log(this.token);
//             this.httpOptions = {
//                 headers: new HttpHeaders({
//                     'x-access-token': this.token,
//                     "user-id":this.user_id
//                 })
//             };
//         }
//         return this.httpOptions
//     }
// }
export class ApiService {
    public endpoint = environment.url
    constructor(private _http: HttpClient) { }
    get(url: string) {
        return this._http.get<any>(this.endpoint + url);
    }

    post(url: string, body: any) {
        return this._http.post<any>(this.endpoint + url, body, this.getHeaders());
    }

    put(url: string, body: any) {
        return this._http.put<any>(this.endpoint + url, body, this.getHeaders());
    }
    delete(url: string) {
        return this._http.delete<any>(this.endpoint + url, this.getHeaders());
    }
    getHeaders() {
        return { 'headers': new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'json' }) };
    }

}
