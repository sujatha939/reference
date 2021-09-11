"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[6491],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return h}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=r.createContext({}),p=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=p(n.components);return r.createElement(u.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,u=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),m=p(t),h=o,d=m["".concat(u,".").concat(h)]||m[h]||c[h]||a;return t?r.createElement(d,i(i({ref:e},s),{},{components:t})):r.createElement(d,i({ref:e},s))}));function h(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7052:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},u=void 0,p={unversionedId:"Python Course/Python Main Function",id:"Python Course/Python Main Function",isDocsHomePage:!1,title:"Python Main Function",description:"020. Python Main Function",source:"@site/docs/Python Course/020. Python Main Function.md",sourceDirName:"Python Course",slug:"/Python Course/Python Main Function",permalink:"/docs/Python Course/Python Main Function",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/020. Python Main Function.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python String Find",permalink:"/docs/Python Course/Python String Find"},next:{title:"Python Function Examples",permalink:"/docs/Python Course/Python Function Examples"}},s=[{value:"The <strong>name</strong> variable and Python Module",id:"the-name-variable-and-python-module",children:[{value:"direct run:",id:"direct-run",children:[]},{value:"import as a module",id:"import-as-a-module",children:[]}]}],c={toc:s};function m(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("ol",{start:20},(0,a.kt)("li",{parentName:"ol"},"Python Main Function")),(0,a.kt)("h1",{id:"what-is-python-main-function"},"What is Python Main Function?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Python main function")," is a starting point of any program. When the program is run, the python interpreter runs the code sequentially. Main function is executed only when it is run as a Python program. It will not run the main function if it imported as a module."),(0,a.kt)("p",null,"What is the def main() function in Python? To understand this, consider the following example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n     print ("hello world!")\nprint ("Guru99")\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/Pythonnew/Python4_1.png",alt:"step"})),(0,a.kt)("p",null,'Here, we got two pieces of print- one is defined within the main function that is "Hello World" and the other is independent, which is "Guru99". When you run the function def main ():'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Only "Guru99" prints out'),(0,a.kt)("li",{parentName:"ul"},'and not the code "Hello World."')),(0,a.kt)("p",null,"It is because we did not declare the call ",(0,a.kt)("strong",{parentName:"p"},'function "if',(0,a.kt)("strong",{parentName:"strong"},"name"),'== "',(0,a.kt)("strong",{parentName:"strong"},"main"),'".')),(0,a.kt)("p",null,"It is important that after defining the main function, you call the code by if",(0,a.kt)("strong",{parentName:"p"},"name"),'== "',(0,a.kt)("strong",{parentName:"p"},"main"),'" and then run the code, only then you will get the output "hello world!" in the programming console. Consider the following code'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    print("hello world!")\n\nif __name__ == "__main__":\n    main()\n\nprint("Guru99")\n')),(0,a.kt)("p",null,"Guru99 is printed in this case."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/Pythonnew/Python4_22.png",alt:"python Main Function"})),(0,a.kt)("p",null,"Here is the explanation,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When Python interpreter reads a source file, it will execute all the code found in it."),(0,a.kt)("li",{parentName:"ul"},'When Python runs the "source file" as the main program, it sets the special variable (',(0,a.kt)("strong",{parentName:"li"},"name"),') to have a value ("',(0,a.kt)("strong",{parentName:"li"},"main"),'").'),(0,a.kt)("li",{parentName:"ul"},'When you execute the main function in python, it will then read the "if" statement and checks whether ',(0,a.kt)("strong",{parentName:"li"},"name")," does equal to ",(0,a.kt)("strong",{parentName:"li"},"main"),"."),(0,a.kt)("li",{parentName:"ul"},'In Python "if',(0,a.kt)("strong",{parentName:"li"},"name"),'== "',(0,a.kt)("strong",{parentName:"li"},"main"),'" allows you to run the Python files either as reusable modules or standalone programs.')),(0,a.kt)("h2",{id:"the-name-variable-and-python-module"},"The ",(0,a.kt)("strong",{parentName:"h2"},"name")," variable and Python Module"),(0,a.kt)("p",null,"To understand the importance of ",(0,a.kt)("strong",{parentName:"p"},"name")," variable in Python main function method, consider the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n    print("hello world!")\n\nif __name__ == "__main__":\n    main()\n\nprint("Guru99")\n\nprint("Value in built variable name is:  ",__name__)\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/2/python-main-function-new-03.png",alt:"Python Main"})),(0,a.kt)("p",null,"Now consider, code is imported as a module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import MainFunction\n\nprint("done")\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.guru99.com/images/2/python-main-function-new-04.png",alt:"Python Main "})),(0,a.kt)("p",null,"Here, is the code explanation:"),(0,a.kt)("p",null,"Like C, Python uses == for comparison while = for assignment. Python interpreter uses the main function in two ways"),(0,a.kt)("h3",{id:"direct-run"},"direct run:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),"=",(0,a.kt)("strong",{parentName:"li"},"main")),(0,a.kt)("li",{parentName:"ul"},"if statement == True, and the script in _main_will be executed")),(0,a.kt)("h3",{id:"import-as-a-module"},"import as a module"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),"= module's filename"),(0,a.kt)("li",{parentName:"ul"},"if statement == false, and the script in ",(0,a.kt)("strong",{parentName:"li"},"main"),' will not be executed\nWhen the code is executed, it will check for the module name with "if." This mechanism ensures, the main function is executed only as direct run not when imported as a module.')),(0,a.kt)("p",null,"Above examples are Python 3 codes, if you want to use Python 2, please consider following code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n  print "Hello World!"\n  \nif __name__== "__main__":\n  main()\n\nprint "Guru99"\n')),(0,a.kt)("p",null,"In Python 3, you do not need to use if__name. Following code also works"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def main():\n  print("Hello World!")\n  \nmain()\nprint("Guru99")\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Make sure that after defining the main function, you leave some indent and not declare the code right below the def main(): function otherwise, it will give indent error."))}m.isMDXComponent=!0}}]);