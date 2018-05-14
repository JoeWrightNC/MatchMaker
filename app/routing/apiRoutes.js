const friends = require("../data/friends.js");

module.exports = function(app) {

  //routing for api get endpoint
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  //routing for api post endpoint
  app.post("/api/friends", function (req, res) {
    const newFriend = req.body;
    const userAnswers = newFriend.scores
    let match = {
      matchName: "",
      matchPhoto: ""
    }
    let masterMatchValue = 1000
    console.log(userAnswers)
    friendsArr.forEach(element => {
      for (let i=0; i<10; i++) {
        matchValue += Math.abs(element.scores[i] - userAnswers[i])
      }
      if (matchValue < masterMatchValue) {
        masterMatchValue = matchValue;
        match = {
          matchName: element.name,
          matchPhoto: element.photo,
        }
      }
    });
    friendsArr.push(newFriend)
    res.json(match)
  });
}