import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project, projects } from '../models/projects';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from '../pipes/safe.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, RouterModule, SafePipe, TranslateModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit{  
  project: Project | undefined;
  loadingProgress: number = 0;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer,) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = projects.find(p => p.id === id);
  }

  formatDate(date: string | undefined): string | undefined{
    if(date === undefined) return undefined;
    return new Date(date).toLocaleDateString('es', {
      year: 'numeric',
      month: 'long'
    });
  }
}
