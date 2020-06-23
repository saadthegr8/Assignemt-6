// Chapter 21 to 25

// task1

// var first_name=prompt("Enter your first name...?");
// var last_name=prompt("Enter your last name..?");
// var full_name=first_name+" "+last_name;
// document.write("Your full name is "+full_name);


// task 2

// var mob_model=prompt("Enter your favorite mobile model..?");
// var mob_length=mob_model.length;
// document.write("My favriote phone is: "+mob_model+"<br>"+"Length of string is:"+" "+mob_length);


// task 3

// var text="Pakistan";
// var len_n=text.indexOf("n");
// document.write("String is :"+text+"Index of n is:"+len_n);

// task 4

// var text="Hello World!";
// var len_n=text.lastIndexOf("l");
// document.write("String is :"+text+"Index of l is:"+len_n);



// task 5

// var text="Pakistan";
// var find_index=text.charAt(3);
// document.write("Character of index is:"+" "+find_index);


// task 6

// var first_name=prompt("Enter your first name...?");
// var last_name=prompt("Enter your last name..?");
// var name= first_name.concat(last_name);
// document.write("Your full name is "+name);

// task 7

// var city="Hyderabad";
// var replace_city=city.replace(/Hyderabad/g,"Islamabad");
// document.write("Real city: "+city+"<br>"+"After replacement: "+" "+ replace_city);

// task 8
// var message="Ali and Sami are best friends.They play cricket and football together.";
// var replace_msg=message.replace(/and/g,"&");
// document.write("Message"+message+"<br>"+"After Repalce message"+replace_msg);


// task 9

// var str="472";
// var ch=parseInt(str);
// document.write("value"+str+"<br>"+"type"+"String"+"<br>"+"value"+ch+"<br>"+"type"+"Integer");


// task 10

// var user_input=prompt("Enter a text...");
// var change=user_input.toUpperCase();
// document.write(change);


// task 11


// var user_input=prompt("Enter a text...");
// var change=user_input.toLowerCase();
// document.write(change);


// task 12

// var num=35.36;
// var ch= num.toString();
// document.write(ch);

// task 13


// var name = prompt("Enter a username");
// var checked=true;
// for (i = 0; i <= name.length; i++)
//  {


//     if(name.charCodeAt(i) ==33 || name.charCodeAt(i)==44 || name.charCodeAt(i)==46 || name.charCodeAt(i)==64){
// checked=false;
//         alert("Please enter a valid input");
//     }

// }
// if(checked){
// alert(name);
// }




// task 14

// var fast_food= ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to ABC Bakery. What do you want to order?");
// if (fast_food.indexOf(search) !== -1) {
//     document.write(search + " is available at index " + fast_food.indexOf(search) + " in our bakery")
// } else {
//     document.write("We are sorry. " + search + " is not available in our bakery")
// }


// task 16

// var str="University of Karachi";
// var res = str.split();
// alert(res);

// task 17

// var str="Pakistan";
// var res=str.charAt(str.length-1)
// document.write("Userinput"+str+"<br>"+"Last character of input"+" "+res);


// task 18

// var str="the quick brown fox jumps over the lazy dog";
// var res=str.match(/the/g).length;
// document.write(str+"<br>"+"There are"+" "+res+" "+"occurance of words the");


// Chapter 26 to 30

// task 1
// Number= 3.452154;
// var num=Math.round(Number);
// alert("Round"+num);
// var num=Math.floor(Number);
// alert("Floor"+num);
// var num=Math.ceil(Number);
// alert("Ceil"+num);


// task 2

// var floating_point=+prompt("Enter a negative floating point..?");
// alert("Number form"+floating_point);
// var number=Math.round(floating_point);
// alert( "Round number"+number);
// var number=Math.floor(floating_point);
// alert("Floor of the number"+number);
// var number=Math.ceil(floating_point);
// alert("Cirl of the number"+number);



// task 3

// Number=(-4);
// var num = Math.abs(Number);
// document.write("The absoulte value is.."+num);

// Number=(5);
// var num = Math.abs(Number);
// document.write("The absoulte value is.."+num);

// task 4

// var dice_Roll = Math.floor( Math.random() * 6 ) +1;
// alert('Random dice value is...' + dice_Roll);

// task 5

//  var name = prompt("Enter your name...");
//  var toss=Math.floor(Math.random()*2)+1;
//  if (toss===1)
//  {
//     alert(name+"Heads"+" "+"You win");
//  }
//  else
//  {
//      alert(name+"Tail"+" "+"you win");
//  }

// task 6

// var rand=Math.floor(Math.random()*100)+1;
// alert("Random number 1 to 100 is ..."+rand);



// task 7

