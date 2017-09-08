import {Component, OnInit, Injectable} from '@angular/core';

import {routerTransition} from '../../router.animations';
import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

import {FormGroup, FormControl, Validators} from "@angular/forms";
import {TablesService} from "../../app.data.service";
import {Hero} from "../../Hero";


@Component({
    selector: 'app-root',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
   // animations: [routerTransition()]
})


export class TablesComponent implements OnInit {
    private heroesUrl: "http://localhost:8080/all/hero";
    results: string[];
    private values: any[];
    herooo: Hero[];
    heroList: Hero[] = [];
    processValidation = false;
    heroIdToUpdate = null;
    requestProcessing = false;
    statusCode: number;
    herojson: Hero;
    heroForm = new FormGroup({
    id: new FormControl('', Validators.required),
        name: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),


    });


    ngOnInit(): void {
        this.heroList.push(this.getheroes());
        this.getheroesjson;
    }


    constructor(private service: TablesService) {
    }






    getheroes(): Hero {


        this.service.getAllDBHeroes()
            .then(herooo => this.herooo = herooo);
        let herooo = new Hero();

        return herooo;

    }

    getheroesjson(): void {

        this.service.createService(this.herojson)
            .then(herooos => this.herojson = herooos);


    }





    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }

    onheroFormSubmit() {
        this.processValidation = true;
        if (this.heroForm.invalid) {
            return; //Validation failed, exit from method.
        }
        //Form is valid, now perform create or update
        this.preProcessConfigurations();
        let id = this.heroForm.get('id').value.trim();
        let name = this.heroForm.get('name').value.trim();
        let price = this.heroForm.get('price').value.trim();

        }








    }









