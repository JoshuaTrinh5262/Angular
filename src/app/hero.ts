export class Hero {
    constructor(
      public id: number,
      public name: string,
      public age? : number,
      public gender? : string,
      public rank? : string,
      public power?: string,
      public squadId?: number,
      public isSquadLeader?: boolean,
      public alterEgo?: string
    ) {  }
}
  