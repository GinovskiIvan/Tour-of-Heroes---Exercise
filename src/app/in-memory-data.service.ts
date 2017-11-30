import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Position } from './kontakt';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Lava' },
      { id: 20, name: 'Tornado' }
    ];
    const kontakti = [
      { id: 1, name: 'Stefan', surname: 'Ivanovski', poster: 'app/avatar.png', position: Position.Boss },
      { id: 2, name: 'Marko', surname: 'Stefanovski', poster: 'app/avatar.png', position: Position.Employee },
      { id: 3, name: 'Darko', surname: 'Spirovski', poster: 'app/avatar.png', position: Position.Employee },
      { id: 4, name: 'Elena', surname: 'Ristovska', poster: 'app/avatar.png', position: Position.Employee },
      { id: 5, name: 'Marija', surname: 'Kostovska', poster: 'app/avatar.png', position: Position.Manager },
      { id: 6, name: 'Bojana', surname: 'Hristovska', poster: 'app/avatar.png', position: Position.Employee },
      { id: 7, name: 'Ivan', surname: 'Ginovski', poster: 'app/avatar.png', position: Position.Employee },
      { id: 8, name: 'Atanas', surname: 'Bogdanovski', poster: 'app/avatar.png', position: Position.Employee }
    ];
    return {heroes, kontakti};
  }
}
