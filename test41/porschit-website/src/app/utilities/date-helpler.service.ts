import { Injectable } from "@angular/core";
// import { Constants } from "./constants.service";
import { DataFetcherService } from "./data-fetcher.service";

@Injectable({
  providedIn: "root",
})
export class DateHelper {
  constructor(private http: DataFetcherService) {}
  static getYMD(dt = new Date()) {
    var mnth = ("0" + (dt.getMonth() + 1)).slice(-2);
    var day = ("0" + dt.getDate()).slice(-2);
    return dt.getFullYear() + "-" + mnth + "-" + day;
  }
  static getDMY(dt = new Date()) {
    var mnth = ("0" + (dt.getMonth() + 1)).slice(-2);
    const day = ("0" + dt.getDate()).slice(-2);
    return day + "/" + mnth + "/" + dt.getFullYear();
  }
  static convertDMYToYMD(dt:any) {
    var dateSplit = dt.split("/");
    if (dateSplit.length > 2) {
      var day = dateSplit[0];
      var mnth = dateSplit[1];
      var year = dateSplit[2];
      return year + "-" + mnth + "-" + day;
    }
    return "";
  }
  static convertYMDToMDY(dt:any) {
    var dateSplit = dt.split("-");
    return dateSplit[1] + "/" + dateSplit[2] + "/" + dateSplit[0];
  }
  static convertYMDToDMY(dt:any) {
    var dateSplit = dt.split("-");
    return dateSplit[2] + "/" + dateSplit[1] + "/" + dateSplit[0];
  }
  static convertDatePickerDate(dataObj:any) {
    if (dataObj.hasOwnProperty("day")) {
      var day = ("0" + dataObj["day"]).slice(-2);
      var mnth = ("0" + dataObj["month"]).slice(-2);
      var year = dataObj["year"];
      return day + "/" + mnth + "/" + year;
    }
    return "";
  }
  static convertDatePickerDateToUnixFormat(dataObj:any) {
    if (dataObj.hasOwnProperty("singleDate")) {
      var dateObj = dataObj["singleDate"]["date"];
      var day = ("0" + dateObj["day"]).slice(-2);
      var mnth = ("0" + dateObj["month"]).slice(-2);
      var year = dateObj["year"];
      return year + "-" + mnth + "-" + day;
    }
    return "";
  }
  static convertDatePickerDateToMDY(dataObj:any) {
    if (dataObj != null && dataObj.hasOwnProperty("singleDate")) {
      var dateObj = dataObj["singleDate"]["date"];
      var day = ("0" + dateObj["day"]).slice(-2);
      var mnth = ("0" + dateObj["month"]).slice(-2);
      var year = dateObj["year"];
      return mnth + "/" + day + "/" + year;
    }
    return "";
  }
  static getDatePickerDateFormat(dateStr = "") {
    if (dateStr.length == 0) {
      dateStr = DateHelper.getDMY();
    }
    var dateSplit = dateStr.split("/");
    return {
      day: parseInt(dateSplit[0]),
      month: parseInt(dateSplit[1]),
      year: parseInt(dateSplit[2]),
    };
  }
  static previousDate() {
    let prev_date = new Date();
    prev_date.setDate(prev_date.getDate() - 1);
    let date = new Date(prev_date);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    return {
      year: date.getFullYear(),
      month: parseInt(month),
      day: parseInt(day),
    };
  }
  static futureDate() {
    let future_date = new Date();
    future_date.setDate(future_date.getDate() + 1);
    let date = new Date(future_date);
    let month = "0" + (date.getMonth() + 1);
    let day = "0" + date.getDate();
    return {
      year: date.getFullYear(),
      month: parseInt(month),
      day: parseInt(day),
    };
  }
  static getMonth(tdate = new Date()) {
    let month = tdate.getMonth() + 1;
    var filter_data:any;
    // var filter_data = Constants.MONTH_NAMES.filter((m) => m["id"] == month);
    if (filter_data.length > 0) {
      var tmpObj = filter_data[0];
      tmpObj["year"] = tdate.getFullYear();
      return filter_data[0];
    }
    return {};
  }
  static getYears() {
    var start_year = 2022;
    var cur_date = new Date();
    var curr_year = cur_date.getFullYear();
    var years: any = [];
    for (var index = start_year; index <= curr_year + 1; index++) {
      years.push(index);
    }
    return years;
  }
  static getDate(day:any, month:any, year:any) {
    return new Date(year, month, 1);
  }
  static getMonthDates(month:any, year:any) {
    month = ("0" + month).slice(-2)
    var firstDate =  new Date(`${year + '-' + month + '-01'}T00:00:00Z`)  
    var lastDate = new Date(year, month, 0);
    let diff =  lastDate.getDate()+1;
    lastDate = new Date(lastDate.setDate(diff))
    return this.getDatesBetweenDates(firstDate,lastDate)
  }
  static getWeekDates(month:any, year:any) {
    month = ("0" + month).slice(-2)
    var firstDate =  new Date(`${year + '-' + month + '-01'}T00:00:00Z`)    
    var lastDate = new Date(year, month, 0);
    return this.getDatesBetweenDates(
      this.startOfWeek(firstDate),
      this.startOfWeek(lastDate, false)
    );
  }
  static startOfWeek(date:any, isStart = true) {
    var diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    if (!isStart) {
      diff = date.getDate() + (7 - (date.getDay() - 1));
      if(date.getDay() == 0){
        diff = date.getDate()+1;
      }
    }
    return new Date(date.setDate(diff));
  }
  static getDatesBetweenDates = (startDate:any, endDate:any, day_nums: any = []) => {
    let dates: any = [];
    //to avoid modifying the original date
    const theDate = new Date(startDate);
    while (theDate <= endDate) {
      var month = theDate.getMonth() + 1;
      let format_month = ("0" + month).slice(-2);
      let formatted_day = ("0" + theDate.getDate()).slice(-2);
      let unix_date =
        theDate.getFullYear() + "-" + format_month + "-" + formatted_day;
      const formatted_date_info = {
        day: theDate.getDay(),
        // dayName:Constants.SINGLELETTERWEEKDAYS[theDate.getDay()],
        // fullDayName:Constants.THREELETTERWEEKDAYS[theDate.getDay()],
        unix_date_format: unix_date,
        display_date_format:DateHelper.convertYMDToDMY(unix_date),
        format_day: formatted_day,
        month: month,
        format_month: format_month,
        year: theDate.getFullYear(),
      };
      if (day_nums.length > 0) {
        if (day_nums.includes(theDate.getDay())) {
          dates = [...dates, formatted_date_info];
        }
      } else {
        dates = [...dates, formatted_date_info];
      }
      theDate.setDate(theDate.getDate() + 1);
    }
    return dates;
  };
  static getTimeFormat(num:any) {
    if (num != undefined) {
      var hours = num / 60;
      var rhours = Math.floor(hours);
      var minutes = (hours - rhours) * 60;
      var rminutes = Math.round(minutes);
      var hrs = rhours.toString();
      if (rhours < 10) hrs = ("0" + rhours).slice(-2);
      var mins = ("0" + rminutes).slice(-2);
      return hrs + ":" + mins;
    }
    return "00:00";
  }
  static getLongDateFormat(date:any) {
    let monthName = this.getShortMonthName(date);
    let dayName = this.getDayName(date);
    let splitDate = date.split("-");
    var formatDate =
      dayName + " " + monthName + " " + splitDate[2] + " " + splitDate[0];
    return formatDate;
  }
  static getDay(date:any) {
    let splitDate = date.split("-");
    return splitDate[2];
  }
  static getDayName(date:any) {
    return new Date(date).toLocaleString("en-us", { weekday: "short" });
  }
  static getShortMonthName(date:any) {
    return new Date(date).toLocaleString("default", { month: "short" });
  }
  static getFullMonthName(date:any) {
    return new Date(date).toLocaleString("default", { month: "long" });
  }
  static getYear(date:any) {
    return new Date(date).toLocaleString("default", { year: "numeric" });
  }
  static getDifferenceInDays(d1:any, d2:any) {
    if (d1 == null || (d1 != null && d1.length == 0)) {
      d1 = this.getYMD();
    }
    if (d2 == null || (d2 != null && d2.length == 0)) {
      d2 = this.getYMD();
    }
    var date1 = new Date(`${d1}T00:00:00Z`);
    var date2 = new Date(`${d2}T00:00:00Z`);
    var diff_in_time = date2.getTime() - date1.getTime();
    var diff_in_days = diff_in_time / (1000 * 3600 * 24);
    return diff_in_days;
  }
  static getFirstDayAndLastDateOfMonth(month:any,year:any){
    var firstDay = new Date(year, month-1, 1);
    var lastDay = new Date(year,month, 0);
    var firstDate = year+"-"+("0" + (firstDay.getMonth() + 1)).slice(-2)+"-"+("0" + firstDay.getDate()).slice(-2);
    var lastDate =  year+"-"+("0" + (lastDay.getMonth() + 1)).slice(-2)+"-"+("0" + lastDay.getDate()).slice(-2);
    return {"start_date":firstDate,"end_date":lastDate}
  }
  static previousDateYMD(dateStr:any) {
    var prev_date = new Date(dateStr);
    prev_date.setDate(prev_date.getDate() - 1);
    var previousDate  = prev_date.getFullYear()+"-"+("0" + (prev_date.getMonth() + 1)).slice(-2)+"-"+("0" + prev_date.getDate()).slice(-2);
    return previousDate;
  }
  static nextDateYMD(dateStr:any) {
    var next_date = new Date(dateStr);
    next_date.setDate(next_date.getDate() + 1);
    var nextDate  = next_date.getFullYear()+"-"+("0" + (next_date.getMonth() + 1)).slice(-2)+"-"+("0" + next_date.getDate()).slice(-2);
    return nextDate;
  }
  static currentMonthAndYear(){
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return {"firstDay":this.getYMD(firstDay),"lastDay":this.getYMD(lastDay)}
  } 
  static previousDateDP(dateStr:any) {
    var prev_date = new Date(dateStr);
    prev_date.setDate(prev_date.getDate() - 1);
    var dateObj = { "day": prev_date.getDate(), "month": prev_date.getMonth() + 1, "year": prev_date.getFullYear() }
    return { "isRange": false, "singleDate": { date: dateObj } };
  }
  static nextDateDP(dateStr:any) {    
    var next_date = new Date(dateStr);
    next_date.setDate(next_date.getDate() + 1);
    var dateObj = { "day": next_date.getDate(), "month": next_date.getMonth() + 1, "year": next_date.getFullYear() }
    return { "isRange": false, "singleDate": { date: dateObj } };
  }
}
