const array=[{id:1,name:"John",age:"18",profession:"Developer"},{id:2, name:"Jack",age:"20", profession:"Developer"},{id:3, name:"Karen", age:"19",profession:"Admin"},
{id:4, name:"Shivu", age:"22",profession:"Developer"}];

console.log(array[0].name);

const one=document.getElementById("one");

one.innerHTML=`${array[0].id}.  Name  :${array[0].name}    Profession  :${array[0].profession}   Age: ${array[0].age}`;
const newOne=one.innerHTML;

const two=document.getElementById('two');


two.innerHTML=`${array[1].id}. Name  :${array[1].name}    Profession  :${array[1].profession}   Age: ${array[1].age}`;

const newTwo=two.innerHTML;

const three=document.getElementById('three');

three.innerHTML=`${array[2].id}.  Name  :${array[2].name}    Profession  :${array[2].profession}   Age: ${array[2].age}`;

const newThree=three.innerHTML;
const four=document.getElementById('four');
four.innerHTML=`${array[3].id}.  Name  :${array[3].name}    Profession  :${array[3].profession}   Age: ${array[3].age}`;

const newFour=four.innerHTML;

const prof=document.getElementById('profession');

function filter()
{
    
    profvalue=prof.value
     if(profvalue=="profession")
     {
        one.innerHTML=newOne;
        two.innerHTML=newTwo;
        three.innerHTML=newThree;
        four.innerHTML=newFour;
        two.setAttribute('class','add');
        three.setAttribute('class','add');
        four.setAttribute('class','add');
         alert(" Select a profession before clicking the button");
       
     }
     if(profvalue=='developer')
     {
        one.innerHTML=newOne;
        two.innerHTML=newTwo;
        
       
        two.setAttribute('class','add');

        three.innerHTML=newFour;
        three.setAttribute('class','add');
        four.innerHTML="";
        four.setAttribute('class','remove');
       
    }
    if(profvalue=='admin')
    {
    
        three.innerHTML=newThree;
        one.innerHTML=newThree
        two.innerHTML="";
        three.innerHTML="";
       four.innerHTML="";
      
       two.setAttribute('class','remove');
       three.setAttribute('class','remove');
       four.setAttribute('class','remove')
    }
    
   
}



