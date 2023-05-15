// 과제 1
export const makeIntro = (name, mbti) => {
  // 입력한 이름과 MBTI의 문자열 값이 입력으로 주어집니다.
  // 당신의 소개말을 적어서 문자열로 return 하세요.
  // 형식은 자유지만 이름과 MBTI가 포함되어야 합니다.
    
  // 여기다 코드를 작성하세요.
  let introduce = `안녕하세요! 제 이름은 ${name}이고, mbti는 ${mbti}입니다! `; 

  return introduce;
};

// 과제 2
export const assign2 = (arr, divisor) => {
  // array의 각 element 중 divisor로 나누어 떨어지지 않는 수를 담은 배열을 return하세요.
  // 반환하는 배열은 오름차순으로 정렬해야 합니다.
  // 나누어 떨어지지 않는 값이 한개도 없다면 배열에 "없어요!" 만 담아서 return 합니다.
   
  // 여기에 코드를 작성하세요.
  let answer = [];
  
  for(let index in arr){
    if(arr[index] % divisor !== 0){ 
      answer.push(arr[index]);
    }
  }

  if(answer.length===0){
    answer.push("없어요!");
  }
  answer.sort();
  

  return answer;
};


