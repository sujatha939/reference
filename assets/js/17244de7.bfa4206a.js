"use strict";(self.webpackChunkreference=self.webpackChunkreference||[]).push([[795],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,f=m["".concat(a,".").concat(h)]||m[h]||p[h]||i;return n?r.createElement(f,u(u({ref:t},s),{},{components:n})):r.createElement(f,u({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=m;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9031:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],l={},a=void 0,c={unversionedId:"Python Course/Python List count()",id:"Python Course/Python List count()",isDocsHomePage:!1,title:"Python List count()",description:"043. Python List count()",source:"@site/docs/Python Course/043. Python List count().md",sourceDirName:"Python Course",slug:"/Python Course/Python List count()",permalink:"/reference/docs/Python Course/Python List count()",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Python Course/043. Python List count().md",tags:[],version:"current",sidebarPosition:43,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python Average",permalink:"/reference/docs/Python Course/Python Average"},next:{title:"Python removes Duplicates from a List",permalink:"/reference/docs/Python Course/Python removes Duplicates from a List"}},s=[{value:"Python List count()",id:"python-list-count",children:[]},{value:"Syntax:",id:"syntax",children:[]},{value:"Parameters:",id:"parameters",children:[{value:"ReturnValue:",id:"returnvalue",children:[]}]},{value:"Example 1: List Count",id:"example-1-list-count",children:[]},{value:"Example 2: Find the count of elements (Duplicates) in a givenlist",id:"example-2-find-the-count-of-elements-duplicates-in-a-givenlist",children:[]},{value:"Summary:",id:"summary",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",{start:43},(0,i.kt)("li",{parentName:"ol"},"Python List count()")),(0,i.kt)("h1",{id:"python-count"},"Python count"),(0,i.kt)("p",null,"The count() is a built-in function in Python. It will return the total count of a given element in a list. The count() function is used to count elements on a list as well as a string."),(0,i.kt)("h2",{id:"python-list-count"},"Python List count()"),(0,i.kt)("p",null,"The count() is a built-in function in Python. It will return you the count of a given element in the list."),(0,i.kt)("h2",{id:"syntax"},"Syntax:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"list.count(element)\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"element:")," The element you want to find the count."),(0,i.kt)("h3",{id:"returnvalue"},"ReturnValue:"),(0,i.kt)("p",null,"The count() method will return an integer value, i.e., the count of the given element from the given list. It returns a 0 if the value is not found in the given list."),(0,i.kt)("h2",{id:"example-1-list-count"},"Example 1: List Count"),(0,i.kt)("p",null,"Following example shows the working of count() function on a list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"list1 = ['red', 'green', 'blue', 'orange', 'green', 'gray', 'green']\ncolor_count = list1.count('green')\nprint('The count of color: green is ', color_count)\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The count of color: green is  3\n")),(0,i.kt)("h2",{id:"example-2-find-the-count-of-elements-duplicates-in-a-givenlist"},"Example 2: Find the count of elements (Duplicates) in a givenlist"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"list1 = [2,3,4,3,10,3,5,6,3]\nelm_count = list1.count(3)\nprint('The count of element: 3 is ', elm_count)\n")),(0,i.kt)("p",null,"Output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"The count of element: 3 is  4\n")),(0,i.kt)("h2",{id:"summary"},"Summary:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The count() is a built-in function in Python. It will return you the count of a given element in a list or a string."),(0,i.kt)("li",{parentName:"ul"},"In the case of a list, the element to be counted needs to be given to the count() function, and it will return the count of the element."),(0,i.kt)("li",{parentName:"ul"},"The count() method returns an integer value.")))}m.isMDXComponent=!0}}]);