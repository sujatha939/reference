"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[9923],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=r,d=c["".concat(u,".").concat(h)]||c[h]||m[h]||i;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5667:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={},u=void 0,s={unversionedId:"Python Course/Python Enumerate",id:"Python Course/Python Enumerate",isDocsHomePage:!1,title:"Python Enumerate",description:"031. Python Enumerate",source:"@site/docs/Python Course/031. Python Enumerate.md",sourceDirName:"Python Course",slug:"/Python Course/Python Enumerate",permalink:"/docs/Python Course/Python Enumerate",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/031. Python Enumerate.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Counter",permalink:"/docs/Python Course/Python Counter"},next:{title:"Python Sleep",permalink:"/docs/Python Course/Python Sleep"}},p=[{value:"Syntax of Python enumerate()",id:"syntax-of-python-enumerate",children:[{value:"Parameters",id:"parameters",children:[]},{value:"ReturnValue:",id:"returnvalue",children:[]}]},{value:"Enumerate() in Python Example",id:"enumerate-in-python-example",children:[{value:"Example",id:"example",children:[]}]},{value:"UsingEnumerate() on a list with startIndex",id:"usingenumerate-on-a-list-with-startindex",children:[]},{value:"Looping Over an Enumerate object",id:"looping-over-an-enumerate-object",children:[{value:"Example:",id:"example-2",children:[]}]},{value:"Enumerating a Tuple",id:"enumerating-a-tuple",children:[{value:"Example:",id:"example-3",children:[]}]},{value:"Enumerating a String",id:"enumerating-a-string",children:[]},{value:"Enumerate a dictionary",id:"enumerate-a-dictionary",children:[]},{value:"Advantages of using Enumerate",id:"advantages-of-using-enumerate",children:[]},{value:"Summary",id:"summary",children:[]}],m={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",{start:31},(0,i.kt)("li",{parentName:"ol"},"Python Enumerate")),(0,i.kt)("h1",{id:"what-is-python-enumerate"},"What is Python Enumerate?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Python Enumerate()")," is a buit-in function available with the Python library. It takes the given input as a collection or tuples and returns it as an enumerate object. The Python Enumerate() command adds a counter to each item of the iterable object and returns an enumerate object as an output string."),(0,i.kt)("h2",{id:"syntax-of-python-enumerate"},"Syntax of Python enumerate()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"enumerate(iterable, startIndex)\n")),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"Three parameters are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Iterable: an object that can be looped."),(0,i.kt)("li",{parentName:"ul"},"StartIndex: (optional) The count will start with the value given in the startIndex for the first item in the loop and increment it for the nextitem till it reaches the end of the loop.")),(0,i.kt)("p",null,"However, If startIndex is not specified, the count will start from 0."),(0,i.kt)("h3",{id:"returnvalue"},"ReturnValue:"),(0,i.kt)("p",null,"It will return an iterableobject, with countvalue to each of the items to the iteratorobject given as input."),(0,i.kt)("h2",{id:"enumerate-in-python-example"},"Enumerate() in Python Example"),(0,i.kt)("p",null,"Enumerate method comes with an automatic counter/index to each of the items present in the Enumerate list in Python. The firstindex value will start from 0. You can also specify the startindex by using the optional parameter startIndex in enumerate."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"In the code below, mylist is the list given to Enumerate function in Python. The list() function is used to display the Enumerate Python output."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," There is no startIndex used hence the index for the firstitem will start from 0."),(0,i.kt)("p",null,"The output from enumerate will be in the following manner:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"(0, item_1), (1, item_2), (2, item_3), \u2026 (n, item_n)\n")),(0,i.kt)("p",null,"File: python_enumerate.py"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"mylist = ['A', 'B' ,'C', 'D']\ne_list = enumerate(mylist)\nprint(list(e_list))\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"[(0, 'A'), (1, 'B'), (2, 'C'), (3, 'D')]\n")),(0,i.kt)("h2",{id:"usingenumerate-on-a-list-with-startindex"},"UsingEnumerate() on a list with startIndex"),(0,i.kt)("p",null,"In the below example, the startindex given as 2.The index of the firstitem will start from the given startindex."),(0,i.kt)("h1",{id:"example-1"},"Example:"),(0,i.kt)("p",null,"In the example below, mylist is the list given to enumerate. The list() function is used to display the enumerate output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"mylist = ['A', 'B' ,'C', 'D']\ne_list = enumerate(mylist,2)\nprint(list(e_list))\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[(2, 'A'), (3, 'B'), (4, 'C'), (5, 'D')]\n")),(0,i.kt)("h2",{id:"looping-over-an-enumerate-object"},"Looping Over an Enumerate object"),(0,i.kt)("p",null,"The example shows enumerating over an object with and without startIndex."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The first for-loop does not have startIndex, so the index starts from 0."),(0,i.kt)("li",{parentName:"ul"},"The second for-loop has startIndex as 10, so the index is starting from 10.")),(0,i.kt)("h3",{id:"example-2"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"mylist = ['A', 'B' ,'C', 'D']\n\nfor i in enumerate(mylist):\n  print(i)\n  print(\"\\n\")\n\nprint(\"Using startIndex as 10\")    \n\nfor i in enumerate(mylist, 10):\n  print(i)\n  print(\"\\n\")\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"(0, 'A')\n(1, 'B')\n(2, 'C')\n(3, 'D')\n\nUsing startIndex as 10\n(10, 'A')\n(11, 'B')\n(12, 'C')\n(13, 'D')\n")),(0,i.kt)("h2",{id:"enumerating-a-tuple"},"Enumerating a Tuple"),(0,i.kt)("p",null,"In the below example, you can use a tuple inside an enumerate. You can also use a startIndex, and the key to each item will start from the startIndexgiven."),(0,i.kt)("p",null,"By default, the startIndex is 0. There, hence you see key as 0 for items A and 1 for B and so on."),(0,i.kt)("h3",{id:"example-3"},"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'my_tuple = ("A", "B", "C", "D", "E")\nfor i in enumerate(my_tuple):\n  print(i)\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"(0, 'A')\n(1, 'B')\n(2, 'C')\n(3, 'D')\n(4, 'E')\n")),(0,i.kt)("h2",{id:"enumerating-a-string"},"Enumerating a String"),(0,i.kt)("p",null,"In Python, the string is an array, and hence you can loop over it. If you pass a string to enumerate(), the output will show you the index and value for each character of the string."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'my_str = "Guru99 "\nfor i in enumerate(my_str):\n  print(i)\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"(0, 'G')\n(1, 'u')\n(2, 'r')\n(3, 'u')\n(4, '9')\n(5, '9')\n")),(0,i.kt)("h2",{id:"enumerate-a-dictionary"},"Enumerate a dictionary"),(0,i.kt)("p",null,"In Python, a dictionary is listed in curly brackets, inside these curly brackets, the values are declared."),(0,i.kt)("p",null,"Each element is a key/value pair and separated by commas. You can use a dictionary inside a enumerate() and see the output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'my_dict = {"a": "PHP", "b":"JAVA", "c":"PYTHON", "d":"NODEJS"}\nfor i in enumerate(my_dict):\n  print(i)\n')),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"(0, 'a')\n(1, 'b')\n(2, 'c')\n(3, 'd')\n")),(0,i.kt)("h2",{id:"advantages-of-using-enumerate"},"Advantages of using Enumerate"),(0,i.kt)("p",null,"Here, are pros/benefits of using Enumerate in Python:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enumerate allows you to loop through a list, tuple, dictionary, string, and gives the values along with the index."),(0,i.kt)("li",{parentName:"ul"},"To get index value using for-loop, you can make use of list.index(n). However, list.index(n) is very expensive as it will traverse the for-loop twice. Enumerate is very helpful in such a case as it gives the index and items at one go.")),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enumerate() function is a built-in function available with python. Enumerate() function adds a counter to each item of the iterable object and returns an enumerate object."),(0,i.kt)("li",{parentName:"ul"},"In Enumeration in Python, you can specify the startIndex, i.e., the counter you want the values to start from."),(0,i.kt)("li",{parentName:"ul"},"Enumerate can be used to loop over a list, tuple, dictionary, and string."),(0,i.kt)("li",{parentName:"ul"},"Enumerate is very helpful when you want the index and the value when looping over list, tuple, dictionary, etc."),(0,i.kt)("li",{parentName:"ul"},"Enumerate comes with an automatic counter/index to each of the items present in the list. The first index value will start from 0. You can also specify the startindex by using the optional parameter startIndex in enumerate."),(0,i.kt)("li",{parentName:"ul"},"If you pass a string to enumerate(), the output will show you the index and value for each character of the string.")))}c.isMDXComponent=!0}}]);