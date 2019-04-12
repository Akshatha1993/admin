import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
        movies=[];
        private movieUrl = 'http://localhost:3000/api/movie';
        private bookingUrl = 'http://localhost:3000/api/booking';
        private customersUrl = 'http://localhost:3000/api/customers';
        private adminUrl = 'http://localhost:3000/api/adminCustomer';
  constructor(private http: HttpClient) { }
  getRemoteMovies(): Observable<[]>{
  	return this.http.get<[]>(this.movieUrl); 		
 }
 getMovieById(id):Observable<any>{
  return this.http.get<[]>(this.movieUrl +"/" + id); 	
 }
 addMovie(movie):Observable<any>{
  return this.http.post<[]>(this.movieUrl, movie); 	
 }
 addCustomers(customer):Observable<any>{
  return this.http.post<[]>(this.customersUrl, customer); 	
 }
 getRemoteCustomers():Observable<[]>{
  return this.http.get<[]>(this.customersUrl);
 }
 getRemoteAdminCustomers():Observable<[]>{
  return this.http.get<[]>(this.adminUrl);
 }
 getCustomerByPhone(phone):Observable<any>{
  return this.http.get<[]>(this.customersUrl +"/" + phone); 	
 }
 deleteRemoteMovie(movie):Observable<any>{
   return this.http.delete<[]>(this.movieUrl + "/" + movie.id);
 }
}
