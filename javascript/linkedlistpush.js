/*Linked Lists - Push & BuildOneTwoThree

Write push() and buildOneTwoThree() functions to easily update and initialize linked lists. Try to use the push() function within your buildOneTwoThree() function.

Here's an example of push() usage:

var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
push(chained, 8) === 8 -> 1 -> 2 -> 3 -> null
The push function accepts head and data parameters, where head is either a node object or null/None/nil. Your push implementation should be able to create a new linked list/node when head is null/None/nil.

The buildOneTwoThree function should create and return a linked list with three nodes: 1 -> 2 -> 3 -> null*/


function Node(data,next) {
    this.data = data;
    this.next = null;
  }
  
  function push(head, data) {
    // Go.
    let node= new Node(data);
    node.next=head;
    return node;
  }
  
  function buildOneTwoThree() {
    // Go.
    return push(push(push(null,3),2),1);
  }
  //best practice
  function push(head, data) {
    return new Node(data, head);
  }
  
  function buildOneTwoThree() {
    return [3, 2, 1].reduce( (head, data) => push(head, data), null );
  }
  
  function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }

  Test.describe("tests for inserting a node before another node.", function() {
    Test.it("", function() {
      Test.assertEquals(push(null, 1).data, 1, "Should be able to create a new linked list with push().");
      Test.assertEquals(push(null, 1).next, null, "Should be able to create a new linked list with push().");
      Test.assertEquals(push(new Node(1), 2).data, 2, "Should be able to prepend a node to an existing node.");
      Test.assertEquals(push(new Node(1), 2).next.data, 1, "Should be able to prepend a node to an existing node.");
    });
  });
  