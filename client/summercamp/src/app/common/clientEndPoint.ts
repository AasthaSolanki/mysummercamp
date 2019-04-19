import { environment } from "../../environments/environment";
import {CommonUtils} from "./commonUtils";
export const ENROLL = 'ENROLL';
export const COURSE = 'COURSE';
export const ClientEndPoint = (type: string, params: any, urlParams?: any) => {
  const endpoints = {
    [ENROLL]: '/enrolls/$id$',
    [COURSE]:'course'
  };
  return environment.API_ROOT + CommonUtils.replaceArgs(endpoints[type], params);
};
