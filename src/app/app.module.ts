import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatMenuModule,MatTabsModule,MatAutocompleteModule,MatToolbarModule,MatDialogModule,MatIconModule,MatStepperModule,MatSelectModule,MatGridListModule,MatCardModule,MatButtonToggleModule, MatInputModule, MatSidenavModule, MatListModule,MatExpansionModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FileSelectDirective} from 'ng2-file-upload';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LayoutModule } from '@angular/cdk/layout';
import { WorkoutPlansComponent } from './workout-plans/workout-plans.component';
import { HomeComponent } from './home/home.component';
import { AbsComponent } from './abs/abs.component';
import { BicepsComponent } from './biceps/biceps.component';
import { ChestComponent } from './chest/chest.component';
import { LegsComponent } from './legs/legs.component';
import { ShoulderComponent } from './shoulder/shoulder.component';
import { TricepComponent } from './tricep/tricep.component';
import { VshapeComponent } from './vshape/vshape.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { CleaneatingComponent } from './cleaneating/cleaneating.component';
import { FlexibledietingComponent } from './flexibledieting/flexibledieting.component';
import { KetogenicLowCarbComponent } from './ketogenic-low-carb/ketogenic-low-carb.component';
import { IntermittentfastingComponent } from './intermittentfasting/intermittentfasting.component';
import { CarbcycleComponent } from './carbcycle/carbcycle.component';
import { PaleolithicComponent } from './paleolithic/paleolithic.component';
import { MediterraneanComponent } from './mediterranean/mediterranean.component';
import { VeganComponent } from './vegan/vegan.component';
import { GlutenComponent } from './gluten/gluten.component';
import { StoreComponent } from './store/store.component';
import {AuthGuard} from './auth.guard';
import { UserService } from './shared/user.service';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { ProductsComponent } from './admin/products/products.component';
import { Home1Component } from './home1/home1.component';
import { LogoutComponent } from './logout/logout.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminGuard } from './admin.guard';
import { SafeUrlPipe } from './shared/safe-url.pipe';
import { AdminlogoutComponent } from './adminlogout/adminlogout.component';
import { AccountinfoComponent } from './accountinfo/accountinfo.component';

const appRoute:Routes=[
  {
    path:'cart',
    component:CartComponent,canActivate:[AuthGuard]
  },

  {
    path:'shipping',
    component:ShippingComponent,canActivate:[AuthGuard]
  },
  
  {
    path:'',
    component:Home1Component
  },

  {
    path:'home',
    component:HomeComponent,canActivate:[AuthGuard]
  },

  {
    path:'store',
    component:StoreComponent,canActivate:[AuthGuard]
  },

  {
    path:'logout',
    component:LogoutComponent,canActivate:[AuthGuard]
  },

  {
      path:'signin',
      component:SigninComponent
  },
  {
    path:'signup',
    component:SignupComponent,canActivate:[AuthGuard]
},

{
  path:'forgotpassword',
  component:ForgotpasswordComponent,canActivate:[AuthGuard]
},


  {
    path:'changepassword',
    component:ChangepassComponent
  },

{
  path:'workout',
  component:WorkoutPlansComponent,canActivate:[AuthGuard],
  children: [
    {
        path: 'abs',
        component: AbsComponent
    },
    {
      path: 'bicep',
      component: BicepsComponent
    },
    {
      path:'chest',
      component:ChestComponent
    },
    {
      path:'leg',
      component:LegsComponent
    },
    {
      path:'shoulder',
      component:ShoulderComponent
    },
    {
      path:'tricep',
      component:TricepComponent
    },
    {
      path:'vshape',
      component:VshapeComponent
    }
      
  ]
},

{
  path:'nutrition',
  component:NutritionComponent,canActivate:[AuthGuard],
  children:[
    {
      path:'cleaneating',
      component:CleaneatingComponent
    },
    {
      path:'carbcycle',
      component:CarbcycleComponent
    },
    {
      path:'flexiblediet',
      component:FlexibledietingComponent
    },
    {
      path:'gluten',
      component:GlutenComponent
    },
    {
      path:'fasting',
      component:IntermittentfastingComponent
    },
    {
      path:'ketogen',
      component:KetogenicLowCarbComponent
    },
    {
      path:'mediterian',
      component:MediterraneanComponent
    },
    {
      path:'paleo',
      component:PaleolithicComponent
    },
    {
      path:'vegan',
      component:VeganComponent
    }
  ]
},

{
path:'adminlogin',
component:AdminloginComponent
},

{
  path:'admin',
  component:AdminComponent,canActivate:[AdminGuard]
},

{
  path:'admin/users',
  component:UsersComponent,canActivate:[AdminGuard]
},

{
  path:'admin/products',
  component:ProductsComponent,canActivate:[AdminGuard]
},

{
  path:'adminlogout',
  component:AdminlogoutComponent,canActivate:[AdminGuard]

},

{
  path:'account',
  component:AccountinfoComponent,canActivate:[AuthGuard]
}

]

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent,
    WorkoutPlansComponent,
    HomeComponent,
    AbsComponent,
    BicepsComponent,
    ChestComponent,
    LegsComponent,
    ShoulderComponent,
    TricepComponent,
    VshapeComponent,
    NutritionComponent,
    CleaneatingComponent,
    FlexibledietingComponent,
    KetogenicLowCarbComponent,
    IntermittentfastingComponent,
    CarbcycleComponent,
    PaleolithicComponent,
    MediterraneanComponent,
    VeganComponent,
    GlutenComponent,
    StoreComponent,
    CartComponent,
    AdminComponent,
    UsersComponent,
    ProductsComponent,
    FileSelectDirective,
    Home1Component,
    LogoutComponent,
    ShippingComponent,
    ChangepassComponent,
    AdminloginComponent,
    SafeUrlPipe,
    AdminlogoutComponent,
    AccountinfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute),
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatGridListModule,
    FormsModule,
    HttpClientModule,
     ReactiveFormsModule,
     MatStepperModule,
     MatSidenavModule,
     MatListModule,
     LayoutModule,
     MatExpansionModule,
    
  ],
  providers: [AuthGuard,UserService,AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
