import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddCuisineComponent } from './admin-add-cuisine/admin-add-cuisine.component';
import { AdminAddFoodComponent } from './admin-add-food/admin-add-food.component';
import { AdminAuthGuardGuard } from './admin-auth-guard.guard';
import { AdminCuisinesListComponent } from './admin-cuisines-list/admin-cuisines-list.component';
import { AdminEditFoodComponent } from './admin-edit-food/admin-edit-food.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminListFoodsComponent } from './admin-list-foods/admin-list-foods.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminViewOrderedItemsComponent } from './admin-view-ordered-items/admin-view-ordered-items.component';
import { AdminViewOrdersComponent } from './admin-view-orders/admin-view-orders.component';
import { AdminViewRegisteredCustomersComponent } from './admin-view-registered-customers/admin-view-registered-customers.component';
import { CartDetails } from './cart-details';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CustomerAuthGuardGuard } from './customer-auth-guard.guard';
import { CustomerFinalPageComponent } from './customer-final-page/customer-final-page.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerLogoutComponent } from './customer-logout/customer-logout.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerViewPurchaseHistoryComponent } from './customer-view-purchase-history/customer-view-purchase-history.component';

const routes: Routes = [
  { path: "admin-login", pathMatch: 'full', component: AdminLoginComponent },
  { path: "admin-home", pathMatch: 'full', component: AdminHomeComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "admin-add-cuisine", pathMatch: 'full', component: AdminAddCuisineComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "admin-logout", pathMatch: 'full', component: AdminLogoutComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "admin-view-registered-customers", pathMatch: 'full', component: AdminViewRegisteredCustomersComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "admin-cuisines-list", pathMatch: 'full', component: AdminCuisinesListComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "admin-add-food", pathMatch: 'full', component: AdminAddFoodComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "admin-view-orders", pathMatch: 'full', component: AdminViewOrdersComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "admin-view-ordered-items", pathMatch: 'full', component: AdminViewOrderedItemsComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "admin-list-foods", pathMatch: 'full', component: AdminListFoodsComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "admin-edit-food/:id", pathMatch: 'full', component: AdminEditFoodComponent, canActivate: [AdminAuthGuardGuard] },
  { path: "customer-login", pathMatch: 'full', component: CustomerLoginComponent },
  { path: "customer-home", pathMatch: 'full', component: CustomerHomeComponent, canActivate: [CustomerAuthGuardGuard] },
  { path: "customer-logout", pathMatch: 'full', component: CustomerLogoutComponent, canActivate: [CustomerAuthGuardGuard] },
  { path: "customer-view-purchase-history", pathMatch: 'full', component: CustomerViewPurchaseHistoryComponent, canActivate: [CustomerAuthGuardGuard] },
  { path: "customer-registration", pathMatch: 'full', component: CustomerRegistrationComponent },
  { path: "cart-details", pathMatch: 'full', component: CartDetailsComponent, canActivate: [CustomerAuthGuardGuard] },
  { path: "customer-final-page", pathMatch: 'full', component: CustomerFinalPageComponent, canActivate: [CustomerAuthGuardGuard] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
