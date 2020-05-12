import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  listitems = []
  constructor() { 
    this.listitems = [
      {
        image: "https://b.zmtcdn.com/data/collections/273612e3880fa4790562ee39cf48be8b_1445579359_l.jpg?output-format=webp",
        productName:"Zometo1",
        rating:"4.1",
        productDesc:"Buy a gift Voucher..",
        buynow:"BuyNow",
        save:"Save"
      },
      {
        image: "https://b.zmtcdn.com/data/collections/fe80e560421fcaea5ba5fc83d5289562_1459586727.jpg?output-format=webp",
        productName:"Zometo1",
        rating:"4.2",
        productDesc:"Buy a gift Voucher..",
        buynow:"BuyNow",
        save:"Save"
      },
      {
        image: "https://b.zmtcdn.com/data/collections/273612e3880fa4790562ee39cf48be8b_1445579359_l.jpg?output-format=webp",
        productName:"Zometo1",
        rating:"4.3",
        productDesc:"Buy a gift Voucher..",
        buynow:"BuyNow",
        save:"Save"
      },
      {
        image: "https://b.zmtcdn.com/data/collections/fe80e560421fcaea5ba5fc83d5289562_1459586727.jpg?output-format=webp",
        productName:"Zometo1",
        rating:"4.4",
        productDesc:"Buy a gift Voucher..",
        buynow:"BuyNow",
        save:"Save"
      },
      {
        image: "https://b.zmtcdn.com/data/collections/273612e3880fa4790562ee39cf48be8b_1445579359_l.jpg?output-format=webp",
        productName:"Zometo1",
        rating:"4.1",
        productDesc:"Buy a gift Voucher..",
        buynow:"BuyNow",
        save:"Save"
      },
      {
        image: "https://b.zmtcdn.com/data/collections/fe80e560421fcaea5ba5fc83d5289562_1459586727.jpg?output-format=webp",
        productName:"Zometo1",
        rating:"4.2",
        productDesc:"Buy a gift Voucher..",
        buynow:"BuyNow",
        save:"Save"
      },
      {
        image: "https://b.zmtcdn.com/data/collections/273612e3880fa4790562ee39cf48be8b_1445579359_l.jpg?output-format=webp",
        productName:"Zometo1",
        rating:"4.3",
        productDesc:"Buy a gift Voucher..",
        buynow:"BuyNow",
        save:"Save"
      },
      {
        image: "https://b.zmtcdn.com/data/collections/fe80e560421fcaea5ba5fc83d5289562_1459586727.jpg?output-format=webp",
        productName:"Zometo1",
        rating:"4.4",
        productDesc:"Buy a gift Voucher..",
        buynow:"BuyNow",
        save:"Save"
      }
    ]
  }

  ngOnInit() {

  }

}
