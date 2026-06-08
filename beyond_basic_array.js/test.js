const arr=[]
%DebugPrint(arr)


//array optimization 
//continious ,holey Array


//SMI(small integer)
//packed element
//double element(float,string,function)
 const arrtwo=[1,2,3,4,5]
 //packed_smi_elements
 arrtwo.push(6.0)
 //packed_DOUBLE_elements
 arrtwo.push("7")
 //packed_DOUBLE_elements
 arrtwo[10]=11
 //holey_element
 console.log(arrtwo);
 console.log(arrtwo.length);
 console.log(arrtwo[9]);
 
 
 


//bound check
//hasOwnProperty(Arrtwo,9)
//hasOwnProperty(Arrtwo.prototype,10)
//hasOwnProperty(object.prototype,11)

//holes are very expensive in js

//suggestion don't use holey array

//optimization order

//smi>double>packed == continious type
//h_smi>>h_double>h_packed  ==holey type

//30 variation
  


//engine--v8 ,v8-debug,
// jsvu(js version update)

//less optimized method
const arrthree= new Array(3)
arrthree[1]="1" //holey_elements
arrthree[2]="2" //holey_elements
arrthree[3]="3" //holey_elements


//more optimized
const arrfour=[]
arrfour.push("1") //packed_element
arrfour.push("2") //packed_element
arrfour.push("3") //packed_element


const arrsix=[]
arrsix.push(NaN) //double_element
arrsix.push(Infinity) //double_element
arrsix.push(undefined) //double_element
//IF once we initilized arr with these elements it treat as a double_element
//no matter after initilization you remove it
