export class Warrior{
  private name:string;
	public health:number;
  constructor(name:string){
    this.name=name;
    this.health=100;
  }
    
public strike (enemy:Warrior, swings:number): void{
    enemy.health = Math.max(0, enemy.health - (swings * 10));
}
}