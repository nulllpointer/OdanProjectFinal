import {Headers, Http, RequestOptions} from '@angular/http';
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Hero} from "../Hero";
import 'rxjs/add/operator/retry';
import {map} from "rxjs/operator/map";


@Injectable()
export class ProductService {
    options: RequestOptions;
    id: number;
    hero: Hero;
    results: string[];
    headers = new Headers({
        'Content-Type': 'application/json'
    });


    private baseUrl = 'http://localhost:8080';
    private baseUrl1 = 'http://localhost:8080/all/product';
    private baseUrl2 = 'http://localhost:8080/all/product';


    constructor(private http: Http) {
        let test = {"search": "person"};
        var her = new Hero();
        /* let id=this.hero.id;
         let name=this.hero.name;
         let price=this.hero.price;
         */

    }


    createProoduct(heros): Promise<any> {
        this.options = new RequestOptions({headers: this.headers});
        let body = JSON.stringify(heros);
        console.log(body);
        return this.http
            .post("http://localhost:8080/all/product", body, this.options)
            .toPromise()
            .catch(this.handleError);

    }


  /*  getAllDBHeroByID(id): Promise <Hero> {

        alert(id);
            console.log(`${id}`);


        return this.http.get(`http://localhost:8080/all/hero/${id}`).subscribe(data => {
                // Read the result field from the JSON response.
                this.results = data['results'];
            });
    .catch(this.handleError);
*!/
    }
  */  getAllProducts(): Promise <Hero[]> {
        return this.http.get("http://localhost:8080/all/product")
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);

    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}
