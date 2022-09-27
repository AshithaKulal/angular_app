import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { ItemComponent } from './item/item.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DressComponent } from './dress/dress.component';
import { DressdetailsComponent } from './dress/dressdetails/dressdetails.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { CardComponent } from './card/card.component';
import { MobileComponent } from './mobile/mobile.component';
import { MobiledisplayComponent } from './mobile/mobiledisplay/mobiledisplay.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { ContactComponent } from './contact/contact.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { DisplayfeedbackComponent } from './displayfeedback/displayfeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    FeedbackComponent,
    ItemComponent,
    WishlistComponent,
    DressComponent,
    DressdetailsComponent,
    AdvertisementComponent,
    CardComponent,
    MobileComponent,
    MobiledisplayComponent,
    CounterComponent,
    CounterchildComponent,
    AppliancesComponent,
    ContactComponent,
    SuggestionComponent,
    RegistrationComponent,
    ModifyProductComponent,
    LoginComponent,
    CartItemsComponent,
    DisplayfeedbackComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
