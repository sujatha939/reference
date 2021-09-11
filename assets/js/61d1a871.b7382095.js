"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[8426],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return p}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},u=Object.keys(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(a=0;a<u.length;a++)t=u[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),m=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=m(e.components);return a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,u=e.originalType,o=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=m(t),p=i,h=c["".concat(o,".").concat(p)]||c[p]||s[p]||u;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var u=t.length,l=new Array(u);l[0]=c;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var m=2;m<u;m++)l[m]=t[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4475:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return o},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var a=t(7462),i=t(3366),u=(t(7294),t(3905)),l=["components"],r={},o=void 0,m={unversionedId:"Python Course/Python round() Function",id:"Python Course/Python round() Function",isDocsHomePage:!1,title:"Python round() Function",description:"024. Python round() Function",source:"@site/docs/Python Course/024. Python round() Function.md",sourceDirName:"Python Course",slug:"/Python Course/Python round() Function",permalink:"/docs/Python Course/Python round() Function",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/024. Python round() Function.md",tags:[],version:"current",sidebarPosition:24,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python abs() Function",permalink:"/docs/Python Course/Python abs() Function"},next:{title:"Python range() Function",permalink:"/docs/Python Course/Python range() Function"}},d=[{value:"Syntax:",id:"syntax",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"Description",id:"description",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"How much Impact can Rounding Have? (Rounding vs Truncation)",id:"how-much-impact-can-rounding-have-rounding-vs-truncation",children:[]},{value:"Examples:",id:"examples",children:[]},{value:"Example 1",id:"example-1",children:[]},{value:"Example: Rounding Float Numbers",id:"example-rounding-float-numbers",children:[]},{value:"Example: Rounding Integer Values",id:"example-rounding-integer-values",children:[]},{value:"Example: Rounding on Negative Numbers",id:"example-rounding-on-negative-numbers",children:[]},{value:"Example: Round Numpy Arrays",id:"example-round-numpy-arrays",children:[{value:"Using numpy.round()",id:"using-numpyround",children:[]}]},{value:"Example: Decimal Module",id:"example-decimal-module",children:[{value:"Example:",id:"example",children:[]}]},{value:"Summary:",id:"summary",children:[]}],s={toc:d};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,u.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("ol",{start:24},(0,u.kt)("li",{parentName:"ol"},"Python round() Function")),(0,u.kt)("h1",{id:"round"},"Round()"),(0,u.kt)("p",null,"Round() is a built-in function available with python. It will return you a float number that will be rounded to the decimal places which are given as input."),(0,u.kt)("p",null,"If the decimal places to be rounded are not specified, it is considered as 0, and it will round to the nearest integer."),(0,u.kt)("h2",{id:"syntax"},"Syntax:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"round(float_num, num_of_decimals)\n")),(0,u.kt)("h3",{id:"parameters"},"Parameters"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"float_num: the float number to be rounded."),(0,u.kt)("li",{parentName:"ul"},"num_of_decimals: (optional) The number of decimals to be considered while rounding. It is optional, and if not specified, it defaults to 0, and the rounding is done to the nearest integer.")),(0,u.kt)("h2",{id:"description"},"Description"),(0,u.kt)("p",null,"The round() method takes two argument"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"the number to be rounded and"),(0,u.kt)("li",{parentName:"ul"},"the decimal places it should consider while rounding.\nThe second argument is optional and defaults to 0 when not specified, and in such case, it will round to the nearest integer, and the return type will also be an integer.")),(0,u.kt)("p",null,"When the decimal places, i.e. the second argument, is present, it will round to the number of places given. The return type will be a float."),(0,u.kt)("p",null,"If the number after the decimal place given"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"(>=5) than + 1 will be added to the final value"),(0,u.kt)("li",{parentName:"ul"},"(<5) than the final value will return as it is up to the decimal places mentioned.")),(0,u.kt)("h2",{id:"return-value"},"Return value"),(0,u.kt)("p",null,"It will return an integer value if the num_of_decimals is not given and a float value if the num_of_decimals is given. Please note the value will be rounded to +1 if the value after the decimal point is >=5 else it will return the value as it is up to the decimal places mentioned."),(0,u.kt)("h2",{id:"how-much-impact-can-rounding-have-rounding-vs-truncation"},"How much Impact can Rounding Have? (Rounding vs Truncation)"),(0,u.kt)("p",null,"The best example to show the impact of rounding is for the stock exchange market. In the past i.e in the year 1982, the Vancouver Stock Exchange (VSE): used to truncate the stock values to three decimal places on each trade."),(0,u.kt)("p",null,"It was done almost 3000 times every day. The accumulated truncations lead to a loss of around 25 points per month."),(0,u.kt)("p",null,"An example of truncating the values versus rounding is shown below."),(0,u.kt)("p",null,"Consider the floating-point numbers generated below as stock values. Right now I am generating it for a range of"),(0,u.kt)("p",null,"1,000,000 seconds between 0.01 and 0.05."),(0,u.kt)("h2",{id:"examples"},"Examples:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"arr = [random.uniform(0.01, 0.05) for _ in range(1000000)]\n")),(0,u.kt)("p",null,"To show the impact of rounding, I have written a small piece of code wherein at first, you need to use the numbers up to only 3 decimal places, i.e. truncating the number after 3 decimal places."),(0,u.kt)("p",null,"I have the original total value, the total coming from truncated values and the difference between original and truncated value."),(0,u.kt)("p",null,"On the same set of numbers, I have been using round() method up to 3 decimal places and calculating the sum and the difference between the original value and the rounded value."),(0,u.kt)("p",null,"Here are the example and the output"),(0,u.kt)("h2",{id:"example-1"},"Example 1"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'import random\n\ndef truncate(num):\n    return int(num * 1000) / 1000\n\narr = [random.uniform(0.01, 0.05) for _ in range(1000000)]\nsum_num = 0\nsum_truncate = 0\nfor i in arr:\n    sum_num = sum_num + i        \n    sum_truncate = truncate(sum_truncate + i)\n    \nprint("Testing by using truncating upto 3 decimal places")\nprint("The original sum is = ", sum_num)\nprint("The total using truncate = ", sum_truncate)\nprint("The difference from original - truncate = ", sum_num - sum_truncate)\n\nprint("\\n\\n")\nprint("Testing by using round() upto 3 decimal places")\nsum_num1 = 0\nsum_truncate1 = 0\nfor i in arr:\n    sum_num1 = sum_num1 + i        \n    sum_truncate1 = round(sum_truncate1 + i, 3)\n\n\nprint("The original sum is =", sum_num1)\nprint("The total using round = ", sum_truncate1)\nprint("The difference from original - round =", sum_num1 - sum_truncate1)\n')),(0,u.kt)("p",null,"Output:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"Testing by using truncating upto 3 decimal places\nThe original sum is =  29985.958619386867\nThe total using truncate =  29486.057\nThe difference from original - truncate =  499.9016193868665\n\n\n\nTesting by using round() up to 3 decimal places\nThe original sum is = 29985.958619386867\nThe total using round =  29985.912\nThe difference from original - round = 0.04661938686695066\n")),(0,u.kt)("p",null,"The difference between original and after truncating is 499.9016193868665, and from round, it is 0.04661938686695066"),(0,u.kt)("p",null,"The difference seems to be very big, and the example shows how to round() method helps in calculating close to accuracy."),(0,u.kt)("h2",{id:"example-rounding-float-numbers"},"Example: Rounding Float Numbers"),(0,u.kt)("p",null,"In this program, we will see how rounding words on floating numbers"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'# testing round() \n\nfloat_num1 = 10.60 # here the value will be rounded to 11 as after the decimal point the number is 6 that is >5 \n\nfloat_num2 = 10.40 # here the value will be rounded to 10 as after the decimal point the number is 4 that is <=5\n\nfloat_num3 = 10.3456 # here the value will be 10.35 as after the 2 decimal points the value >=5 \n\nfloat_num4 = 10.3445 #here the value will be 10.34 as after the 2 decimal points the value is <5 \n\nprint("The rounded value without num_of_decimals is :", round(float_num1))\nprint("The rounded value without num_of_decimals is :", round(float_num2))\nprint("The rounded value with num_of_decimals as 2 is :", round(float_num3, 2))\nprint("The rounded value with num_of_decimals as 2 is :", round(float_num4, 2))\n')),(0,u.kt)("p",null,"Output:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"The rounded value without num_of_decimals is : 11\nThe rounded value without num_of_decimals is : 10\nThe rounded value with num_of_decimals as 2 is : 10.35\nThe rounded value with num_of_decimals as 2 is : 10.34\n")),(0,u.kt)("h2",{id:"example-rounding-integer-values"},"Example: Rounding Integer Values"),(0,u.kt)("p",null,"If you happen to use round() on an integer value, it will just return you the number back without any changes."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'# testing round() on a integer\n\nnum = 15\n\nprint("The output is", round(num))\n')),(0,u.kt)("p",null,"Output:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"The output is 15\n")),(0,u.kt)("h2",{id:"example-rounding-on-negative-numbers"},"Example: Rounding on Negative Numbers"),(0,u.kt)("p",null,"Let us see few examples of how rounding works on negative numbers"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'# testing round()\n\nnum = -2.8\nnum1 = -1.5\nprint("The value after rounding is", round(num))\nprint("The value after rounding is", round(num1))\n')),(0,u.kt)("p",null,"Output:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"C:\\pythontest>python testround.py\nThe value after rounding is -3\nThe value after rounding is -2\n")),(0,u.kt)("h2",{id:"example-round-numpy-arrays"},"Example: Round Numpy Arrays"),(0,u.kt)("p",null,"How to round numpy arrays in python?"),(0,u.kt)("p",null,"To solve this, we can make use of numpy module and use numpy.round() or numpy.around() method, as shown in the example below."),(0,u.kt)("h3",{id:"using-numpyround"},"Using numpy.round()"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},"# testing round()\nimport numpy as np\n\narr = [-0.341111, 1.455098989, 4.232323, -0.3432326, 7.626632, 5.122323]\n\narr1 = np.round(arr, 2)\n\nprint(arr1)\n")),(0,u.kt)("p",null,"Output:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"C:\\pythontest>python testround.py\n[-0.34  1.46  4.23 -0.34  7.63  5.12]\n")),(0,u.kt)("p",null,"We can also use numpy.around(), which gives you the same result as shown in the example below."),(0,u.kt)("h2",{id:"example-decimal-module"},"Example: Decimal Module"),(0,u.kt)("p",null,"In addition to the round() function, python has a decimal module that helps in handling decimal numbers more accurately."),(0,u.kt)("p",null,"The Decimal module comes with rounding types, as shown below :"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"ROUND_CEILING: it will round towards Infinity,"),(0,u.kt)("li",{parentName:"ul"},"ROUND_DOWN: it will round the value towards zero,"),(0,u.kt)("li",{parentName:"ul"},"ROUND_FLOOR: it will round towards -Infinity,"),(0,u.kt)("li",{parentName:"ul"},"ROUND_HALF_DOWN: it will round to nearest value going towards zero,"),(0,u.kt)("li",{parentName:"ul"},"ROUND_HALF_EVEN: it will round to nearest with value going to nearest even integer,"),(0,u.kt)("li",{parentName:"ul"},"ROUND_HALF_UP: it will round to nearest with value going away from zero"),(0,u.kt)("li",{parentName:"ul"},"ROUND_UP: it will round where the value will go away from zero.")),(0,u.kt)("p",null,"In decimal, the quantize() method helps to round to a fixed number of decimal places, and you can specify the rounding to be used, as shown in the example below."),(0,u.kt)("h3",{id:"example"},"Example:"),(0,u.kt)("p",null,"Using round() and decimal methods"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-python"},'import  decimal \nround_num = 15.456\n\nfinal_val = round(round_num, 2)\n\n#Using decimal module\nfinal_val1 = decimal.Decimal(round_num).quantize(decimal.Decimal(\'0.00\'), rounding=decimal.ROUND_CEILING)\nfinal_val2 = decimal.Decimal(round_num).quantize(decimal.Decimal(\'0.00\'), rounding=decimal.ROUND_DOWN)\nfinal_val3 = decimal.Decimal(round_num).quantize(decimal.Decimal(\'0.00\'), rounding=decimal.ROUND_FLOOR)\nfinal_val4 = decimal.Decimal(round_num).quantize(decimal.Decimal(\'0.00\'), rounding=decimal.ROUND_HALF_DOWN)\nfinal_val5 = decimal.Decimal(round_num).quantize(decimal.Decimal(\'0.00\'), rounding=decimal.ROUND_HALF_EVEN)\nfinal_val6 = decimal.Decimal(round_num).quantize(decimal.Decimal(\'0.00\'), rounding=decimal.ROUND_HALF_UP)\nfinal_val7 = decimal.Decimal(round_num).quantize(decimal.Decimal(\'0.00\'), rounding=decimal.ROUND_UP)\n\nprint("Using round()", final_val)\nprint("Using Decimal - ROUND_CEILING ",final_val1)\nprint("Using Decimal - ROUND_DOWN ",final_val2)\nprint("Using Decimal - ROUND_FLOOR ",final_val3)\nprint("Using Decimal - ROUND_HALF_DOWN ",final_val4)\nprint("Using Decimal - ROUND_HALF_EVEN ",final_val5)\nprint("Using Decimal - ROUND_HALF_UP ",final_val6)\nprint("Using Decimal - ROUND_UP ",final_val7)\n')),(0,u.kt)("p",null,"Output:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-text"},"Using round() 15.46\nUsing Decimal - ROUND_CEILING  15.46\nUsing Decimal - ROUND_DOWN  15.45\nUsing Decimal - ROUND_FLOOR  15.45\nUsing Decimal - ROUND_HALF_DOWN  15.46\nUsing Decimal - ROUND_HALF_EVEN  15.46\nUsing Decimal - ROUND_HALF_UP  15.46\nUsing Decimal - ROUND_UP  15.46\n")),(0,u.kt)("h2",{id:"summary"},"Summary:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"Round(float_num, Num_of_decimals) is a built-in function available with python. It will return you the float number that will be rounded to the decimal places which are given as input."),(0,u.kt)("li",{parentName:"ul"},"float_num: the float number to be rounded."),(0,u.kt)("li",{parentName:"ul"},"Num_of_decimals: It is the number of decimals to be considered while rounding."),(0,u.kt)("li",{parentName:"ul"},"It will return an integer value if the num_of_decimals is not given and a float value if the num_of_decimals is given.")))}c.isMDXComponent=!0}}]);