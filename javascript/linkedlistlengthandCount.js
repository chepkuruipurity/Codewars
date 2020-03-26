/*Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.

length(null) => 0
length(1 -> 2 -> 3 -> null) => 3
Implement Count() to count the occurrences of an integer in a linked list.

count(null, 1) => 0
count(1 -> 2 -> 3 -> null, 1) => 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4*/

function Node(data) {
    this.data = data
    this.next = null
  }
  
  function length(head) {
    return head ? 1 + length(head.next) : 0
  }
  
  function count(head, data) {
    if (!head) return 0
    return (head.data === data ? 1 : 0) + count(head.next, data)
  }
  //test
  Test.describe("tests for counting the length of a linked list.", function() {
    var list = buildOneTwoThree();
    Test.it("", function() {
      Test.assertEquals(length(null), 0, "Length of null list should be zero.");
      Test.assertEquals(length(new Node(99)), 1, "Length of single node list should be one.");
      Test.assertEquals(length(list), 3, "Length of the three node list should be three.");
    });
  });
  
  Test.describe("tests for counting occurrences of a particular integer in a linked list.", function() {
    var list = buildOneTwoThree();
    Test.it("", function() {
      Test.assertEquals(count(list, 1), 1, "list should only contain one 1.");
      Test.assertEquals(count(list, 2), 1, "list should only contain one 2.");
      Test.assertEquals(count(list, 3), 1, "list should only contain one 3.");
      Test.assertEquals(count(list, 99), 0, "list should return zero for integer not found in list.");
      Test.assertEquals(count(null, 1), 0, "null list should always return count of zero.");
    });
  });