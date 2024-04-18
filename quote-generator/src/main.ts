import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

bootstrapApplication(AppModule, {
  providers: [provideAnimationsAsync()]
})
  .catch((err) => console.error(err));
