import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideFirebaseApp(() => initializeApp(
      {"projectId":"auth-62a3d","appId":"1:492794017828:web:95ff3624ba9aa5bae200b1",
        "storageBucket":"auth-62a3d.firebasestorage.app","apiKey":"AIzaSyBkC3ubH7H-DD7AF3L0Bv02-H16f_3vdxc",
        "authDomain":"auth-62a3d.firebaseapp.com","messagingSenderId":"492794017828",
        "measurementId":"G-SQ4RDTKMD6"})),
    provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({"projectId":"auth-62a3d","appId":"1:492794017828:web:95ff3624ba9aa5bae200b1","storageBucket":"auth-62a3d.firebasestorage.app","apiKey":"AIzaSyBkC3ubH7H-DD7AF3L0Bv02-H16f_3vdxc","authDomain":"auth-62a3d.firebaseapp.com","messagingSenderId":"492794017828","measurementId":"G-SQ4RDTKMD6"})), provideAuth(() => getAuth())]
};
