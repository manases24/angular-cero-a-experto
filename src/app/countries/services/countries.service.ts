import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchByCapital(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(catchError(() => of([])));
  }

  searchByCountry(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/name/${term}?fullText=true`)
      .pipe(catchError(() => of([])));
  }

  searchByRegion(term: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.apiUrl}/region/${term}`)
      .pipe(catchError(() => of([])));
  }
}
