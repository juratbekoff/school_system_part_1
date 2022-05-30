"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let router = (0, express_1.Router)();
router.get('/login', (req, res) => {
    res.render('login', { layout: 'layouts' });
});
router.get('/index', (req, res) => {
    res.render('index', { sms: sms });
});
router.get('/suggestions', (req, res) => {
    res.render('suggestions');
});
router.get('/aplication', (req, res) => {
    res.render('aplication');
});
router.get('/contacts', (req, res) => {
    res.render('contacts');
});
router.get('/admin', (req, res) => {
    res.render('login');
});
router.get('/admin_suggestions', (req, res) => {
    res.render('admin_suggestions', { arr: arr });
});
router.get('/admin_aplication', (req, res) => {
    res.render('admin_aplication');
});
router.get('/admin_teachers', (req, res) => {
    res.render('admin_teachers', { applicate: applicate });
});
router.get('/admin_system', (req, res) => {
    res.render('admin_system');
});
router.get('/admin_pupils', (req, res) => {
    res.render('admin_pupils');
});
router.get('/admin_publish', (req, res) => {
    res.render('admin_publish');
});
router.get('/success', (req, res) => {
    res.render('success');
});
let arr = [];
let sms = [];
let signin = [];
let applicate = [];
// app.post
router.post('/inform_publish', (req, res) => {
    let publish = req.body;
    sms.push(publish);
    res.redirect('/success');
});
router.post('/login_form', (req, res) => {
    let login = req.body;
    // let a = login.trim()
    signin.push(login);
    res.redirect('/');
});
router.get('/', (req, res) => {
    if (signin[0] === undefined) {
        res.redirect('/login');
    }
    else {
        res.render('index', { sms: sms });
    }
});
router.post('/form_suggest', (req, res) => {
    let suggest = req.body;
    arr.push(suggest);
    res.redirect('/success');
});
router.post('/form_application', (req, res) => {
    let application = req.body;
    applicate.push(application);
    res.redirect('/success');
});
exports.default = router;
