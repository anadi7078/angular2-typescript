import { bootstrap }  from '@angular/platform-browser-dynamic';
import { AppComponent } from './modules/core/app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { Title } from '@angular/platform-browser';
bootstrap(AppComponent, [HTTP_PROVIDERS, Title ]).then(
    () => window.console.info( 'Angular finished bootstrapping your application!' ),
    (error) => {
      console.warn( 'Angular was not able to bootstrap your application.' );
      console.error( error );
    }
  );;
