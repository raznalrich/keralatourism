import { Component } from '@angular/core';
import { HeaderComponent } from "../../ui/portfolioComponent/header/header.component";
import { AboutusComponent } from "../../ui/portfolioComponent/aboutus/aboutus.component";
import { ProjectsComponent } from "../../ui/portfolioComponent/projects/projects.component";
import { ExperienceComponent } from "../../ui/portfolioComponent/experience/experience.component";
import { EducationComponent } from "../../ui/portfolioComponent/education/education.component";
import { ContactComponent } from "../../ui/portfolioComponent/contact/contact.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [HeaderComponent, AboutusComponent, ProjectsComponent, ExperienceComponent, EducationComponent, ContactComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
