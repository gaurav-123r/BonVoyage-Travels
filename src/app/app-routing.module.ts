import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
// import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { HelpDetailComponent } from './help-detail/help-detail.component';
import { ExplorePremiumPackageComponent } from './explore-premium-package/explore-premium-package.component';
import { ExploreDeluxePackageComponent } from './explore-deluxe-package/explore-deluxe-package.component';
import { ExploreDiamondPackageComponent } from './explore-diamond-package/explore-diamond-package.component';
import { ExploreComponent } from './explore/explore.component';
import { HotelstayComponent } from './hotelstay/hotelstay.component';
import { HotelsHoteltabComponent } from './hotels-hoteltab/hotels-hoteltab.component';
import { InvoiceTemplateComponent } from './invoice-template/invoice-template.component';
import { UserDataModalComponent } from './user-data-modal/user-data-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CanDeactivateGuard } from './can-deactivate.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
  {
    path: 'package/:id',
    component: PackageDetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'hotel/:id',
    component: HotelsHoteltabComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'place/:id',
    component: PlaceDetailComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'help/:id', component: HelpDetailComponent },
  {
    path: 'Premium',
    component: ExplorePremiumPackageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Deluxe',
    component: ExplorePremiumPackageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'Diamond',
    component: ExploreDiamondPackageComponent,
    canActivate: [AuthGuardService],
  },
  // { path: '', redirectTo: '/places', pathMatch: 'full' },
  {
    path: 'places',
    component: PlaceDetailComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'explore/:id',
    component: ExploreComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'hotel-stay/:id',
    component: HotelstayComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'invoice',
    component: InvoiceTemplateComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'traveller',
    component: UserDataModalComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'razor',
    component: CheckoutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'testing/:place/:date/:count',
    component: TravelComponent,
    // canActivate: [AuthGuardService],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full',
    canActivate: [AuthGuardService],
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
