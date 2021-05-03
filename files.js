/*const files = {'back_end_development.html': `<h1>Back-end development</h1>
Back-end development is developing the code for a website that runs on the server. It, for examplee, saves data in a database. A variety of programming languages can be used such as <a href="./javascript.html">JavaScript</a>, <a href="./python.html">Python</a> and <a href="./java.html">Java</a> by using web <dfn>frameworks</dfn>.`,
'cpp.html': `<h1>C++</h1>
C++ is a <a href="./programming_language.html">programming language</a> designed as an extenstion of the C programming language, most importantly adding object-oriented programming. It is low-level, requiring manual memory management and having a weak type system. <a href="java.html">Java</a> has been designed as a more high-level alternative to C++, improving developer experience but running slower.`,
'css.html': `<h1>CSS</h1>
CSS is a language used in <a href="./front_end_development.html">front-end development</a>. It is used for describing the styling of webpages - for example, the background color of elements. It is used by loading it from an <a href="html.html">HTML</a> file. This can be done in a variety of ways: by adding it to an HTML tag, adding it within a certain tag at the start of an HTML file or by using a certain tag to load it from an external file.`,
'front_end_development.html': `<h1>Front-end development</h1>
Front-end development is developing the code for a website that runs in the browser. The technologies involved are <a href="html.html">HTML</a>,<a href="css.html">CSS</a> and <a href="javascript.html">JavaScript</a>.`,
'html.html': `<h1>HTML</h1>
HTML is a markup language interpreted by a web browser, used for <a href="./front_end_development.html">front-end development</a>. It defines the structure of a webpage by using <dfn>tags</dfn>. A browser can load only HTML pages - in order to load <a href="css.html">CSS</a> or <a href="javascript.html">JavaScript</a>, they have to be embedded in the HTML file (using certain tags).`,
'interpreted_language.html': `<h1>Interpreted languages</h1>
Interpreted languages are languages that can be executed immediately (by an <dfn>interpreter</dfn>) without first having to be converted (<dfn>compiled</dfn>) into machine code. Such languages can be easier and faster to program in but can be slower to run and result in missed errors. Examples include <a href="./javascript.html">JavaScript</a> and <a href="./python.html">Python</a>.`,
'java.html': `<h1>Java</h1>
Java is an object-oriented <a href="./programming_language.html">programming language</a> with a strong static type system, allowing a large amount of errors to be caught at run-time. It is used in a variety of contexts, such as desktop and mobile development. It can also be used for <a href="./back_end_development.html">back-end development</a> by using frameworks such as Spring.`,
'javascript.html': `<h1>JavaScript</h1>
JavaScript is a <a href="./interpreted_language.html">interpreted</a> <a href="programming_language.html">programming language</a> that is run by browsers in order to add interactivity to webpages. This means it is used for <a href="./front_end_development.html">fron-end development</a>. Implementations exist for other purposes as well - for example, Node.js allows JavaScript to be used for <a href="./back_end_development.html">back-end development</a>.`,
'programming_language.html': `<h1>Programming language</h1>
A programming language is a way to give instructions to a computer by using text files. These usually use English keywords in a structured way, allowing the programs to be easily written and read by humans. There is a large variety of programming languages available such as:
<ul>
  <li><a href="python.html">Python</a></li>
  <li><a href="./javascript.html">JavaScript</a></li>
  <li><a href="cpp.html">C++</a/></li>
  <li><a href="java.html">Java</a/></li>
</ul>`,
'python.html': `<h1>Python</h1>
Python is a <a href="./interpreted_language.html">interpreted</a> <a href="./programming_language.html">programming language</a>. It attempts to be easy to read and understand by, for example, using indentation instead of curly braces, being dynamically typed and having a large number of built-in functions. It can be used for <a href="./back_end_development.html">back-end development</a> by using a framework such as Django.`,
'web_development.html': `<h1>Web development</h1>
Web development is the work involved in developing a Web site for the Internet. It consists of <a href="front_end_development.html">front end</a> and <a href="back_end_development.html">back end</a> development.`};
*/

const fileNames =
[ 'back_end_development.html'
, 'cpp.html'
, 'css.html'
, 'front_end_development.html'
, 'html.html'
, 'interpreted_language.html'
, 'java.html'
, 'javascript.html'
, 'programming_language.html'
, 'python.html'
, 'web_development.html'
];

const files = {};
for (const fileName of fileNames) {
  fetch(`https://s-denisov.github.io/search/${fileName}`).then(response => response.text().then(htmlText => {
    files[fileName] = htmlText;
  }))
}
