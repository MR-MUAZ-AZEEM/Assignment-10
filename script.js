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
// console.log(`The First Occurence of Character is at ${ind} Index.`);

// 15. Write a js program to find last occurrence of a character in a given string.

// var str = "batman";
// var nstr = str.match(/[a]/g);
// var ind = str.lastIndexOf(nstr[0]);
// console.log(`The Last Occurence of Character is at ${ind} Index.`);

// 16. Write a js program to search all occurrences of a character in given string.

// var str = "deadpool";
// var ch = 'd'; 
// var match = str.match(/[d]/g);
// var ind = [];
// if(match){
//     let index = -1;
//     while((index = str.indexOf(ch, index + 1)) !== -1){
//         ind.push(index)
//     }
// }
// console.log("Occurences : ",match);
// console.log("Indexes : ",ind);

// 17. Write a js program to count occurrences of a character in given string.

// var str = "blackadam";
// var nstr = str.match(/[a]/g);
// console.log(`The Occurence of given Character is ${nstr.length} times.`);

// 21. Write a js program to remove first occurrence of a character from string.

// var str = "apple";
// var ch = str.indexOf('p');
// var nstr1 = str.slice(0, 1);
// var nstr2 = str.slice(2);
// var result = nstr1 + nstr2;
// console.log(result);

// 22. Write a js program to remove last occurrence of a character from string.

// var str = "program";
// var ch = str.lastIndexOf('r');
// var nstr1 = str.slice(0, 4);
// var nstr2 = str.slice(5);
// var result = nstr1 + nstr2;
// console.log(result);

// 23. Write a js program to remove all occurrences of a character from string.

// var str = "character";
// var ch = 'c'; 
// var match = str.match(/[c]/g);
// var ind = [];
// if(true){
//     let index = -1;
//     while((index = str.indexOf(ch, index + 1)) !== -1){
//         ind.push(index)
//     }
// }
// var nstr1 = str.slice(1, 5);
// var nstr2 = str.slice(6);
// var res = nstr1 + nstr2;
// console.log(res);

// 25. Write a js program to replace first occurrence of a character with another in a string.

// var str = "critics";
// str = str.replace('c','t');
// console.log(str);

// 26. Write a js program to replace last occurrence of a character with another in a string.

// var str = "inception";
// var ind = str.lastIndexOf('i');
// var nstr1 = str.slice(0, 6);
// var nstr2 = str.slice(7);
// var res = nstr1 + 'o' + nstr2;
// console.log(res);

// 27. Write a js program to replace all occurrences of a character with another in a string.

// var str = "alexander";
// str = str.replaceAll('e', 'i');
// console.log(str);
