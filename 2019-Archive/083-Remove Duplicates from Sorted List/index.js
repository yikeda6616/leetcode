var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;

  let current = head;
  while (current && current.next) {
    current.val === current.next.val
      ? (current.next = current.next.next)
      : (current = current.next);
  }
  return head;
};
