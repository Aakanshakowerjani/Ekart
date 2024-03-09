export class Cards
{
  cardName:string='';
  cardNo:string='';
  expMonth:string='';
  expYear:string='';
  cvv:string=''
  constructor(cardName:string,cardNo:string,expMonth:string,expYear:string)
  {
    this.cardName=cardName;
    this.cardNo=cardNo;
    this.expMonth=expMonth;
    this.expYear=expYear;
  }
}