// var weight=+prompt("Enter your weight..?");
// var wt=parseInt(weight);
// alert(wt);

// task 8

// var user_input=+prompt("Guess number uner 1 to 10");
// var secret_num=Math.floor(Math.random()*10)+1;
// if (user_input===secret_num)
// {
// alert("you win");
// }
// else
// {
//     alert("try again");
// }


// Chapter 31 to 34

// task 1


// var b= new Date();
// alert(b);

// task 2

// var today=new Date();
// var months=["january","february","march","april","may","june","july","august","september","november","december"];
//  var this_month=months[today.getMonth()];
//  alert("Current month is"+this_month);


// task 3


// var now=new Date();
// var days=["sun","mon","tue","wed","thurs","fri","sat"];
//  var today=days[now.getDay()];
//  alert("Today is"+today);


// task 4

// var now=new Date();
// var days=["sun","mon","tue","wed","thurs","fri","sat"];
//  var today=days[now.getDay()];
//  if(days=="sat"&& days=="sun")
//  {
//      alert("Its fun day...");

//  }
//  else
//  {
//      alert("Working day");
//  }

// task 5

// var today = new Date();
// var this_months=today.getMonth();


// if (this_months<today.getMonth[16])
// {
//     alert("First fifteen of months...");

// }
// else
// {
//     alert("Last days of the month...");
// }


// task 6

// var cur_date= new Date();
// var cur_milidate= cur_date.getTime();
// var date_before=new Date("jan-1-1970");
// var datebefor_mili=date_before.getTime();
// var diff= cur_milidate-date_before;
// var diff_mili=diff/(1000*60*60);
// alert("current date"+  cur_date);
// alert("Ellapsed in mili second in jan-1-1970:"+diff);
// alert("Ellapsed in minute in jan-1-1970:"+diff_mili);




// task 7

// var d= new Date();
// var hour=d.getHours();
// if(hour>=12)
// {
//     alert("its PM");

// }
// else
// {
//     alert("Its AM");
// }

// task 8

// var later_date= new Date("Dec-31-2020");
// alert("Later date"+later_date);


// task 9

// var ram_date= new Date("June 18, 2015");
// var cur_date= new Date();
// var diff_time= cur_date-ram_date;
// var diff_days=Math.floor(diff_time/(1000*60*60*24));
// alert(diff_days+"has passed since 1st ramxan in 2015");

//task10
// var year_BegDate = new Date("Jan 01, 2020");
// var current_Date = new Date(prompt("Enter any date to calculate seconds from year start e.g.","Jun 21, 2020"));
// var year_Beg_DateMilli = year_BegDate.getTime();
// var current_DateMilli = curren_tDate.getTime();
// var diff = yearBegDateMilli - current_DateMilli;
// var diff_Seconds = Math.abs(diff / 1000);
// document.write(diff_Seconds + " seconds had past since begining of 2020");

//task11
// var cur_Date = new Date();
// document.write("Current date: " + currentDate + "<br>");    
// var set_Hours = curr_Date.set_Hours(15);
// document.write("1 hour ago, it was: " + curr_Date);

//task12

// var currentDate = new Date();
// var getCurrentYear = currentDate.getFullYear();
// document.write("Current date: " + currentDate + "<br>");    
// var setHours = currentDate.setFullYear(getCurrentYear-100);
// document.write("100 years back, it was: " + currentDate);

//task13
// var enter_Age = +prompt("Enter your age");
// var currentDate = new Date();
// var Current_Year = currentDate.getFullYear();
// var birthYear = Current_Year - enter_Age;
// document.write("Your age is " + enter_Age + "<br>");
// document.write("Your birth year is " + birthYear + "<br>");

//task14
// var Month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var customer_Name = "Noshaba naseem";
// var current_Month = new Date().getMonth();
// current_Monnth = Months[current_Month];
// var no_Units = 410;
// var charges_Unit = 16;
// var late_Amount = 350;

// document.write("<h2>K-Eletric Bill</h2>" + "<br>");
// document.write("Customer Name: " + customer_Name + "<br>");
// document.write("Month: " + current_Month + "<br>");
// document.write("Number of Units: " + no_Units + "<br>");
// document.write("Charges Per Unit: " + charges_Unit + "<br>");
// document.write("<br>");
// document.write("Net Amout Payable (within Due Date): " + no_Units*charges_Unit + "<br>");
// document.write("Late Payment Surcharge: " + late_Amount + "<br>");
// document.write("Gross Amout Payable (after Due Date): " + ((no_Units*charges_Unit)+late_Amount) + "<br>");




// chaper 35 to 38


// task 1
// function currnt_date()
// {
//     var d= new Date();
//     alert(d);
// }
// currnt_date();

// task 2

