import { Component, OnInit } from '@angular/core';
import { PensionDisbursementService } from 'src/services/pension-disbursement.service';
import { ProcessPensionService } from 'src/services/process-pension.service';
import { PensionerDetailService } from 'src/services/pensioner-detail.service';


@Component({
  selector: 'app-process-pension',
  templateUrl: './process-pension.component.html',
  styleUrls: ['./process-pension.component.css']
})
   
export class ProcessPensionComponent implements OnInit {
  pensionerDetails: any;
 sucess_code:any;
 bankName = '';
 ProcessPensionInput={
   name:'',
   accountNumber:'',
  aadhaarNumber :'', 
  pensionAmount:'',
  bankServiceCharge:'',
  typeOfPension:''
}
  constructor(private ProcessPension:ProcessPensionService,private pension_disbursement:PensionDisbursementService,
    private pension_details:PensionerDetailService) { }

  ngOnInit(): void {
    this.pensionerDetails=this.pension_disbursement.getPensionerDetails();
    this.ProcessPensionInput.name=this.pensionerDetails.name;
    this.ProcessPensionInput.accountNumber=this.pensionerDetails.accountNumber;
    this.ProcessPensionInput.typeOfPension=this.pensionerDetails.typeOfPension;
    this.ProcessPensionInput.aadhaarNumber=this.pensionerDetails.aadhaarNumber;
    this.ProcessPensionInput.pensionAmount=this.pensionerDetails.pensionAmount;
    this.ProcessPensionInput.bankServiceCharge=this.pensionerDetails.bankServiceCharge;
    this.bankName=this.pensionerDetails.bankName;
    this.ProcessPension.PensionDetails(this.pensionerDetails).subscribe(
      response=>{
        this.sucess_code=response;
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    )
  }
  onSubmit(){
    this.ProcessPension.PensionDetails(this.pensionerDetails).subscribe(
      response=>{
        this.sucess_code=response;
        console.log(response);
      },
      error=>{
        console.log(error);
      }
    )
  }
}
