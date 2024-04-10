export class Book {
    public title: string;


    constructor(title: string){
        this.title = title;
    }

    public getTitle(): 'book' | 'novel'
    {
        return 'book'
    }
}



/*
public getTitle(): string | number
    {
        if(1 === 1){
            return 'hola'
        }else if(1>3){
            return 212131;
        }else{
            return true
        }
        return this.title
    }
}
*/
///
//
//
//