import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.css']
})
export class TicketPageComponent implements OnInit {

  home: string[] = [
    'Амкар',
    'ЦСК',
    'Локомотив',
    'Сапртак',
  ];

  guest: string[] = [

    'Химки',
    'Уфа',
    'Авангард',
    'Зенит'
  ];

  stadion: string[] = [

    'Звезда Пермь',
    'Лужники',
    'Авангард',
    'Зенит'
  ];

  tribune: string[] = [
    'ряд 1' ,
    'ряд 2' ,
    'ряд 3' ,
    'ряд 4' ,
    'ряд 5' ,
  ]

  place: string[] = [
    'Место 1',
    'Место 2',
    'Место 3',
    'Место 4',
    'Место 5',
    'Место 6',
    'Место 7',
    'Место 8',
    'Место 9',
    'Место 10',
    'Место 11',
    'Место 12',
    'Место 13',
    'Место 14',
    'Место 15',
    'Место 16',
    'Место 17',
    'Место 18',
    'Место 19',
    'Место 20',
  ]


  constructor() { }

  ngOnInit(): void {
  }


}
