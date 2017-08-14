const cron = require('node-cron');
const firebase = require('firebase');
const MangoTree = require('./mango_tree');


const config = {
  apiKey: "AIzaSyAi-KOfKjeop1Feq_AJC0Hc066385VNcOk",
  authDomain: "coba-firebase-ebff5.firebaseapp.com",
  databaseURL: "https://coba-firebase-ebff5.firebaseio.com",
  projectId: "coba-firebase-ebff5"
};
firebase.initializeApp(config);
let db = firebase.database()


let pohonMangga = new MangoTree()
let mangga = cron.schedule('* * * * * *', () => {
  if (pohonMangga.healtyStatus) {
    pohonMangga.grow()
    pohonMangga.produceMangoes();
    pohonMangga.harvest();
    db.ref('mango-tree/').set({
      age : pohonMangga.age,
      height : pohonMangga.height,
      harvested : pohonMangga.harvested
    })
    console.log(`[Year ${pohonMangga.age} Report] Height = ${pohonMangga.height} | Fruits harvested = ${pohonMangga.harvested}`);
  } else {
    console.log('The mango tree has met its end. :sad:');
    mangga.stop();
  }
})

mangga.start();
