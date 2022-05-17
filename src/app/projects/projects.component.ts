import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { project } from '../project';
import { ProjectDetailDialogComponent } from '../project-detail-dialog/project-detail-dialog.component';
import { ProjectsServiceService } from '../projects-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projects: project[] = [];
  openDetail = false;
  constructor(
    private dialog:MatDialog,
    private projectsService:ProjectsServiceService
    ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  public getProjects(): void{
    this.projectsService.getAllProjects().subscribe(
      (response: project[]) => {

        this.projects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
    

  public openDetails(project:project){
    // const dialogConfig = new MatDialogConfig();
    // // dialogConfig.disableClose = true;
    // // dialogConfig.autoFocus = true;
    // // dialogConfig.width = "60%";
    // dialogConfig.data = {
      
    // }
    // // alert(dialogConfig.data.id);
    // this.dialog.open(ProjectDetailDialogComponent);
    if (project.detailDisplay){
      project.detailDisplay = false;
    }
    else{
     project.detailDisplay = true;
    }
  }

}
