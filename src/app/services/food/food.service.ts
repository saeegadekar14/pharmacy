import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food=>food.id==id)!;
  }

  getAllFoodByTag(tag:string): Foods[]{
    if(tag=='All')
    return this.getAll()
    else
    return this.getAll().filter(food=>food.tags?.includes(tag))
  }

  getAllTag():Tag[]{
    return[
      { name:'All', count: 14 },
      { name:'Fever', count: 4 },
      { name:'Cough', count: 2 },
      { name:'Cold', count: 3 },
      { name:'Viral', count: 2 },
      { name:'Headache', count: 1 },
      { name:'Painreliever', count: 1 },
      { name:'Vit-C', count: 1 },
    ];
  }


  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Paracetamol',
        price: 250,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/med1.jpg',
        prescribedFor: 'Mild Fever',
        Origin: ['Indian'],
        tags: ['Fever','Viral'],
      },
      {
        id:2,
        name:'Aspirin',
        price: 250,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/med7.jpg',
        prescribedFor: 'Mild Fever, Cold, Headache',
        Origin: ['Indian', 'German'],
        tags: ['Fever','Cold','Viral','Headache'],
      },
      {
        id:3,
        name:'Benadryl',
        price: 250,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/med3.jpg',
        prescribedFor: 'Cough, Cold',
        Origin: ['USA'],
        tags: ['Cough','Cold'],
      },
      {
        id:4,
        name:'Crocin',
        price: 250,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/med1.jpg',
        prescribedFor: 'Cough, Cold',
        Origin: ['Indian'],
        tags: ['Cough','Cold'],
      },
      {
        id:5,
        name:'Citrem',
        price: 250,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/med5.jpg',
        prescribedFor: 'Mild Fever',
        Origin: ['Indian'],
        tags: ['Fever'],
      },
      {
        id:6,
        name:'Naproxen',
        price: 250,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/med3.jpg',
        prescribedFor: 'Painreliever',
        Origin: ['Indian'],
        tags: ['Painreliever'],
      },
      {
        id:7,
        name:'Vit-C A',
        price: 250,
        favorite: false,
        stars: 4.5,
        imageUrl: 'assets/med7.jpg',
        prescribedFor: 'Vit-C',
        Origin: ['Indian'],
        tags: ['Vit-C'],
      },
      {
        id:8,
        name:'Tylenol',
        price: 250,
        favorite: true,
        stars: 4.5,
        imageUrl: 'assets/med5.jpg',
        prescribedFor: 'Mild Fever',
        Origin: ['Indian'],
        tags: ['Fever'],
      },
    ];
  }
}
