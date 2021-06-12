// Khai báo interface
interface User{
  name:string,
  id:number,
}

// require cho variable
const user: User = {
  name: "Hayes",
  id: 0,
};

// require cho class
class UserAccount{
  id:number;
  name:string;
  constructor(id:number, name:string){
    this.id = id;
    this.name = name;
  }
}
const users: User = new UserAccount(1,'Khuong');

// require return value for function
function getAdminUser(): User{
  return {
    id:1,
    name:'khương',
  };
}

// require pass params for function
function deleteUser(user: User){
}

// create types.
type IsValid = true | false;

type WindowStates = 'open' | 'close' | 'minimized';

type Lockstates = 'locked' | 'unlocked';

type OddNumberOtherTens = 1 | 3 | 5 | 7 | 9;

// multiple type.
function getLength(obj: string | string[]){
  return obj.length;
}

// typeof
function wrapInArray(obj: string | string[]){
  if(typeof obj === 'string'){
    return [obj];
  }
  return obj;
}

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{name:string}>

interface Backpack<Type>{
  add: (obj:Type)=>void;
  get: ()=>Type;
}

declare const backpack: Backpack<string>;

backpack.add('khuong');
backpack.get();


// obj multiple variable 
interface Point{
  x:number;
  y:number;
}

function logPoint(point:Point){
  console.log(`${point.x} ${point.y}`);
}

const point = {x:10,y:12};
logPoint(point);

// obj multiple variable with class.
class VirtualPoint{
  x:number;
  y:number;
  constructor(x:number,y:number){
    this.x = x;
    this.y = y;
  }

}

const newVPoint = new VirtualPoint(point.x,point.y);
logPoint(newVPoint)
