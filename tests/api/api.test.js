import {expect, test} from "@playwright/test";
import {before, describe} from "node:test";
import api from '../../utils/apiClient';
import {createChallenger} from "../../services/challengerService";
import {getTodoById, getTodos} from "../../services/todoService";

const axios = require('axios');


let token;

test.describe('API Challenge Tests', () => {

    test.beforeAll('x-challenger', async () => {
       token = await createChallenger();

    });

    test('POST /challenger (201)', async () => {
        const res = await api.post(`challenger`);
        expect(res.status).toBe(201);
        expect(res.headers['x-challenger']).toBeTruthy();
    });

    test('GET /challenges (200)', async () => {
        const res = await api.get(`challenges`, {
            headers: { 'x-challenger': token },
        })
        expect(res.status).toBe(200);
    })
    test('GET /todos should return status 200 and array of todos', async () => {
        const res = await getTodos(token);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.data.todos)).toBeTruthy();
    });

    test('GET /todo (404) not plural', async () => {
        const res = await api.get(`todo`, {
            headers: { 'x-challenger': token },
        })

        expect(res.status).toBe(404);
    })

    test('GET /todos/{id} (200)', async () => {
        const res = await getTodoById(1,token);
        expect(res.status).toBe(200);

        const todos = res.data.todos;
        expect(todos.length).toBeGreaterThan(0);
        expect(todos[0].id).toBe(1);
    })


});





