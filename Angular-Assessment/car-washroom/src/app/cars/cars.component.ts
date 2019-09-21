import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carDetails:any='';

  cars = [
    {
      brand:'Hyundai Venue',
      img: 'https://media.zigcdn.com/media/model/2019/Sep/hyundai-venue_600x400.jpg',
      details: 'The Hyundai Venue has dethroned the Maruti Suzuki Vitara to become the best-selling subcompact SUV in India. Hyundai sold 9585 units of the Venue during the month of July while the Brezza registered a drop of 40 per cent in sales as it only sold around 5,302 units in July compared to 8,871 units in the month before.',
      cost:'Rs.2-3lakh'
    },
    {
      brand:'Toyota Glanza',
      img:'https://media.zigcdn.com/media/model/2019/Sep/toyota-glanza_600x400.jpg',
      details:'Toyota has launched the Glanza in India with prices starting at Rs 7.21 lakh. All variants except the Smart Hybrid are priced on par with the Baleno. The G MT variant of the Glanza undercuts the respective Baleno Zeta Smart Hybrid by Rs 65,000! The hatchback is available in two variants - G and V. It can be had with a 1.2-litre petrol mild-hybrid powertrain that makes 90PS and 113Nm in the G MT variant and a 1.2-litre petrol engine that produces 83PS and 113Nm in the top-spec V variant. Spare for the new grille and some badges, the Glanza looks exactly identical to the Maruti Suzuki Baleno.',
      cost:'Rs. 7.29 - 9.00 lakh'
    },
    {
      brand:'Tata Tiago',
      img:'https://media.zigcdn.com/media/model/2019/Sep/tata-tiago_600x400.jpg',
      details:'The Tata Tiago was spied undergoing high altitude testing in Drass recently. It looks like the manufacturer is testing the 1.2-litre BS6-compliant petrol engine in high altitudes as the carmaker will axe the diesel motor from the Tiago’s lineup once new emission norms take effect next year. Tata is also working on a facelift for the Tiago and it is expected to launch by the end of this year.',
      cost:'Rs. 4.50 - 6.82 lakh'
    },
    {
      brand:'Mahindra Scorpio',
      img:'https://media.zigcdn.com/media/model/2019/Sep/mahindra-scorpio_600x400.jpg',
      details:'The Mahindra’s Scorpio will soon see a price hike as the manufacturer will implement various safety features to make the SUV compliant with AIS 145 safety norms 2020 Mahindra Scorpio was spotted in the outskirts of Coimbatore while being load tested. The spied SUV looks larger than the current model and is most likely going to be based on the same platform that underpins the upcoming Thar SUV.',
      cost:'Rs. 10.00 - 16.70 lakh'
    },
    {
      brand:'Kia Seltos',
      img:'https://media.zigcdn.com/media/model/2019/Sep/kia-seltos_600x400.jpg',
      details:'Kia Motors India is the newest carmaker to set foot in the country. Owned by the Hyundai Motor Company, the Korean giant has setup 265 customer touchpoints across 160 cities in the country. Anantapur district in Andhra Pradesh hosts Kia’s manufacturing facility in India that has an annual production ',
      cost:'Rs. 9.69 - 15.99 lakh'
    },
    {
      brand:'Volkswagen Tiguan',
      img:'https://media.zigcdn.com/media/model/2019/Sep/volkswagen-tiguan_600x400.jpg',
      details:'Volkswagen has launched the Tiguan SUV in India. Available in two variants, the Tiguan is priced from Rs 27.98 lakh to Rs 31.38 lakh, ex-showroom Delhi. The SUV is based on the brands modular MQB platform that also underpins other cars such as the upcoming Skoda Kodiaq. The Tiguan is available with a single 2.0-litre diesel engine option. A 7-speed dual clutch automatic gearbox and 4Motion all-wheel drive tech arealso offered as standard. The SUV takes on the likes of the Hyundai Tucson and the Honda CR-V.',
      cost:'Rs. 28.07 - 31.46 lakh'
    },
    {
      brand:'Renault Triber',
      img:'https://media.zigcdn.com/media/model/2019/Sep/renault-triber_600x400.jpg',
      details:'When the Renault Triber was officially launched in India, many anticipated the AMT option that was announced during the global unveil in June 2019 to be available right from the get-go. Unfortunately, it was given a miss with only the 5-speed manual making it showroom floors for now. However, there’s good news on the horizon as Reanult is expected to launch the AMT option around early 2020, probably at the upcoming 2020 Auto Expo.',
      cost:'Rs. 4.95 - 6.49 lakh'
    },
  ]
  constructor() { }

  
  sendCar(car){
    this.carDetails=car;
  }

  ngOnInit() {
  }

}
