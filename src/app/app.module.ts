import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
if (!environment.production) { (self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = false; }

const routes: Routes = [

]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, RouterModule.forRoot(routes, { useHash: true }),

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ScreenTrackingService, UserTrackingService,
  importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
  importProvidersFrom(provideAuth(() => getAuth())),
  importProvidersFrom(provideAnalytics(() => getAnalytics())),
  importProvidersFrom(provideAppCheck(() => {
    const provider = new ReCaptchaEnterpriseProvider('6LeAUMgpAAAAAKOMHep_OdulhJv3y8AFkRND_SEp');
    return initializeAppCheck(undefined, { provider, isTokenAutoRefreshEnabled: true });
  })),
  importProvidersFrom(provideFirestore(() => getFirestore())),
  importProvidersFrom(provideDatabase(() => getDatabase())),
  importProvidersFrom(provideMessaging(() => getMessaging())),
  importProvidersFrom(provideStorage(() => getStorage()))
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
