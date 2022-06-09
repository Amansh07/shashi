import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pciture-gallery',
  templateUrl: './pciture-gallery.component.html',
  styleUrls: ['./pciture-gallery.component.scss']
})
export class PcitureGalleryComponent implements OnInit {
  galleryData:any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages() {
    let url = "http://3.13.230.115:8080/gallery"
    this.httpClient.get(url).subscribe(response => {
      this.galleryData = response;
    })
  }

}
