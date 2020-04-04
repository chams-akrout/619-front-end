
export class ConsommateurModule {
  public constructor(

            public id?: number,
            public score?:number,
            public name?: string,
            public password?: string,
            public lastName?: string,
            public address?: string,
            public email?: string,
            public role?:string,
            public enabled?:boolean
  ){}
}
