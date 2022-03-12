import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {PeriodicElement} from "../interface";


const ELEMENT_DATA: PeriodicElement[] = [
  {date: '12.10.2012', tur: 1, stadion: 'Звезда', hCommand: 'Амкар',math: '3:0',vCommand: 'ЛОКОМОТИВ'},
  {date: '15.10.2012', tur: 1, stadion: 'Газпром Арена', hCommand: 'ЗЕНИТ',math: '1:2',vCommand: 'ДИНАМО'},
  {date: '17.10.2012', tur: 1, stadion: 'Волгоград Арена', hCommand: 'СОЧИ',math: '3:2',vCommand: 'АХМАТ'},
  {date: '18.10.2012', tur: 1, stadion: 'Ростов Арена', hCommand: 'РОСТОВ',math: '1:0',vCommand: 'КРЫЛЬЯ СОВЕТОВ'},
  {date: '20.10.2012', tur: 1, stadion: 'Лужники', hCommand: 'УФА',math: '4:3',vCommand: 'РУБИН'},
  {date: '21.10.2012', tur: 1, stadion: 'Спартак', hCommand: 'СПАРТАК',math: '2:2',vCommand: 'ХИМКИ'},
  {date: '22.10.2012', tur: 1, stadion: 'РЖД Арена', hCommand: 'ЦСКА',math: '2:1',vCommand: 'УРАЛ'},
  {date: '24.10.2012', tur: 1, stadion: 'ВТБ Арена', hCommand: 'АРСЕНАЛ',math: '1:1',vCommand: 'НИЖНИЙ НОВГОРОД'},
];



@Component({
  selector: 'app-main-layuot',
  templateUrl: './main-layuot.component.html',
  styleUrls: ['./main-layuot.component.css']
})
export class MainLayuotComponent implements OnInit {

  displayedColumns: string[] = ['date', 'tur', 'stadion', 'hCommand', 'math', 'vCommand'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
