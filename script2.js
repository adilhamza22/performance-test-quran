//spike test case 10 to 500 users ramp up iclean 10 seconds and then ramp down in 10 seconds
import http from 'k6/http'
import {check,sleep} from 'k6'

export let options={
    stages: [
        {duration:'5s', target:10},
        {duration:'5s', target:500},
        {duration:'5s', target:500},
        {duration:'5s', target:10},


    ],
    discardResponseBodies:true,
};
export default function(){
    let res = http.get('https://www.quran.com');
    let surah = Math.floor(Math.random()*114)+1;
    let ayah=1;
    check(res,{'status was 200':(r)=>r.status==200});
    res = http.get('https://www.quran.com/${surah}/${ayah}');
    check(res,{'status was 200':(r)=>r.status==200});
    sleep(1);
}