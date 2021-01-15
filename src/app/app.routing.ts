import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";
import { UploadImageComponent } from "./components/upload-image/upload-image.component";
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'upload', component: UploadImageComponent },
    { path: '**', component: NavigationBarComponent },

];
export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(routes);
