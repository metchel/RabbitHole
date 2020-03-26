module.exports = knex => {
  const getUsers = () => {
    return knex.select("*").from("users");
  };

  const registerUser = function(email, username, password) {
    return knex("users")
<<<<<<< HEAD
    .insert({email: email, username: username, password: password})
    .returning("*")
    .then(res => res[0]);
    // will return the id for login / cookie session 
=======
      .insert({ email: email, user_name: username, password: password })
      .returning("*")
      .then(res => res[0]);
    // will return the id for login / cookie session
>>>>>>> master
  };

  const validateUserLogin = function (username, password) {
    return knex("users")
      .select("*")
      .where({
        username: username,
        password: password
      })
      .then(res => res[0])
      .catch(e => "There was an error logging in")
  }

  const getUserInfo = userID => {
    return knex("users")
      .select("*")
      .where("users.id", "=", userID);
  };

  //ys-fixed
  const getAllWatchLogs = () => {
    return knex("watch_logs")
      .select("*")
      .from("watch_logs");
  };

  // FIXME

  const getWatchLogsForUser = userID => {
    return knex("watch_logs")
      .select("*")
      .where("users_id", "=", userID)
      .innerJoin("log_entries")
      .where("watch_logs.id", "=", "watch_logs_id");
  };

  //ys-fixed
  const getWatchLogByID = id => {
    return knex
      .select("*")
      .from("watch_logs")
      .innerJoin("log_entries", "watch_logs.id", "log_entries.watch_log_id")
      .where("log_entries.watch_log_id", "=", id);
  };

  // FIXME ENDS
  const getVideos = () => {
    return knex.select("*").from("videos");
  };

  //ys:
  const getSingleVideo = id => {
    return knex
      .select("*")
      .from("videos")
      .where("videos.id", "=", id);
  };

  //ys:
  const getEmotions = () => {
    return knex
      .select("*")
      .from("emotions")
      .then(res => res);
  };

  const getEmotionID = mood => {
    let id;

    return emotions.find(emotion => (emotion.emoji = mood));
  };

  //ys:
  const getVideosForEmotion = id => {
    return knex
      .select("*")
      .from("emotions")
      .innerJoin("videos", "emotions.id", "videos.emotion_id")
      .where("videos.emotion_id", "=", id);
  };

  const getRandomVideoFromEmotion = () => {
    return knex
      .select("*")
      .from("emotions")
      .innerJoin("videos", "emotions.id", "videos.emotion_id")
      .where("videos.emotion_id", "=", id);
  };
  //ys:
  const getUser = () => {
    return knex.select("*").from("users");
  };

<<<<<<< HEAD

  const createWatchLogEntry = (surprised_percent,
    disgusted_percent,
    neutral_percent,
    sad_percent,
    fearful_percent,
    angry_percent,
    happy_percent, 
    watchLogID, 
    videoID) => {

    
=======
  const createWatchLogEntry = ({ data }, watchLogID, videoID) => {
    const {
      surprised_percent,
      disgusted_percent,
      neutral_percent,
      sad_percent,
      fearful_percent,
      angry_percent,
      happy_percent
    } = data;
>>>>>>> master
    // need to get video id and watch log id
    // FIXME
    return knex("log_entries")
      .insert({
        video_id: videoID,
        watch_log_id: watchLogID,
        surprised_percent: surprised_percent,
        disgusted_percent: disgusted_percent,
        neutral_percent: neutral_percent,
        sad_percent: sad_percent,
        fearful_percent: fearful_percent,
        angry_percent: angry_percent,
        happy_percent: happy_percent
      })
      .returning("*")
      .then(res => res[0]);
  };

  const createWatchLog = userId => {
    return knex("watch_logs")
      .insert({ user_id: userId, is_public: true })
      .returning("*")
      .then(res => res[0]);
  };

  const getUserHistory = function(id) {
    return knex("users");
  };

  const getUserbyUserName = function(username) {
    return knex("users")
      .select("*")
      .where("user_name", "=", username)
      .returning("*")
      .then(res => console.log(res));
  };

  return {
    getUsers,
    registerUser,
    getUserbyUserName,
    registerUser,
    getVideos,
    getEmotions,
    getVideosForEmotion,
    getUser,
    createWatchLog,
    createWatchLogEntry,
    getUserInfo,
    getWatchLogsForUser,
    getAllWatchLogs,
    getWatchLogByID,
    getSingleVideo,
    getRandomVideoFromEmotion,
    validateUserLogin
  };
};
