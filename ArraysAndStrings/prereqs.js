var findOrder = function(numCourses, prerequisites) {
    const order = [];
    const queue = [];
    const graph = new Map();
    const indegree = Array(numCourses).fill(0);
  
    for (const [e, v] of prerequisites) {
      // build graph map
      if (graph.has(v)) {
        graph.get(v).push(e);
      } else {
        graph.set(v, [e]);
      }
      // build indegree array
      indegree[e]++;  
  
    }
      
      // this first part creates a map where {prereq: [courses]}
      // then it adds [0 0 0 1] one to the course number using the course. So this is effectively,
      // the course position with the number of prereqs it has
      
      
  
    for (let i = 0; i < indegree.length; i++) {
      if (indegree[i] === 0) queue.push(i);
    }
      // queue = [2, 3 , 5] position of the courses that do not have prereqs
  
    while (queue.length) {
      const v = queue.shift(); // course number that does not have prereq
        // if the course number does not have a prereq and is not a prereq then just push to order
        console.log('que', queue)
      if (graph.has(v)) {     // courses that are a prereq but dont have prereq
        
  
        for (const e of graph.get(v)) {  // the courses e that the prereq v is for
            
          indegree[e]--;  // subtract one from the prereqs of that course
          if (indegree[e] === 0) queue.push(e); // if that is the last prereq then push e to queue
        }
      }
      order.push(v); // 
    }
  
    return numCourses === order.length ? order : [];
  };



  console.log(findOrder(5, [[2,0], [2, 1], [4,2], [4,3]]))