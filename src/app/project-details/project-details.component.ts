import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Project, projects } from '../models/projects';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit{
  @ViewChild('unityCanvas') unityCanvas?: ElementRef<HTMLCanvasElement>;
  @ViewChild('unityContainer') unityContainer?: ElementRef<HTMLDivElement>;
  
  project: Project | undefined;
  loadingProgress: number = 0;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.project = projects.find(p => p.id === id);
  }
}
