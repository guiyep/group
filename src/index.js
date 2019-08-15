import { getPriceFromInput } from './modules/get-price-from-input';

const harrySeriesConfig = ['book1', 'book2', 'book3', 'book4', 'book5'];

const testData = ['book1', 'book1', 'book2', 'book2', 'book3', 'book3', 'book4', 'book5'];

console.log(getPriceFromInput(harrySeriesConfig, testData));