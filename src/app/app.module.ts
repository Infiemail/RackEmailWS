import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PricingComponent } from './Forms/pricing/pricing.component';
import { HomeComponent } from './Forms/home/home.component';
import { ComputerSoftwareComponent } from './Forms/Solutions/Industry/computer-software/computer-software.component';
import { HigherEducationComponent } from './Forms/Solutions/Industry/higher-education/higher-education.component';
import { HumanResourcesComponent } from './Forms/Solutions/Industry/human-resources/human-resources.component';
import { InformationServicesComponent } from './Forms/Solutions/Industry/information-services/information-services.component';
import { InformationTechnologyandServicesComponent } from './Forms/Solutions/Industry/information-technologyand-services/information-technologyand-services.component';
import { InternetComponent } from './Forms/Solutions/Industry/internet/internet.component';
import { LeadGenerationComponent } from './Forms/Solutions/Industry/lead-generation/lead-generation.component';
import { ManagementConsultingComponent } from './Forms/Solutions/Industry/management-consulting/management-consulting.component';
import { MarketResearchComponent } from './Forms/Solutions/Industry/market-research/market-research.component';
import { MarketingandAdvertisingComponent } from './Forms/Solutions/Industry/marketingand-advertising/marketingand-advertising.component';
import { OutsourcingOffshoringComponent } from './Forms/Solutions/Industry/outsourcing-offshoring/outsourcing-offshoring.component';
import { ProfessionalTrainingCoachingComponent } from './Forms/Solutions/Industry/professional-training-coaching/professional-training-coaching.component';
import { StaffingandRecruitingComponent } from './Forms/Solutions/Industry/staffingand-recruiting/staffingand-recruiting.component';
import { FreelancerComponent } from './Forms/Solutions/CompanyType/freelancer/freelancer.component';
import { SelfEmployedComponent } from './Forms/Solutions/CompanyType/self-employed/self-employed.component';
import { SmallBusinessComponent } from './Forms/Solutions/CompanyType/small-business/small-business.component';
import { StartupComponent } from './Forms/Solutions/CompanyType/startup/startup.component';
import { BusinessDevelopmentComponent } from './Forms/Solutions/Teams/business-development/business-development.component';
import { HumarnResComponent } from './Forms/Solutions/Teams/humarn-res/humarn-res.component';
import { MarketingComponent } from './Forms/Solutions/Teams/marketing/marketing.component';
import { OperationsComponent } from './Forms/Solutions/Teams/operations/operations.component';
import { ResearchComponent } from './Forms/Solutions/Teams/research/research.component';
import { SalesComponent } from './Forms/Solutions/Teams/sales/sales.component';

import { BListManagementComponent } from './Forms/Features/blist-management/blist-management.component';
import { BulkColdEmailAutomationComponent } from './Forms/Features/bulk-cold-email-automation/bulk-cold-email-automation.component';
import { ContactManagementComponent } from './Forms/Features/contact-management/contact-management.component';

import { HyperPersonalizationComponent } from './Forms/Features/hyper-personalization/hyper-personalization.component';
import { UnifiedInboxComponent } from './Forms/Features/unified-inbox/unified-inbox.component';
import { UnlimitedEmailAccountsComponent } from './Forms/Features/unlimited-email-accounts/unlimited-email-accounts.component';

import { BookDemoComponent } from './Forms/Demo/book-demo/book-demo.component';
import { DemoCampaignComponent } from './Forms/Demo/demo-campaign/demo-campaign.component';
import { WatchDemoComponent } from './Forms/Demo/watch-demo/watch-demo.component';
import { HeaderComponent } from './Forms/Shared/header/header.component';
import { FooterComponent } from './Forms/Shared/footer/footer.component';
import { LeftManuComponent } from './Forms/Shared/left-manu/left-manu.component';
import { TermsandconditionsComponent } from './Forms/termsandconditions/termsandconditions.component';
import { PrivacyComponent } from './Forms/privacy/privacy.component';
import { CookiePolicyComponent } from './Forms/cookie-policy/cookie-policy.component';
import { AcceptableUsePolicyComponent } from './Forms/acceptable-use-policy/acceptable-use-policy.component';
@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    HomeComponent,
    ComputerSoftwareComponent,
    HigherEducationComponent,
    HumanResourcesComponent,
    InformationServicesComponent,
    InformationTechnologyandServicesComponent,
    InternetComponent,
    LeadGenerationComponent,
    ManagementConsultingComponent,
    MarketResearchComponent,
    MarketingandAdvertisingComponent,
    OutsourcingOffshoringComponent,
    ProfessionalTrainingCoachingComponent,
    StaffingandRecruitingComponent,
    FreelancerComponent,
    SelfEmployedComponent,
    SmallBusinessComponent,
    StartupComponent,
    BusinessDevelopmentComponent,
    HumarnResComponent,
    MarketingComponent,
    OperationsComponent,
    ResearchComponent,
    SalesComponent,
    BListManagementComponent,
    BulkColdEmailAutomationComponent,
    ContactManagementComponent,
    HyperPersonalizationComponent,
    UnifiedInboxComponent,
    UnlimitedEmailAccountsComponent,
    BookDemoComponent,
    DemoCampaignComponent,
    WatchDemoComponent,
    HeaderComponent,
    FooterComponent,
    LeftManuComponent,
    TermsandconditionsComponent,
    PrivacyComponent,
    CookiePolicyComponent,
    AcceptableUsePolicyComponent,

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
