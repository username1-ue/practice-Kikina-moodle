import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    vus: 10, // 10 виртуальных пользователей
    duration: '30s', // тест длится 30 секунд
};

export default function () {
    // Открываем главную страницу
    let res = http.get('http://localhost:8080/');
    
    // Проверяем, что страница загрузилась
    check(res, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });
    
    sleep(1);
}