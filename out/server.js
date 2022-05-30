"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = require("express-handlebars");
const path_1 = __importDefault(require("path"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const challange_routes_1 = __importDefault(require("./routes/challange.routes"));
//Express 
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: 'diyorbek sog` bo`l',
    saveUninitialized: true,
    proxy: true,
}));
//Handlebars 
app.engine('.hbs', (0, express_handlebars_1.engine)({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './pages');
//routes
app.use('/', challange_routes_1.default);
app.listen(8080, () => {
    console.log('Server is running ...');
});
