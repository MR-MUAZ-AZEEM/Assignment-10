// 1. Write a js program to find length of a string.

// var str = "JavaScript Programming";
// console.log(str.length);

// 2. Write a js program to copy one string to another string.

// var ogstr = "This is Original.";
// var cpstr = ogstr;
// console.log(cpstr);

// 3. Write a js program to concatenate two strings.

// var str1 = "I am ";
// var str2 = "A Student";
// console.log(str1 + str2);

// 4. Write a js program to compare two strings.

// var str1 = "abc";
// var str2 = "abc";
// if(str1 == str2){
//     console.log("Compared");
// }

// 5. Write a js program to convert lowercase string to uppercase.

// var str = "assignment";
// str = str.toUpperCase();
// console.log(str);

// 6. Write a js program to convert uppercase string to lowercase.

// var str = "SIR NAVEED";
// str = str.toLowerCase();
// console.log(str);

// 7. Write a js program to toggle case of each character of a string.

// var str = "Ab";
// var fr = str.charAt(0);
// fr = fr.toLowerCase();
// var sc = str.charAt(1);
// sc = sc.toUpperCase();
// var result = fr + sc;
// console.log(result);

// 8. Write a js program to find total number of alphabets, digits or special character in a string.

// var str = "nobody157!@#";
// var alph = str.match(/[a-z]/g);
// var dig = str.match(/[0-9]/g);
// var spch = str.match(/[!,@,#,$,%,^,&,*]/g);
// var result = `Alphabets : ${alph.length}\nDigits : ${dig.length}\nSpecial Characters : ${spch.length}`
// console.log(result);

// 9. Write a js program to count total number of vowels and consonants in a string.

// var str = "faisalabad";
// var vw = str.match(/[a,e,i,o,u]/g);
// var con = str.match(/[b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]/g);
// var result = `Vowels : ${vw.length}\nConsonants : ${con.length}`;
// console.log(result);

// 10. Write a js program to count total number of words in a string.

// var str = "Saylani Student";
// var wor = str.split(" ");
// console.log(wor.length);

// 11. Write a js program to find reverse of a string.

// var str = "anas";
// var restr = str.split("");
// restr = restr.reverse();
// restr = restr.join("");
// console.log(restr);

// 12. Write a js program to check whether a string is palindrome or not.

// var str = "12121";
// var nstr = str.split("");
// nstr = nstr.reverse();
// nstr = nstr.join("");
// if(str == nstr){
//     console.log("String is Palindrome");
// }
// else{
//     console.log("String is NOT Palindrome");
// }

// 13. Write a js program to reverse order of words in a given string

// var str = "one two three";
// var restr = str.split(" ");
// restr = restr.reverse();
// restr = restr.join(" ");
// console.log(restr);

// 14. Write a js program to find first occurrence of a character in a given string.

// var str = prompt("Enter The Word:");
// var nstr = str.match(prompt("Enter The Character:"));
// var ind = str.indexOf(nstr[0]);
// console.log(`The Character is at ${ind} Index.`);
