import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class SearchService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = "https://api.github.com/search/repositories";
    private readonly basedParams = new HttpParams().set('q', 'test');

    search(query: string): Observable<any> {
        return this.http.get(this.baseUrl, {
            params: this.basedParams
        })
    }
}
