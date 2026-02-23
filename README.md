1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById : it is Selected by id and it returns one element and it doesn't need any loop.example=> let box = document.getElementById("myBox");
getElementsByClassName: it is Selected by class and it returns many elements and Loop needed. example=> let items = document.getElementsByClassName("item");
querySelector: it returns first element and doesn't need loop.
querySelectorAll: it returns all elements and loop needed.
   
3. How do you create and insert a new element into the DOM?
   let div= document.createElement("div");
   div.innerText = "Sabikun Enam Tazina";
   document.body.appendChild(div);
   
5. What is Event Bubbling? And how does it work?
   Event Bubbling means: When you click a child element, the event first works on the child, then goes to parent, then grandparent .likewise Up to the document.
 Example:
<div id="parent">
  <button id="child">Click Me</button>
</div>
<script>
document.getElementById("child").addEventListener("click", function(){
   console.log("Button clicked");
});
document.getElementById("parent").addEventListener("click", function(){
   console.log("Parent clicked");
});
</script>
7. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation means: Instead of adding event listener to many child elements, we add one event listener to the parent, and use event bubbling to handle child events.

It is useful for its better performance .You can use one event listener instead of many. it works for Dynamic Elements and gives us Cleaner Code

8. What is the difference between preventDefault() and stopPropagation() methods?
 preventDefault():It stops the default browser behavior. It is used for form, link, etc.
stopPropagation():It stops the event from bubbling to parent elements.It is used for parent-child events.
