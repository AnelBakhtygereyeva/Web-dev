import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from './album.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  standalone: true,
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private router: Router, private albumsService: AlbumsService) {}

  ngOnInit() {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.albumsService.getAlbums().subscribe(data => {
      this.albums = data;
    }, error => {
      console.error('Error fetching albums:', error);
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(album => album.id !== id);
  }

  navigateToDetail(id: number) {
    this.router.navigate(['/albums', id]);
  }
}