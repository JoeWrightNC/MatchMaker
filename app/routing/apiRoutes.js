const friends = require("../data/friends.js");

module.exports = function(app) {
  //routing for api get endpoint
  app.get("/api/friends", function (req, res) {
    return res.json(friends);
  });

  //routing for api post endpoint, logic for matching
  app.post("/api/friends", function (req, res) {
    const newFriend = req.body;
    const userAnswers = newFriend.scores
    const scoresArr = [];
    const friendCount = 0;
    let masterMatch = 0;
    friends.forEach(element => {
      let matchValue = 0;
      userAnswers.forEach(datum => {
        matchValue += (Math.abs(parseInt(element.scores[datum]) - parseInt(userAnswers[datum])))
      })
      scoresArr.push(matchValue)
    });
    scoresArr.forEach(matchScore => {
      if (matchScore <= scoresArr[masterMatch]) {
        masterMatch = scoresArr.indexOf(matchScore)
      }
    })
    let finalMatch = friends[masterMatch]
    res.json(finalMatch)
    friends.push(newFriend)
  });
}