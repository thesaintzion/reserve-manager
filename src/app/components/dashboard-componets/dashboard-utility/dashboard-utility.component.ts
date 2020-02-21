import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { DashboardCreateAccountDialogComponent } from '../_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';

@Component({
  selector: 'app-dashboard-utility',
  templateUrl: './dashboard-utility.component.html',
  styleUrls: ['./dashboard-utility.component.scss']
})
export class DashboardUtilityComponent implements OnInit {
slug = 'gender';
active = 'gender';
detected = 0;
siteSlug =  this.router.url.split('/')[4];
loading = false;
  constructor(private router: Router, private dialog: MatDialog, private sharedService: SharedService) { }

  getGlug(slug){
this.active = '';
this.slug = slug;
this.active = slug;
  }

  

// onBankFormSubmit
onBankFormSubmit(){
      this.loading = true;
      
      setTimeout( () =>{
        this.loading = false;
      }, 3000);
        }


// Country array
genders = [
  {
    id: 1,
    "name": "Male"
  },
  {
    id: 2,
    "name": "Female"
  }
  ];

  // Country array
  countries = [
    {
      id: 0,
    "name": "Afghanistan",
    },
    {
    "name": "Aland Islands",
   
    },
    {
      id: 0,
    "name": "Benin",
    
    },
    {
      id: 0,
    "name": "Bermuda",
   
    },
    {
      id: 0,
    "name": "Zambia",
   
    },
    {
      id: 0,
    "name": "Zimbabwe",
    
    }
 ];

  // Account Type
  accountTypes = [
    {
      id: 1,
      "name": "Individual"
    },
    {
      id: 2,
      "name": "Coporate"
    },
    ];

    // denominations
    denominations = [
      {
        id: 1,
        "name": "US Dollar"
      },
      {
        id: 2,
        "name": "Naira"
      },
      {
        id: 3,
        "name": "Pounds"
      },
      {
        id: 4,
        "name": "Euros"
      },
      ];

      // promotionTypes

      promotionTypes = [
        {
          id: 1,
          name: 'Flyers',
        },
        {
          id: 2,
          name: 'Newspapers',
        },
        {
          id: 1,
          name: 'Social Media',
        },
        {
          id: 1,
          name: 'Friend',
        }
      ]

  //   investmentPeriods
    investmentPeriods = [
      {
        id: 1,
        "name": "3 Month"
      },
      { 
        id: 2,
        "name": "6 Month"
      },
      {
        id: 3,
        "name": "12 Month"
      },
      {
        id: 4,
        "name": "18 Month"
      },
      {
        id: 5,
        "name": "24 Month"
      },
      {
        id: 6,
        "name": "18 Month"
      },
      {
        id: 7,
        "name": "2 years +"
      }
    ];

    




// ============================
// ADD UTILITY
// ===========================

        // form dialog
openAddUtilityDialog(): void {
  let title = 'Add Utility';
  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
    //  width: '400px',
     data:{ title:  title, type: 'addUtility' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
     console.log(result);
     this.sharedService.openSnackBar('Account deleted', '', 4000, 'bg-success');
    
   }
  });
 }


// 01. add gender
addGenderDialog(): void {
  let title = 'Add Gender';
  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
      // width: '400px',
      data:{ title:  title, type: 'addUtility' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      console.log(result);
      this.genders.push({
      id: Math.floor(Math.random() * 10),
      name: result
    })
      this.sharedService.openSnackBar('Gender Added', '', 3000, 'bg-success');
    }
  });
  }

  // 02. add gender
addCountryDialog(): void {
  let title = 'Add Country';
  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
      // width: '400px',
      data:{ title:  title, type: 'addUtility' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      console.log(result);
      this.countries.push({
      id: Math.floor(Math.random() * 10),
      name: result
    })
      this.sharedService.openSnackBar('Country Added', '', 3000, 'bg-success');
    }
  });
  }

    // 03. add gender
addAccountTypeDialog(): void {
  let title = 'Add Account Type';
  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
      // width: '400px',
      data:{ title:  title, type: 'addUtility' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      console.log(result);
      this.accountTypes.push({
      id: Math.floor(Math.random() * 10),
      name: result
    })
      this.sharedService.openSnackBar('Account Type Added', '', 3000, 'bg-success');
    }
  });
  }


      // 04. Add Denomination
addDenominationDialog(): void {
  let title = 'Add Denomination';
  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
      // width: '400px',
      data:{ title:  title, type: 'addUtility' },
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result) {
      console.log(result);
      this.denominations.push({
      id: Math.floor(Math.random() * 10),
      name: result
    })
      this.sharedService.openSnackBar('Denomination Added', '', 3000, 'bg-success');
    }
  });
  }

        // 05. Add Promotion Type
addPromotionTypeDialog(): void {
  let title = 'Add Promotion Type';
    const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
        // width: '400px',
        data:{ title:  title, type: 'addUtility' },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log(result);
        this.promotionTypes.push({
        id: Math.floor(Math.random() * 10),
        name: result
      })
        this.sharedService.openSnackBar('Promotion Type Added', '', 3000, 'bg-success');
      }
    });
  }


// 07. Add investment period
  addInvestmentPeriodDialog(){
    let title = 'Add Investment Period';
    const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
        // width: '400px',
        data:{ title:  title, type: 'addUtility' },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        console.log(result);
        this.investmentPeriods.push({
        id: Math.floor(Math.random() * 10),
        name: result
      })
        this.sharedService.openSnackBar('Investment Period Added', '', 3000, 'bg-success');
      }
    });
  }



  


      // confirm delete
      openConfirmDialog(item: any, utility: any){
        let message;
        if(item){
  message = `You really want to delete ${utility} "${item}"?`;
        }else{
          message = `You really want to  delete this?`;
        }
        const  dialogRef = this.dialog.open(DashboardDeleteConfirmDialogComponent, {  
          //  width: '300px',
           data:{message: message},
        });
    
        dialogRef.afterClosed().subscribe(result => {
         if(result) {
          console.log(result);
          this.sharedService.openSnackBar(`${utility} deleted`, '', 3000, 'bg-success');
  
        }
       });
       }


  ngOnInit() {
// console.log(this.countries)
   
    // console.log(this.siteSlug);
if(this.siteSlug){
  this.active = this.siteSlug;
}
    
  }

}
