// normal load testing 
// To test how the application performs under normal load.
import http from 'k6/http';
  import { check, sleep } from 'k6';

export let options = {
    vus: 200,
    duration: '2m',
  };

export default function () {
  let res = http.get('https://quran.com/');
  let surah = Math.floor(Math.random() *114)+1;
  let ayah = 1;
  //goto homepage and check response
  check(res, { 'status was 200': (r) => r.status == 200 });
  //goto specific surah and ayah and check
  res = http.get(`https://quran.com/${surah}/${ayah}`);
  check(res,{'status was 200':(r)=>{
    r.status==200;
  }})
  sleep(1);
}
