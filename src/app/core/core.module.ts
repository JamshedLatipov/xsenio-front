import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LocalStorageService } from './services/localstorage.service';
import { AuthService } from './services/auth.service';
import { ApplicationService } from './services/application.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterIncrementDialogComponent } from './dialogs/counter-increment-dialog/counter-increment-dialog.component';

@NgModule({
  declarations: [CounterIncrementDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only!',
      );
    }
  }

  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        LocalStorageService,
        AuthService,
        ApplicationService,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: AuthInterceptor,
        },
      ],
    };
  }
}
