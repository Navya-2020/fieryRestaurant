import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RESTAURANT_API } from '../../app.constants';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import {Reservation} from './reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  getAllReservation(id : string): Observable<{
    success: boolean,
    count: number,
    data: Reservation[]
  }>{
    return this.http.get<{
      success: boolean,
    count: number,
    data: Reservation[]
    }>(`${RESTAURANT_API}/api/v1/restaurants/reservation/${id}`);
  }
}
