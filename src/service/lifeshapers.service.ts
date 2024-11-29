import { Injectable } from '@angular/core';

@Injectable()
export class LifeshapersService {
  getLifeshapersData() {
    return Promise.resolve([
      {
        id: 1,
        name: 'Alice Oliveira',
        class: 'Recruits',
        class_date: '2024-11-28T08:30:00',
        status: 'PRESENTE',
        arrived_at: '2024-11-28T08:28:00',
      },
      {
        id: 2,
        name: 'Bruno Santos',
        class: 'Interns',
        class_date: '2024-11-28T08:30:00',
        status: 'AUSENTE',
        arrived_at: null,
      },
      {
        id: 3,
        name: 'Carla Souza',
        class: 'Shapers',
        class_date: '2024-11-28T10:00:00',
        status: 'PRESENTE',
        arrived_at: '2024-11-28T09:58:00',
      },
      {
        id: 4,
        name: 'Diego Pereira',
        class: 'Recruits',
        class_date: '2024-11-28T08:30:00',
        status: 'FALTA',
        arrived_at: null,
      },
      {
        id: 5,
        name: 'Eliane Costa',
        class: 'Interns',
        class_date: '2024-11-28T08:30:00',
        status: 'PRESENTE',
        arrived_at: '2024-11-28T08:30:45',
      },
      {
        id: 6,
        name: 'Felipe Martins',
        class: 'Shapers',
        class_date: '2024-11-28T10:00:00',
        status: 'AUSENTE',
        arrived_at: null,
      },
      {
        id: 7,
        name: 'Gabriela Rocha',
        class: 'Recruits',
        class_date: '2024-11-28T08:30:00',
        status: 'PRESENTE',
        arrived_at: '2024-11-28T08:29:30',
      },
      {
        id: 8,
        name: 'Hugo Lima',
        class: 'Interns',
        class_date: '2024-11-28T08:30:00',
        status: 'FALTA',
        arrived_at: null,
      },
      {
        id: 9,
        name: 'Isabela Almeida',
        class: 'Shapers',
        class_date: '2024-11-28T10:00:00',
        status: 'PRESENTE',
        arrived_at: '2024-11-28T09:59:10',
      },
      {
        id: 10,
        name: 'João Silva',
        class: 'Recruits',
        class_date: '2024-11-28T08:30:00',
        status: 'PRESENTE',
        arrived_at: '2024-11-28T08:30:00',
      },
    ]);
  }
}
