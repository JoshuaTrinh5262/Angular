export class Math {
    constructor(private a?: number,private b?: number,private c?: number, private d?: number) {

    }
    sum() {
        console.log('sum = '+ this.a + this.b + this.c + this.d);
    }
    print() {
        console.log('a = '+ this.a);
        console.log('b = '+ this.b);
        console.log('c = '+ this.c);
        console.log('d = '+ this.d);
    }
}