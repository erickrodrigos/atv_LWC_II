import { LightningElement, api} from 'lwc';
export default class Oppdacontafilho extends LightningElement {
    @api id;
    @api nome;
    @api valor;
    @api fase;
}
