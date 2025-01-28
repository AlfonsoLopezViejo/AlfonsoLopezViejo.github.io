import { Component, OnInit } from '@angular/core';
import { Project } from '../models/projects';
import { projects } from '../models/projects';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit{
  project: Project | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log("Hello");
    const id = this.route.snapshot.paramMap.get('id');
    this.project = projects.find(p => p.id === id);
  }
}
