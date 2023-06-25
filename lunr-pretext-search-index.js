var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   example.org   https:\/\/example.org   copyright  "
},
{
  "id": "section1.1",
  "level": "1",
  "url": "section1.1.html",
  "type": "Section",
  "number": "1.1",
  "title": "Description of functions",
  "body": " Description of functions  A relation is a collection of pairs.  is a relation. The set of all first entries of the pairs in a relation is called the domain , and the set of all second entries is called the range . We will denote them by and , respectively.   The relation has domain and range (remember that when listing the elements of a set, we never repeat the same element twice).  The relation has domain and range   The relation has domain and range .    Note that in part a. of the last example, we can find two pairs that have the same first entry, but different second entries: and . But this is not the case for parts b. and c. In these relations, for every element of the domain, there is only one element of the range that is paired with it. So we can think of the relations in b. and c. as rules : if we are given the first entry, we can determine the second one. Such relations are called functions .   A function  from a set to a set is a relation that provides a rule for matching each element of the domain with exactly one element of the range .   So relations b. and c. in the last example are functions, but a. is not. Note that in part c. we had the two identical pairs and . This is OK for a function, because even though the first entries are the same, so are the second entries. We are just repeating twice the same rule: given , we get .   Functions from diagrams  Since a function pairs each element of the domain with only one element of the range, we can picture it by drawing an arrow from each element of the domain to the corresponding entry of the range, as in the following diagram:  A function with domain and range     Note that the element in the previous diagram is not in the range, because there is no element of the domain that is paired with it. The essential thing about a function is that it sends each element of the domain to a unique element of the range. So we cannot have one element of the domain sent to two different elements of the range. But it is OK to have two or more elements of the domain sent to the same element of the range (like the element in the figure above).  To remember this, think of the domain of a function as a set of people, and the range as a set of birthdays. Each person must have a unique birthday (a person cannot be born twice!) but it is of course OK to have two people with the same birthday.  An element of the domain is also called an input value, and an element of the range an output value.    Functions from tables  A common way to describe a function is to make a table that lists the domain elements in a row, with the corresponding range elements below, as in the following example.   The following table describes a function with domain and range .                             Sometimes it may be more convenient to list the elements as columns instead of rows, with the domain elements on the left. So the function of the previous example would be:                                    Square roots and cube roots  If we square , we get , and so we often say The square root of is . But this isn't quite right, because if we square we get as well: . So to be precise we should say A square root of is (and another one is )   This leads us to conclude that there are two square roots of , that is, and , often written as . This means that there are two solutions of the equation and that is, . BUT, we should not confuse this with the symbol . When we write we mean the positive square root of 9. So, , while the solutions of the equation are , or .   Suppose we want to solve the equation for .       The given equation    add to both sides    simplify    take square root, with sign.   So we find two solutions, .   Because the square of a negative number is positive, and the square of a positive number is positive, we can never get a negative number by squaring any real number. So for example the equation has no solutions, because if we try to solve it we get , and that is not a real number.  For cube roots, things are different. That's because if is negative, then is also negative. So for example . This means that the solution of is just , and the solution of is . Compare with the situation for squares: has two solutions, and has no solutions.   Consider the equation . We want to solve this equation for .       The given equation    subtract from both sides    simplify    take cube root, without  sign    simplify   This time we found only one solution, .   For higher exponents, such as , , etc, we just need to consider whether the exponent is even or odd. So for example has two solutions, , and has no solutions, while has one solution and has one solution .    Functions from equations  Suppose we are given an equation in two variables and , such as . If we solve it for , we find a single answer:       The given equation    add to both sides    simplify   In this case we say that the given equation defines as a function of , and we call the independent variable , and the dependent variable .  That's because if we choose any value we want for , such as , then the formula allows us to find : So the independent variable is for the input of the function (in the domain), and the dependent variable for the output (in the range).  But suppose we solve instead the same equation for :       The given equation    add to both sides    simplify    divide both sides by    take square root, with sign     This time we found two answers for a given value of : either , or . This is like a person having two birthdays. It means that the equation does not define as a function of .  While the most common name for the input variable is , and the most common name for the output variable is , it is important to bear in mind that any names can be used for either variable. So it is quite possible to have an equation that determines as a function of (see for example Problem 1.1.3).    Problems   Decide if the diagrams define functions, and give the domain and range for each function.    "
},
{
  "id": "example-1",
  "level": "2",
  "url": "section1.1.html#example-1",
  "type": "Example",
  "number": "1.1.1",
  "title": "",
  "body": " is a relation. "
},
{
  "id": "example-2",
  "level": "2",
  "url": "section1.1.html#example-2",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": "  The relation has domain and range (remember that when listing the elements of a set, we never repeat the same element twice).  The relation has domain and range   The relation has domain and range .  "
},
{
  "id": "definition-1",
  "level": "2",
  "url": "section1.1.html#definition-1",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "A function  from a set to a set is a relation that provides a rule for matching each element of the domain with exactly one element of the range . "
},
{
  "id": "figure-1",
  "level": "2",
  "url": "section1.1.html#figure-1",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " A function with domain and range   "
},
{
  "id": "example-3",
  "level": "2",
  "url": "section1.1.html#example-3",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": "The following table describes a function with domain and range .                           "
},
{
  "id": "example-4",
  "level": "2",
  "url": "section1.1.html#example-4",
  "type": "Example",
  "number": "1.1.6",
  "title": "",
  "body": "Suppose we want to solve the equation for .       The given equation    add to both sides    simplify    take square root, with sign.   So we find two solutions, . "
},
{
  "id": "example-5",
  "level": "2",
  "url": "section1.1.html#example-5",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": "Consider the equation . We want to solve this equation for .       The given equation    subtract from both sides    simplify    take cube root, without  sign    simplify   This time we found only one solution, . "
},
{
  "id": "problem-1",
  "level": "2",
  "url": "section1.1.html#problem-1",
  "type": "Problem",
  "number": "1.1.8",
  "title": "",
  "body": "Decide if the diagrams define functions, and give the domain and range for each function. "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
