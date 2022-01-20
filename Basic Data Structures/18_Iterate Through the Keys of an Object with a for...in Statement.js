const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let result = 0;
    for(let status in usersObj){
      if(usersObj[status].online){
        result++;
      }
    }
    return(result);
  }
  
  console.log(countOnline(users));