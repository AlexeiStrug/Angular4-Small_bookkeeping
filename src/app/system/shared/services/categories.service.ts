import {BaseApi} from '../../../shared/base/base-api';
import {Injectable} from '@angular/core';
import {Category} from '../models/category.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CategoriesService {
  constructor(private baseApi: BaseApi) {
  }

  addCategory(category: Category): Observable<Category> {
    return this.baseApi.post('categories', category);
  }

  getCategories(): Observable<Category[]> {
    return this.baseApi.get('categories');
  }

  updateCategory(category: Category): Observable<Category> {
    return this.baseApi.put(`categories/${category.id}`, category);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.baseApi.get(`categories/${id}`);
  }
}
