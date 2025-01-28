import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Papa from 'papaparse';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvTojsonService {

  constructor() { }

  convertCsvToJson(file: string): any[] {
    const config = { header: true }
    const result = Papa.parse(file, config);
    return result.data;
  }

    private http = inject(HttpClient)

    datas: any[] = [];

    getDatas(fileName: string): Observable<any[]> {
      return this.http
      .get('/csv/' + fileName, { responseType: 'text' as 'json' })
      .pipe(
        tap( (results: any) => {
          const parsedData = Papa.parse(results, {
            header: true,
            skipEmptyLines: true
          }).data;
          this.datas = parsedData;
        }
        ),
        map(() => this.datas)
      )
    }


    
  }
