import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardDeleteConfirmDialogComponent } from '../_dialogs/dashboard-delete-confirm-dialog/dashboard-delete-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'src/app/services/shared.service';
import { DashboardCreateAccountDialogComponent } from '../_dialogs/dashboard-create-account-dialog/dashboard-create-account-dialog.component';
import { ApiService } from 'src/app/services/api.service';

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

// Country array
genders = [];

// Country array
countries = [];

// Account Type
accountTypes = [ ];

// denominations
denominations = [];

// promotionTypes
promotionTypes = [];

//investmentPeriods
investmentPeriods = [];
// gettingUtility = true;
  constructor(private router: Router, private dialog: MatDialog, private sharedService: SharedService, private apiServive: ApiService) { }

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




    




// ============================
// ADD UTILITY
// ===========================


        // form dialog
// openAddUtilityDialog(): void {
//   let title = 'Add Utility';
//   const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
//     //  width: '400px',
//      data:{ title:  title, type: 'addUtility' },
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     if(result) {
//      console.log(result);
//      this.sharedService.openSnackBar('Account deleted', '', 4000, 'bg-success');
//    }
//   });
// }


// 01. add gender
addGenderDialog(): void {
  let title = 'Add Gender';
  const  dialogRef = this.dialog.open(DashboardCreateAccountDialogComponent, {  
      // width: '400px',
      data:{ title:  title, type: 'addUtility' },
  });

  dialogRef.afterClosed().subscribe(result => {

    if(result) {     
      this.sharedService.openSnackBar('Please Wait..', '', 3000, 'bg-dark');
      this.apiServive.addGender({name: result}).subscribe(
      res => {
      console.log(res);
      this.getGengers();
      this.sharedService.openSnackBar('Gender Added', '', 3000, 'bg-success');
      }, 
      err =>{
      console.log(err);
      this.sharedService.openSnackBar('Error adding Gender', '', 3000, 'bg-danger');
      });
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
      this.sharedService.openSnackBar('Please Wait..', '', 9000, 'bg-dark');
      this.apiServive.addCountry({name: result}).subscribe(
      res => {
      console.log(res);
      this.getCountries();
      this.sharedService.openSnackBar('Country Added', '', 3000, 'bg-success');
      }, 
      err =>{
      console.log(err);
      this.sharedService.openSnackBar('Error adding Country', '', 3000, 'bg-danger');
      });
  
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
      this.sharedService.openSnackBar('Please Wait..', '', 9000, 'bg-dark');
      this.apiServive.addAccountType({name: result}).subscribe(
      res => {
      console.log(res);
      this.getAccountTypes();
      this.sharedService.openSnackBar('Account type Added', '', 3000, 'bg-success');
      }, 
      err =>{
      console.log(err);
      this.sharedService.openSnackBar('Error adding Account type', '', 3000, 'bg-danger');
      });
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
      this.sharedService.openSnackBar('Please Wait..', '', 9000, 'bg-dark');
      this.apiServive.addDenomination({name: result}).subscribe(
      res => {
      console.log(res);
      this.getDenominations();
      this.sharedService.openSnackBar('Denomination Added', '', 3000, 'bg-success');
      }, 
      err =>{
      console.log(err);
      this.sharedService.openSnackBar('Error adding Denomination', '', 3000, 'bg-danger');
      });
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
        this.sharedService.openSnackBar('Please Wait..', '', 9000, 'bg-dark');
        this.apiServive.addPromotionType({name: result}).subscribe(
        res => {
        console.log(res);
        this.getPromotionTypes();
        this.sharedService.openSnackBar('Promotion Type Added', '', 3000, 'bg-success');
        }, 
        err =>{
        console.log(err);
        this.sharedService.openSnackBar('Error adding Promotion Type', '', 3000, 'bg-danger');
        });
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
        this.sharedService.openSnackBar('Please Wait..', '', 9000, 'bg-dark');
        this.apiServive.addInvestmentPeriod({name: result}).subscribe(
        res => {
        console.log(res);
        this.getInvestmentPeriods();
        this.sharedService.openSnackBar('Investment Period Added', '', 3000, 'bg-success');
        }, 
        err =>{
        console.log(err);
        this.sharedService.openSnackBar('Error adding Investment Period', '', 3000, 'bg-danger');
        });
      }
    });
  }


  /// GET UTILITY ///
getCountries(){
  this.apiServive.getCountries().subscribe(
    res => {
     console.log('getCountries', res.country);
     this.countries = res.country;
    },
    err => {
    console.log('getCountries Error', err);
    }
  )
}
getGengers(){
  this.apiServive.getGengers().subscribe(
    res => {
     console.log('getGengers', res.gender);
     this.genders = res.gender;
    },
    err => {
    console.log('getGengers', err);
    }
  )
}
getPromotionTypes(){
  this.apiServive.getPromotionTypes().subscribe(
    res => {
     console.log('getPromotionTypes', res.promotionType);
     this.promotionTypes = res.promotionType;
    },
    err => {
    console.log('getPromotionTypes', err);
    }
  )
}
getDenominations(){
  this.apiServive.getDenominations().subscribe(
    res => {
     console.log('getDenominations', res.denomination);
     this.denominations = res.denomination;
    },
    err => {
    console.log('getDenominations', err);
    }
  )
}
getInvestmentPeriods(){
  this.apiServive.getInvestmentPeriods().subscribe(
    res => {
     console.log('getInvestmentPeriods', res.investmentPeriod);
     this.investmentPeriods =  res.investmentPeriod;
    },
    err => {
    console.log('getInvestmentPeriods', err);
    }
  )
}
getAccountTypes(){
  this.apiServive.getAccountTypes().subscribe(
    res => {
     console.log('getAccountTypes', res.accountType);
     this.accountTypes = res.accountType;
    },
    err => {
    console.log('getAccountTypes', err);
    }
  )
}
getBankDetails(){
  this.apiServive.getBankDetails().subscribe(
    res => {
     console.log('getBankDetails', res);
    },
    err => {
    console.log('getBankDetails', err);
    }
  )
}


  


      // confirm delete
      openConfirmDialog(item: any, utility: any, id, utilityType){
        let message;
        if(item){
          message = `You really want to delete ${utility} "${item}" "${id}"?`;
        }else{
          message = `You really want to  delete this?`;
        }
        const  dialogRef = this.dialog.open(DashboardDeleteConfirmDialogComponent, {  
          //  width: '300px',
           data:{message: message},
        });
    
        dialogRef.afterClosed().subscribe(result => {
         if(result) {
           if(utilityType.toLowerCase() === 'gender'){
        
            this.apiServive.deleteGender(id).subscribe(
              res => {
                this.getGengers();
                this.sharedService.openSnackBar(`Gender Deleted`, '', 3000, 'bg-success');
              },
              err => {
                console.log(err);
                this.sharedService.openSnackBar(`Error deleting gender`, '', 3000, 'bg-danger');
              })

           }else if(utilityType.toLowerCase() === 'country'){
            
            this.apiServive.deleteCountry(id).subscribe(
              res => {
                this.getCountries();
                this.sharedService.openSnackBar(`Country Deleted`, '', 3000, 'bg-success');
              },
              err => {
                console.log(err);
                this.sharedService.openSnackBar(`Error deleting Country`, '', 3000, 'bg-danger');
              });

           }else if(utilityType.toLowerCase() === 'accountType'){
          
            this.apiServive.deleteAccountType(id).subscribe(
              res => {
                this.getAccountTypes();
                this.sharedService.openSnackBar(`Account Type Deleted`, '', 3000, 'bg-success');
              },
              err => {
                console.log(err);
                this.sharedService.openSnackBar(`Error deleting Accoun Type`, '', 3000, 'bg-danger');
              });

           }else if(utilityType.toLowerCase() === 'denomination'){
            this.apiServive.deleteDenomination(id).subscribe(
              res => {
                this.getDenominations();
                this.sharedService.openSnackBar(`Denomination Deleted`, '', 3000, 'bg-success');
              },
              err => {
                console.log(err);
                this.sharedService.openSnackBar(`Error deleting Denomination`, '', 3000, 'bg-danger');
              });
           
           }else if(utilityType.toLowerCase() === 'promotionType'){
            this.apiServive.deletePromotionType(id).subscribe(
              res => {
                this.getPromotionTypes();
                this.sharedService.openSnackBar(`Prommotion Type Deleted`, '', 3000, 'bg-success');
              },
              err => {
                console.log(err);
                this.sharedService.openSnackBar(`Error deleting Prommotion Type`, '', 3000, 'bg-danger');
              });
          
           }else if(utilityType.toLowerCase() === 'investmentPeriod'){
            this.apiServive.deleteInvestmentPeriod(id).subscribe(
              res => {
                this.getInvestmentPeriods();
                this.sharedService.openSnackBar(`Investment Period Deleted`, '', 3000, 'bg-success');
              },
              err => {
                console.log(err);
                this.sharedService.openSnackBar(`Error deleting Investment Period`, '', 3000, 'bg-danger');
              });
          
           }else{
            this.sharedService.openSnackBar(`Oops!! Invalid utility id.. Please refresh your browser if persist`, '', 3000, 'bg-danger');
           }
          // console.log(result);
          // this.sharedService.openSnackBar(`${utility} deleted - ${id}`, '', 3000, 'bg-success');
        }
       });
      }


  ngOnInit() {
this.getCountries();
this.getGengers();
this.getPromotionTypes();
this.getDenominations();
this.getInvestmentPeriods();
this.getAccountTypes();
this.getBankDetails();

console.log(this.countries,
            this.genders, 
            this.promotionTypes,
            this.denominations, 
            this.investmentPeriods,
            this.accountTypes
            );
// console.log(this.countries)
   
    // console.log(this.siteSlug);


if(this.siteSlug){
  this.active = this.siteSlug;
}

    
  }

}
