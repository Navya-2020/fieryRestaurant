import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTAURANT_API } from '../../../../app.constants';
import { Review } from './reviews.model';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http: HttpClient) { }
  getReviews(id : string): Observable<{
    success: boolean,
    count: number,
    data: Review[]
  }>{
    return this.http.get<{
      success: boolean,
    count: number,
    data: Review[]
    }>(`${RESTAURANT_API}/api/v1/restaurants/review/${id}`);
  }
}
