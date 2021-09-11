"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[1773],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4350:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={},s=void 0,u={unversionedId:"Python Course/Python Sleep",id:"Python Course/Python Sleep",isDocsHomePage:!1,title:"Python Sleep",description:"032. Python Sleep",source:"@site/docs/Python Course/032. Python Sleep.md",sourceDirName:"Python Course",slug:"/Python Course/Python Sleep",permalink:"/docs/Python Course/Python Sleep",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/032. Python Sleep.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Enumerate",permalink:"/docs/Python Course/Python Enumerate"},next:{title:"Python New line",permalink:"/docs/Python Course/Python New line"}},p=[{value:"time.sleep() Syntax",id:"timesleep-syntax",children:[{value:"Parameters:",id:"parameters",children:[]}]},{value:"Example: Using sleep() function in Python",id:"example-using-sleep-function-in-python",children:[{value:"Step 1:",id:"step-1",children:[]}]},{value:"How to delay the execution of function using sleep()?",id:"how-to-delay-the-execution-of-function-using-sleep",children:[]},{value:"What are the different ways to add a delay in Python Script?",id:"what-are-the-different-ways-to-add-a-delay-in-python-script",children:[{value:"Using sleep() function",id:"using-sleep-function",children:[]},{value:"Example:",id:"example",children:[]}]},{value:"Using asyncio.sleep function available from (Python 3.4 or higher)",id:"using-asynciosleep-function-available-from-python-34-or-higher",children:[]},{value:"Using Event().wait",id:"using-eventwait",children:[]},{value:"Using Timer",id:"using-timer",children:[]},{value:"Summary:",id:"summary",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",{start:32},(0,i.kt)("li",{parentName:"ol"},"Python Sleep")),(0,i.kt)("h1",{id:"what-is-python-sleep"},"What is Python Sleep?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Python sleep()")," is a function used to delay the execution of code for the number of seconds given as input to sleep(). The sleep() command is a part of the time module. You can use the sleep() function to temporarily halt the execution of your code. For example, you are waiting for a process to complete or a file upload."),(0,i.kt)("h2",{id:"timesleep-syntax"},"time.sleep() Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import time\ntime.sleep(seconds)\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"seconds:")," The number of seconds you want the execution of your code to be halted."),(0,i.kt)("h2",{id:"example-using-sleep-function-in-python"},"Example: Using sleep() function in Python"),(0,i.kt)("p",null,"Follow the steps given below to add sleep() in your python script."),(0,i.kt)("h3",{id:"step-1"},"Step 1:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import time\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Add time.sleep()"),(0,i.kt)("p",null,"The number 5 given as input to sleep(), is the number of seconds you want the code execution to halt when it is executed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"time.sleep(5)\n")),(0,i.kt)("p",null,"Here is a working code along with messages inside print(), to show the delay of message display on the terminal when executed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import time\nprint("Welcome to guru99 Python Tutorials")\ntime.sleep(5)\nprint("This message will be printed after a wait of 5 seconds")\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Welcome to guru99 Python Tutorials\nThis message will be printed after a wait of 5 seconds\n")),(0,i.kt)("h2",{id:"how-to-delay-the-execution-of-function-using-sleep"},"How to delay the execution of function using sleep()?"),(0,i.kt)("p",null,'The example shown below has a function defined called display(). The display() function prints a message "Welcome to Guru99 Tutorials". When the function is called, it will execute and display the message inside the terminal.'),(0,i.kt)("p",null,"To add delay to the execution of the function, let us add the time.sleep in Python before making a call to the function. During the execution, Python time.sleep will halt there for the number of seconds given, and later the function display() will be called."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import time\n\nprint('Code Execution Started')\n\ndef display():\n    print('Welcome to Guru99 Tutorials')\n    time.sleep(5)\n\ndisplay()\nprint('Function Execution Delayed')\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Code Execution Started\nWelcome to Guru99 Tutorials\nFunction Execution Delayed\n")),(0,i.kt)("h2",{id:"what-are-the-different-ways-to-add-a-delay-in-python-script"},"What are the different ways to add a delay in Python Script?"),(0,i.kt)("h3",{id:"using-sleep-function"},"Using sleep() function"),(0,i.kt)("p",null,"We have seen a few examples earlier on how to use time.sleep(). Let us try a different example here using time.sleep()."),(0,i.kt)("h3",{id:"example"},"Example:"),(0,i.kt)("p",null,"The code has a for loop that will take the string variable and print each character with a delay of 1 seconds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import time\nmy_message = "Guru99"\nfor i in my_message:\n   print(i)\n   time.sleep(1)\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"G\nu\nr\nu\n9\n9\n")),(0,i.kt)("h2",{id:"using-asynciosleep-function-available-from-python-34-or-higher"},"Using asyncio.sleep function available from (Python 3.4 or higher)"),(0,i.kt)("p",null,"You can make use of asyncio.sleep with python version 3.4 and higher. To make use of the asyncio sleep method, you need to add async and await to the function, as shown in the example below:"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,'The script has a function call display() that prints a message "Welcome to Guru99 tutorials". There are two keywords used in the function async and await. The async keyword is added at the start of the function definition, and await is added just before the asyncio.sleep(). Both the keywords async / await are meant to handle the asynchronous task.'),(0,i.kt)("p",null,"When the function display() is called, and it encounters await asyncio.sleep(5), the code will sleep or halt at that point for 5 seconds and, once done, will print the message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\n\nprint('Code Execution Started')\n\nasync def display():\n    await asyncio.sleep(5)\n    print('Welcome to Guru99 Tutorials')\n\nasyncio.run(display())\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Code Execution Started\nWelcome to Guru99 Tutorials\n")),(0,i.kt)("h2",{id:"using-eventwait"},"Using Event().wait"),(0,i.kt)("p",null,"The Event().wait method comes from the threading module. Event.wait() method will halt the execution of any process for the number of seconds it takes as an argument. The working of Event is shown in the example below:"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"The code is using Event().wait(5).The number 5 is the number of seconds the code will delay to go to the next line that calls the function display(). Once the 5 seconds are done, the function display() will be called, and the message will be printed inside in the terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from threading import Event\n\nprint('Code Execution Started')\n\ndef display():\n    print('Welcome to Guru99 Tutorials')\n\n\nEvent().wait(5) \ndisplay()\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Code Execution Started\nWelcome to Guru99 Tutorials\n")),(0,i.kt)("h2",{id:"using-timer"},"Using Timer"),(0,i.kt)("p",null,"The Timer is another method available with Threading, and it helps to get the same functionality as Python time sleep. The working of the Timer is shown in the example below:"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("p",null,"A Timer takes in input as the delay time in Python in seconds, along with a task that needs to be started. To make a timer working, you need to call the start() method. In the code, the Timer is given 5 seconds, and the function display that has to be called when 5 seconds are done. The timer will start working when the Timer.start() method is called."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from threading import Timer\n\nprint('Code Execution Started')\n\ndef display():\n    print('Welcome to Guru99 Tutorials')\n\nt = Timer(5, display)  \nt.start()\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Code Execution Started\nWelcome to Guru99 Tutorials\n")),(0,i.kt)("h2",{id:"summary"},"Summary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Python sleep() function will pause Python code or delay the execution of program for the number of seconds given as input to sleep(). The sleep() function is part of the Python time module."),(0,i.kt)("li",{parentName:"ul"},"You can make use of Python sleep function when you want to temporarily halt the execution of your code. For example, in case you are waiting for another process to complete, or a file upload, etc."),(0,i.kt)("li",{parentName:"ul"},"There are many ways to add Python delay function to code besides sleep, and they are using asyncio.sleep , Event().wait and Timer."),(0,i.kt)("li",{parentName:"ul"},"Similar to sleep() method, there is asyncio.sleep() method with python version 3.4 and higher. To make use of the asyncio sleep method, you need to add async and await to the function"),(0,i.kt)("li",{parentName:"ul"},"The Event().wait method comes from the threading module. Event.wait() method will halt the execution of any process for the number of seconds it takes as an argument."),(0,i.kt)("li",{parentName:"ul"},"The Timer is another method available with Threading, and it helps to get the same functionality as sleep")))}d.isMDXComponent=!0}}]);