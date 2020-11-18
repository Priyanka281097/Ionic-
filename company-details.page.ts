import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.page.html',
  styleUrls: ['./company-details.page.scss'],
})
export class CompanyDetailsPage implements OnInit {

  list: any;

  constructor(private alertController: AlertController) {
    this.list = [
      {
        id: '1',
        Memberid: '1',
        type: 'Manager',
        name: 'Murugan',
        city: 'bangalore',
      },
      {
        id: '2',
        Memberid: '101',
        type: 'Employee',
        name: 'Ganesh',
        city: 'chennai',
      },
      {
        id: '3',
        Memberid: '102',
        type: 'Employee',
        name: 'Priyanka',
        city: 'chennai',
      },
      {
        id:'4',
        Memberid: '2',
        type: 'Manager',
        name: 'kiruthi',
        city: 'bangalore',
      }
    ]
  }

  async addDetails() {
    const alert = await this.alertController.create({
      header: 'New Details!',
      backdropDismiss: false,
      inputs: [
        {
          name: 'type',
          type: 'text',
          placeholder: 'Enter Type'
        },
        {
          name: 'Memberid',
          type: 'number',
          placeholder: 'Enter id'
        },
        {
          name: 'name',
          type: 'text',
          placeholder: 'Enter name'
        },
        // input date with min & max
        {
          name: 'city',
          type: 'text',
          placeholder: 'Enter City'
        },

        // input date without min nor max

      ],
      buttons: [
        {
          text: 'Save as Manager',
          handler: (data) => {
            let newItem = {
              id:Math.random(),
              type: 'Manager',
              Memberid: data.Memberid,
              name: data.name,
              city: data.city
            }
            this.addRole(newItem)
            console.log('Manager',newItem);
          }
        },
        {
          text: 'Save as Employee',
          handler: (data) => {
            let newItem = {
              id:Math.random(),
              type: 'Employee',
              Memberid: data.Memberid,
              name: data.name,
              city: data.city
            }
            this.addRole(newItem)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
      ]
    });
    await alert.present();
  }
  addRole(data) {
    this.list.push(data)
  }
  editItem(i){
    this.editDetails(i.type, i.Memberid, i.name, i.city ,i.id)
  }
  deleteItem(i){
    this.list = this.list.filter((item) => {
      return  i.name != item.name
  })
  }
  async editDetails(type='', Memberid ='',name='',city='',id)  {
    const alert = await this.alertController.create({
      header: 'New Company Details!',
      backdropDismiss:false,
      inputs: [
        {
          name: 'type',
          type: 'text',
          value: type,
          placeholder: 'Enter Type'
        },
        {
          name : 'Memberid',
          type : 'number',
          value : Memberid,
          placeholder : 'Enter id'
        },
        {
          name : 'name',
          type : 'text',
          value : name,
          placeholder : 'Enter Name'
        },
        {
          name : 'city',
          type : 'text',
          value : city,
          placeholder : 'Enter City'
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: (data) => {
           this.list.map((item)=>{
             if(item.Memberid == Memberid)
             {
               item.type=data.type,
               item.Memberid=data.Memberid,
               item.name = data.name,
               item.city = data.city
             }
           })
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
      ]
    });
    await alert.present();
  }



  ngOnInit() {
  }

}
