import { FormsModule } from '@angular/forms';
import { PictureService } from './gallery/picture.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { WhyUsCardsComponent } from './why-us-cards/why-us-cards.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ServicesComponent,
    GalleryComponent,
    ContactUsComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    ContactFormComponent,
    CarouselComponent,
    WhyUsCardsComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
