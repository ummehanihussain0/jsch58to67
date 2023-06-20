window.addEventListener("DOMContentLoaded", function() {

    var formContentNode = document.getElementById("form-content");
    console.log("Node type of element with id 'form-content':", formContentNode.nodeType);

    var lastNameNode = document.getElementById("lastName");
    console.log("Node type of element with id 'lastName':", lastNameNode.nodeType);
    console.log("Node type of the child node of element with id 'lastName':", lastNameNode.firstChild.nodeType);

    lastNameNode.firstChild.nodeValue = "Last Name: Hussain";

    var mainContentNode = document.getElementById("main-content");
    var firstChild = mainContentNode.firstChild;
    var lastChild = mainContentNode.lastChild;
    console.log("First child of element with id 'main-content':", firstChild);
    console.log("Last child of element with id 'main-content':", lastChild);

    var nextSibling = lastNameNode.nextSibling;
    var previousSibling = lastNameNode.previousSibling;
    console.log("Next sibling of element with id 'lastName':", nextSibling);
    console.log("Previous sibling of element with id 'lastName':", previousSibling);
 
    var emailNode = document.getElementById("email");
    var parentNode = emailNode.parentNode;
    console.log("Parent node of element with id 'email':", parentNode);
    console.log("Node type of element with id 'email':", emailNode.nodeType);
  });