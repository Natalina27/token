//https://api-nodejs-todolist.herokuapp.com/user/me
const base = 'https://api-nodejs-todolist.herokuapp.com';
const key =  'user';
const root = 'me';

const uri = `${base}/${key}/${root}`;

export const api = Object.freeze({
    user: async () => {
             const response = await fetch(`${uri}`);
        }
});