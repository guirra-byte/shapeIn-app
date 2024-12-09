import { bootstrapApplication } from '@angular/platform-browser';
import { CheckInTable } from './app/checkin-table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(CheckInTable, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));
