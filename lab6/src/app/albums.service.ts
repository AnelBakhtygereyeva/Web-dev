import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './albums/album.model';
import { Photo } from './albums/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  private photosUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.albumsUrl);
  }

  getAlbumPhotos(albumId: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.photosUrl}?albumId=${albumId}`);
  }
}