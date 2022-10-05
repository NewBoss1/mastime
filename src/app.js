/* const clock = document.querySelector("#clock");

function getclock() {
  const date = new Date();
  const Hours = String(date.getHours()).padStart(2 , "0");
  const Seconds = String(date.getSeconds()).padStart(2 , "0");
  const Minutes = String(date.getMinutes()).padStart(2 , "0");

  clock.innerText = `${Hours} : ${Minutes} : ${Seconds}`;
}

setInterval(getclock, 1000);
 */
const masclock = document.querySelector("#clock");

function DDay() {
  const masTime = new Date("2022-12-25");
  const todayTime = new Date();

  const D = masTime - todayTime;
  const masDay = Math.floor(D / (1000 * 60 * 60 * 24));
  const masHour = Math.floor((D / (1000 * 60 * 60)) % 24);
  const masMin = Math.floor((D / (1000 * 60)) % 60);
  const masSec = Math.floor((D / 1000) % 60);
  masclock.innerText = `${masDay}일 ${masHour}시간 ${masMin}분 ${masSec}초`;
}
setInterval(DDay, 1000);
