//--1.concat()
let array1=[1,2,3];
let array2=[4,5];
let array3=array1.concat(array2);
 console.log("concat is "+array3);

 //--4.fillter()
 let number=[34,4,65,12,78]
 let result=number.filter((value)=>{
        return value > 50;});
         console.log(result)

//--5.find()
let a=[34,4,65,12,78]
 let b=number.find((value)=>{
        return value > 50;});
         console.log(b)

//--6.findIndex()
let c=[34,4,65,12,78]
let d=number.findIndex((value)=> {
            return value > 50;});
             console.log(d)

//--7.findlastIndex()
let e=[34,4,65,12,78]
let f=number.findLastIndex((value)=> {
        return value > 50;});
        console.log(f)

//--8.indexOf()
const g=[1,2,3,4]					
	console.log(g.indexOf(1));
	
//--9.lastIndexOf()
const h=[1,2,3,4]					
	console.log(h.lastIndexOf(1));

//--10.map()
const i=[34,4,65,12,78]
let j=i.map((value)=> {
		return value >40;
});
console.log(j)

//--11.pop()
const k=[1,2,3,4]				
		k.pop()
	console.log(k)

//--12.push()
const l=[1,2,3,4];				
     l.push(5);
     console.log(l)

//--13.reduce()
const m=[34,4,65,12,78]
let n=m.reduce((acc,value)=> {
	return acc + value;
});
console.log👎

//--14.reverse()
var o=[1,2,3,4,5]			
	console.log(o.reverse())

//--15.shift()
const p=[1,2,3,4]
p.shift(5)
console.log(p)

//--16.slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2, 4));

//--18.unshift()
const r=[1,2,3,4]
r.unshift(5)
console.log(r)