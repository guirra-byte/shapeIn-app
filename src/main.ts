import { bootstrapApplication } from '@angular/platform-browser';
import { TableResponsiveStackDemo } from './app/table-responsive-stack-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(TableResponsiveStackDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));