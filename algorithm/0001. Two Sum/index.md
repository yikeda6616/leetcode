Given an array of integers`nums`&nbsp;and an integer`target`, return_indices of the two numbers such that they add up to`target`_.

You may assume that each input would have**_exactly_one solution**, and you may not use the_same_element twice.

You can return the answer in any order.

**Example 1:**

**Input:**nums = [2,7,11,15], target = 9**Output:**[0,1]**Explanation:**Because nums[0] + nums[1] == 9, we return [0, 1].

**Example 2:**

**Input:**nums = [3,2,4], target = 6**Output:**[1,2]

**Example 3:**

**Input:**nums = [3,3], target = 6**Output:**[0,1]

**Constraints:**

* `2 &lt;= nums.length &lt;= 104`
* `-109&lt;= nums[i] &lt;= 109`
* `-109&lt;= target &lt;= 109`
* **Only one valid answer exists.**
**Follow-up:&nbsp;**Can you come up with an algorithm that is less than&nbsp;`O(n2)&nbsp;`time complexity?