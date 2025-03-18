import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photo } from '../albums/photo.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private route: ActivatedRoute, private albumsService: AlbumsService) {}

  ngOnInit() {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchPhotos(albumId);
  }

  fetchPhotos(albumId: number) {
    this.albumsService.getAlbumPhotos(albumId).subscribe(data => {
      this.photos = data;
    });
  }
}