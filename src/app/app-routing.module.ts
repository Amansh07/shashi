import { Component, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PcitureGalleryComponent } from './pciture-gallery/pciture-gallery.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UploadImageComponent } from './upload-image/upload-image.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'product', component:ProductDetailsComponent,
  children:[
    {
      path:'details', component:ProductDetailsComponent,
    }
  ]
  },
  {path:'picture',component:PcitureGalleryComponent},
  // {path:'about',component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'upload', component:UploadImageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
