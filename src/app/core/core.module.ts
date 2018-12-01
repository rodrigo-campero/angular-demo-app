import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AdminGuard } from './guards/admin-guard';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiPrefix } from './interceptors/api-prefix.interceptor';
import { HttpToken } from './interceptors/http-token.interceptor';
import { ErrorsHandler } from './interceptors/errors-handler.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefix,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpToken,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    }
  ],
  declarations: [FooterComponent, HeaderComponent]
})
export class CoreModule { }