// function fullname(f_name, l_name,full_name)
// {
//     var f_name=prompt("Enter your first name...");
//     var l_name=prompt("Enter your last name...");
//     var full_name=f_name+" "+l_name;
//     alert("Your name is..."+full_name);
// }
// fullname();


// task 3

// function sum(num1,num2,add)
// {
//     var num1=+prompt("Enter first number...");
//     var num2=+prompt("Enter second number...");
//     var add =num1+num2;
//     alert("The summition of the number is..."+add);



// }
// sum();

// task 4
// function cal(num1, num2, opr) {
//     if (opr === "+") {
//         return num1 + num2;
//     }
//     else if (opr === "-") {
//         return num1 - num2;
//     }
//     else if (opr === "/") {
//         return num1 / num2;
//     }
//     else if (opr === "*") {
//         return num1 * num2;
//     }
//     else if (opr === "%") {
//         return num1 % num2;
//     }
//     else {
//         return "Wrong Command";
//     }
// }
// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var opr = prompt("Enter Operator");
// alert("Equation is " + num1 + opr + num2 + "\nOutput is " + cal(num1, num2, opr));



// task 5

// function sq_of_number(a){
//     alert("Square of the number is..."+a*a);

// }
// sq_of_number(+prompt("Enter a number..?"));

// task 6

// function factorial(x) {
//     var starting = x;
//     for (var i = x - 1; i > 0; i--) {
//         x *= i;
//     }
//     alert("Input is " + starting + "\nFactorial is " + x);
// }
// factorial(+prompt("Enter any number"));


// task 7

// function counting(a,b)
// {  
    

//     for (var i=a;i<=b;i++)
//     {
//         document.write(i+"<br>");
//     }

// }
// counting(+prompt("Enter Counting Start Number"),+prompt("Enter Counting End Number"));

// task 8

// function hypotenuse(base,perpendicular) {
    //     var final_Hypotenuse;
    //     var hyp_Square = Math.pow(base,2) + Math.pow(perpendicular,2);
    //     function cal_Square(hyp) {
    //         finalHypotenuse = Math.sqrt(hyp).toFixed(2);
    //         return final_Hypotenuse;
    //     }
    //     cal_Square(hyp_Square);
    //     return finalHypotenuse;
    // }
    // document.write(hypotenuse(10,10));

    // task9
    // function calcArea(w,h) {
    //     var A = w * h;
    //     return A;
    // }
    //Arguments As Values
    // alert("Area of Rectangle: " + calcArea(20,10));
    //Arguments As Variables
    // var width = 20;
    // var height = 10;
    // alert("Area of Rectangle: " + calcArea(width,height));

    // task10
    // function palindrome(str) {
    //     var reversed = "";
    //     for (var i = str.length-1; i >= 0; i--) {
    //         reversed += str[i];
    //     }
    //     if (str === reversed) {
    //         alert("It's a Palindrome");
    //     } else {
    //         alert("It's not a Palindrome");
    //     }
    // }
    // palindrome(prompt("Enter a string to check it's Palindrome or not"));

    // task11
    // function title_Case(str) {
    //     var spl = str.split(" ");
    //     for (var i = 0; i < spl.length; i++) {
    //         document.write(splitted[i].charAt(0).toUpperCase()+spl[i].substring(1,)+" ");
    //     }
    // }
    // title_Case(prompt("Enter any word here","This is a sample text").toLowerCase());
    
    // task12
    // function longest(str) {
    //     var strToArr = str.split(" ")
    //     var long = strToArr[0];
    //     for (var i = 1; i < strToArr.length; i++) {
    //         if (strToArr[i].length > long.length ) {
    //           long = strToArr[i];
    //         }
    //     }
    //     document.write("String: " + str + "<br>Longest Word: " + long);
    // }
    // long("This is javascript second assignment.");
    
    // task13
    // function find(str,ltr) {
    //     var spilitted = str.toLowerCase().split("");
    //     var occurances = 0;
    //     for (var i = 0; i < spilitted.length; i++) {
    //         if(spilitted[i] == ltr) {
    //             occurances++;
    //         }
    //     }
    //     document.write("Text: " + str + "<br>");
    //     document.write("There are '" + occurances + "' occurance(s) of letter '" + ltr + "'");
    // }
    // var str = "The quick brown fox jumps over lazy the dog";
    // var ltr = "o";
    // find(str,ltr);
    
    // task14
    // function circumference(r = 10) {
    //     var circumference = (2 * 3.142 * r).toFixed(2);
    //     alert("The circumference is " + circumference);
    // }
    // function calcArea(r = 10) {
    //     var area = (3.142 * (r*r)).toFixed(2);
    //     alert("The area is " + area);
    // }
    // circumference();
    // calcArea();

