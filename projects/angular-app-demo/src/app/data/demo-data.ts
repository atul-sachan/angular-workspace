import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './models/product';
import { Book } from './models/book';
import { Reader } from './models/reader';

export class DemoData implements InMemoryDbService {

    createDb() {
        const products: Product[] = [
            {
                id: 1,
                productName: 'Leaf Rake',
                productCode: 'GDN-0011',
                description: 'Leaf rake with 48-inch wooden handle',
                starRating: 3.2
            },
            {
                id: 2,
                productName: 'Garden Cart',
                productCode: 'GDN-0023',
                description: '15 gallon capacity rolling garden cart',
                starRating: 4.2
            },
            {
                id: 5,
                productName: 'Hammer',
                productCode: 'TBX-0048',
                description: 'Curved claw steel hammer',
                starRating: 4.8
            },
            {
                id: 8,
                productName: 'Saw',
                productCode: 'TBX-0022',
                description: '15-inch steel blade hand saw',
                starRating: 3.7
            },
            {
                id: 10,
                productName: 'Video Game Controller',
                productCode: 'GMG-0042',
                description: 'Standard two-button video game controller',
                starRating: 4.6
            }
        ];

        const books: Book[] =[
            {
                "bookId": 1,
                "title": "Goodnight Moon",
                "author": "Margaret Wise Brown",
                "publicationYear": "1953"
            },
            {
                "bookId": 2,
                "title": "Winnie-the-Pooh",
                "author": "A. A. Milne",
                "publicationYear": "1926"
            },
            {
                "bookId": 3,
                "title": "Where the Wild Things Are",
                "author": "Maurice Sendak",
                "publicationYear": "1963"
            },
            {
                "bookId": 4,
                "title": "The Hobbit",
                "author": "J. R. R. Tolkien",
                "publicationYear": "1937"
            },
            {
                "bookId": 5,
                "title": "Curious George",
                "author": "H. A. Rey",
                "publicationYear": "1941"
            },
            {
                "bookId": 6,
                "title": "Alice's Adventures in Wonderland",
                "author": "Lewis Carroll",
                "publicationYear": "1865"
            }
        ]

        const readers: Reader[] = [
            {
                "readerId": 1,
                "name": "Marie",
                "weeklyReadingGoal": 350,
                "totalMinutesRead": 5600
            },
            {
                "readerId": 2,
                "name": "Daniel",
                "weeklyReadingGoal": 210,
                "totalMinutesRead": 3000
            },
            {
                "readerId": 3,
                "name": "Lanier",
                "weeklyReadingGoal": 140,
                "totalMinutesRead": 600
            }
        ]

        return { products, books, readers };
    }
}