import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CustomersType } from '../models/northwind/customers-type';
import { CategoriesType } from '../models/northwind/categories-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public categoryArray: CategoriesType[] = [];
  public categoryObject?: CategoriesType;
  public customerArray: CustomersType[] = [];
  public customerOutputArray: CustomersType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getData('CategoriesType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.categoryArray = data,
      error: (_err: any) => this.categoryArray = []
    });
    this.northwindService.getData('CustomersType').pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.customerArray = data,
      error: (_err: any) => this.customerArray = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
