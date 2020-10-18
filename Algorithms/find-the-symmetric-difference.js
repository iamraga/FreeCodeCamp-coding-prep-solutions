function sym(...args) {
  let arg = args[0];
  let diff = new Set(args[0]);
  for(let i=1; i<args.length; i++) {
    let eachArr = new Set(args[i]);
    console.log([...eachArr]);
    for(let j of eachArr) {
      if(diff.has(j)) {
        diff.delete(j);
      }
      else {
        diff.add(j);
      }
    }
  }
  console.log([...diff]);
  let arr = [...diff];
  arr.sort((a,b) => (a - b));
  return arr;
}

sym([1, 2, 3], [5, 2, 1, 4]);
