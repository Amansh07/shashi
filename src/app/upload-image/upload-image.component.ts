import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  category:any;
  description:any;
  imageData:any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onFileChanged(event:any) {
    this.imageData = event.target.files[0];

  }

uploadImage() {

  let data = new FormData();
  data.append('category', this.category);
  data.append('imageFile', this.imageData);
  data.append('description',this.description);


  let url = "http://3.13.230.115:8080/gallery"
  this.httpClient.post(url,data).subscribe(response => {
    console.log(response);
    return "OK";
  })
}

}
