import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { DressComponent } from './dress/dress.component';
import { MobileComponent } from './mobile/mobile.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { RegistrationComponent } from './registration/registration.component';
import { ModifyProductComponent } from './modify-product/modify-product.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DisplayfeedbackComponent } from './displayfeedback/displayfeedback.component';
 
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'offers',component:ProductsComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'dress',component:DressComponent},
  {path:'mobile',component:MobileComponent},
  {path:'appliances',component:AppliancesComponent},
  {path: 'register', component:RegistrationComponent},
  {path: 'products', component:ModifyProductComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cartitems', component:CartItemsComponent},
  {path: 'feedback', component:FeedbackComponent},
  {path: 'viewfeedback', component:DisplayfeedbackComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
