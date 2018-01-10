import { Component, OnInit } from '@angular/core';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadFileService} from "../upload-file.service";
import {Csvrespo} from "../csvrespo";
import {Fileinfo} from "../fileinfo";

@Component({
  selector: 'app-form-upload',
  templateUrl: './form-upload.component.html',
  styleUrls: ['./form-upload.component.css']
})
export class FormUploadComponent implements OnInit {
  selectedFiles: FileList;
  error:string;
  fileinfo:Fileinfo[] = [];
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private uploadService: UploadFileService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.fileinfo = [];
    this.selectedFiles = event.target.files;
    this.error = null;
    if(this.selectedFiles.length>=5){
      this.selectedFiles = null;
      this.error = `Only 4 files in time allowed`;
      return false;
    }

    this.fileValidate();
  }

  upload() {
    this.progress.percentage = 0;

    let fl = this.selectedFiles;
    for(let i = 0; i < fl.length; i++) {
      this.currentFileUpload = this.selectedFiles.item(i);
      this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.fileinfo[i].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileinfo[i].csvinfo = <Csvrespo>event.body;
        }
      });
    }

    this.selectedFiles = null;
    this.selectedFiles = undefined
  }

  private fileValidate() {
    let fl = this.selectedFiles;
    for (let i = 0; i < fl.length; i++) {
      if (fl[i].size > 10000 * 1024) {
        this.selectedFiles = null;
        this.error = 'One of the file is too big, 10MB allowed!';
      } else if (fl[i].type != 'text/csv') {
        this.selectedFiles = null;
        this.error = 'One of the files isn`t CSV!';
      } else {
        this.fileinfo.push(new Fileinfo(fl[i].name, fl[i].size, fl[i].type, 0, null, ''));
      }
    }
    if (this.error) {
      this.fileinfo = []
    }
  }

}
