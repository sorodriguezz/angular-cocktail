import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cocktail } from '../models/cocktail.interface';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  constructor(
    private _http: HttpClient
  ) { }

  getCocktails(): Observable<Cocktail> {
    return this._http.get<Cocktail>(`${environment.URL_BASE}/filter.php?g=Cocktail_glass`);
  }

  getChampagne() {
    return this._http.get(`${environment.URL_BASE}/filter.php?g=Champagne_flute`);
  }


}
