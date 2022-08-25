import farmStay from "../models/FarmStayModel.js"
import mongoCvt from '../../utils/mongoose.js';
class SiteController {
    // [GET] root
    index(req, res) {
        res.render('home');
    }
    // [GET] login
    login(req, res) {
        res.render('login');
    }
    // [POST] login
    postLogin(req, res) {
        const login = JSON.stringify(req.body);
        res.send(login);
    }
    // [GET] search
    search(req, res, next) {
        // let arrayQuery = query.split(" ");
        
        farmStay
            .find({})
            .then((farmStays) => {
                let query = req.query.q;
                var array = farmStays.filter(value =>{
                    return value.name.includes(query)
                })
                // console.log(array)
                res.render('search', { query: query , farmStays: mongoCvt.multiMongooseToObject(array)});
            })
            .catch(next);
        
    }
}

export default new SiteController();
