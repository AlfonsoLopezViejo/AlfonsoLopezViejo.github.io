import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project, projects } from '../models/projects';
import { DomSanitizer } from '@angular/platform-browser';
import { ProjectTranslationService } from '../services/project-translation.service';
import { I18nService } from '../services/i18n.service';
import { SafePipe } from '../pipes/safe.pipe';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, RouterModule, SafePipe],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit{  
  project: Project | undefined;
  loadingProgress: number = 0;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private projectTranslationService: ProjectTranslationService, public i18n: I18nService) {}

  ngOnInit() {
    this.i18n.isReady$.subscribe((ready) => {
      if(ready)
      {
        const id = this.route.snapshot.paramMap.get('id');
        this.project = this.projectTranslationService.TranslateProjects()?.find(p => p.id === id);
      }
    });
  }
}
