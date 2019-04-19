import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

declare let require: any;
@Injectable()


export class CommonUtils {
  public openModal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public errorsList=[];
  public rowWiseError=new Map();
//to return string with particular id
  static replaceArgs = (url, params) => {
    const keys = [], delimiter = '$';
    (url.substring(url.indexOf(delimiter) + 1,
      url.lastIndexOf(delimiter))).split(delimiter).forEach((eachValue, index) => {
      if (index % 2 === 0) {
        keys.push(eachValue);
      }});
    let value;
    for (const property of keys) {
      if ( params.hasOwnProperty(property)) {
        value = CommonUtils.findObjectValue(params, property);
      } else {
        value = '';
      }
      url = url.replace(delimiter + property + delimiter, value);
    }
    return url;
  }
//method to return value object
  static findObjectValue(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); /* convert indexes to properties*/
    s = s.replace(/^\./, '');           /* strip a leading dot */
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
      const k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return;
      }
    }
    return o;
  }
}
