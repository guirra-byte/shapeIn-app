import { Component, OnInit } from '@angular/core';
import { ImportsModule } from './imports';
import { Product } from '@domain/product';
import { ProductService } from '@service/productservice';
import { LifeshapersService } from '@service/lifeshapers.service';
interface Column {
  field: string;
  header: string;
}

interface Lifeshaper {
  id: number;
  name: string;
  class: string;
  class_date: string;
  arrived_at: string;
  status: string;
}

@Component({
  selector: 'table-responsive-stack-demo',
  templateUrl: 'table-responsive-stack-demo.html',
  standalone: true,
  imports: [ImportsModule],
  providers: [LifeshapersService],
})
export class TableResponsiveStackDemo implements OnInit {
  products!: Product[];
  lifeshapers!: Lifeshaper[];

  cols!: Column[];

  constructor(private lifeshaperService: LifeshapersService) {}

  ngOnInit() {
    this.lifeshaperService.getLifeshapersData().then((data) => {
      this.lifeshapers = data.map((lifeshaper) => {
        function formatDate(date: Date) {
          const day = String(date.getDate()).padStart(2, '0');
          const month = String(date.getMonth() + 1).padStart(2, '0');
          const year = date.getFullYear();
          return `${day}/${month}/${year}`;
        }

        const formattedDate = formatDate(new Date(lifeshaper.class_date));
        return { ...lifeshaper, class_date: formattedDate };
      });
    });

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Nome' },
      { field: 'class', header: 'Turma' },
      { field: 'class_date', header: 'Aula' },
      { field: 'status', header: 'Status' },
      { field: 'checkin', header: 'CheckIn' },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'PRESENTE':
        return 'success';
      case 'AUSENTE':
        return 'info';
      case 'FALTA':
        return 'danger';
    }
  }
}
