'use strict';

var mongoose = require('mongoose'),
    Env = mongoose.model('Envs');

exports.insert_env = function (req, res) {
    var new_env = new Env(req.body);
    new_env.save(function (err, env) {
        if (err)
            res.send(err);
        res.json(env);
    });
};

exports.get_live_env = function (req, res) {
    Env.findOne({ status: 'live' }, function (err, env) {
        if (err)
            res.send(err);
        res.json(env);
    });
}

exports.flip_env = function (req, res) {
    Env.findOne({ status: 'live' }, function (err, env) {
        if (err)
            res.send(err);
        
        if (env.name == 'blue')
            env.name = 'green';
        else 
            env.name = 'blue';
        env.timestamp = new Date(0);
        env.save();
        res.json(env);
    });
}