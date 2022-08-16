import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddCuisineComponent } from './admin-add-cuisine/admin-add-cuisine.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminViewRegisteredCustomersComponent } from './admin-view-registered-customers/admin-view-registered-customers.component';
import { AdminCuisinesListComponent } from './admin-cuisines-list/admin-cuisines-list.component';
import { AdminAddFoodComponent } from './admin-add-food/admin-add-food.component';
import { AdminViewOrdersComponent } from './admin-view-orders/admin-view-orders.component';
import { AdminViewOrderedItemsComponent } from './admin-view-ordered-items/admin-view-ordered-items.component';
import { AdminListFoodsComponent } from './admin-list-foods/admin-list-foods.component';
import { AdminEditFoodComponent } from './admin-edit-food/admin-edit-food.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerLogoutComponent } from './customer-logout/customer-logout.component';
import { CustomerViewPurchaseHistoryComponent } from './customer-view-purchase-history/customer-view-purchase-history.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CustomerFinalPageComponent } from './customer-final-page/customer-final-page.component';
import { CustomerFilterByCuisinePipe } from './customer-filter-by-cuisine.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminAddCuisineComponent,
    AdminLogoutComponent,
    AdminViewRegisteredCustomersComponent,
    AdminCuisinesListComponent,
    AdminAddFoodComponent,
    AdminViewOrdersComponent,
    AdminViewOrderedItemsComponent,
    AdminListFoodsComponent,
    AdminEditFoodComponent,
    CustomerLoginComponent,
    CustomerHomeComponent,
    CustomerLogoutComponent,
    CustomerViewPurchaseHistoryComponent,
    CustomerRegistrationComponent,
    CartDetailsComponent,
    CustomerFinalPageComponent,
    CustomerFilterByCuisinePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
