import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../albums/album.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  imports: [CommonModule, RouterModule, FormsModule]
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private albumsService: AlbumsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchAlbum(id);
  }

  fetchAlbum(id: number) {
    this.albumsService.getAlbums().subscribe(data => {
      this.album = data.find(album => album.id === id);
    });
  }

  save() {
    alert('Album title saved!');
  }

  navigateToPhotos() {
    if (this.album) {
      this.router.navigate(['/albums', this.album.id, 'photos']);
    }
  }
}