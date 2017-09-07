import { Component, OnInit } from '@angular/core';
import { Picture } from './picture';
import { PictureService } from './picture.service';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  title = 'Gallery';
  pictures: Picture[];
  picturesPath = 'assets/images/galery/';
  constructor(private pictureService: PictureService) { }

  ngOnInit() {
    this.getPictures();
  }

  getPictures(): void {
    this.pictureService.getPictures().then(pictures => this.pictures = pictures);
  }

}
