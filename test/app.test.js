const requires = requires('supertest');
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

describe('app test', () => {
  it(' creates a new habit', () => {
    
    .get(':/id', (req, res, next) => {
      Habit
        .findById(req.params.id)
        .then(habit => {
          expect(res.body).toEqual({
            _id: epect.any(String),
            name: 'drink water',
            count: 0,
            __v: 0
          });
        });
    });
  });
});