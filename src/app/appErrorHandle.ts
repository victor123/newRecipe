import { ErrorHandler, Injectable, } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class AppErrorHandle implements ErrorHandler {
    handleError(errorResponse:HttpErrorResponse) {
        if(errorResponse instanceof ErrorEvent){
            console.error("CLIENT SIDE ERROR", errorResponse.error.message)
             // Server or connection error happened
            if(!navigator.onLine) {
            // Handle offline error
           // return notificationService.notify('No Internet Connection');
           alert('No Internet Connection')
            } else {
                // Handle Http Error (error.status === 403, 404...)
              //  return notificationService.notify(`${error.status} - ${error.message}`);
            }
        }
        alert ('An unexpected error occurred.');
        console.error(errorResponse);
         
    }


}