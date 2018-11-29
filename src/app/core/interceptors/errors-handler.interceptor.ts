import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ErrorsHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {
    const router = this.injector.get(Router);
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        console.log('No Internet Connection');
        return 'No Internet Connection';
      } else {
        if (error.status === 401) {
          // this.authenticationService.logout();
          location.reload(true);
        }
        console.log(`${error.status} - ${error.message}`);
        return `${error.status} - ${error.message}`;
      }
    } else {
      console.log(JSON.stringify(error));
      router.navigate(['/error'], { queryParams: { error: error } });
    }
    console.error('It happens: ', error);
  }
}
