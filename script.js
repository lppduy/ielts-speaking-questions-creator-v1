const DATA = [
  // 'Practice 1 (Accommodation & Hometown)',
  // 'Practice 2 (Hometown & Weather)',
  // 'Practice 3 (Work)',
  // 'Practice 4 (Volunteer Works)',
];

const btnGenerate = document.querySelector('#generateBtn');
const part1 = document.querySelector('.part1-content');
const part2 = document.querySelector('.part2-content');
const part3 = document.querySelector('.part3-content');

const generateHandler = () => {
  const random1 = Math.trunc(Math.random() * 31) + 1;
  const random2 = Math.trunc(Math.random() * 51) + 1;
  const random3 = Math.trunc(Math.random() * 51) + 1;
  console.log(btnGenerate);

  const str1 = `<p>Ielts Speaking 1 Practice ${random1}.</p>`;
  const str2 = `<p>Ielts Speaking 2 Practice ${random2}.</p>`;
  const str3 = `<p>Ielts Speaking 3 Practice ${random3}.</p>`;
  // const str1 = `<p>Ielts Speaking 1 Practice ${random1}.</p><p>I will update the feature to display the topic names and questions soon.</p>`;
  // const str2 = `<p>Ielts Speaking 2 Practice ${random2}.</p><p>I will update the feature to display the topic names and questions soon.</p>`;
  // const str3 = `<p>Ielts Speaking 3 Practice ${random3}.</p><p>I will update the feature to display the topic names and questions soon.</p>`;
  console.log(str1);
  console.log(str2);
  console.log(str3);
  part1.innerHTML = str1;
  part2.innerHTML = str2;
  part3.innerHTML = str3;
};

// const showQuestion = str =>

btnGenerate.addEventListener('click', generateHandler);
