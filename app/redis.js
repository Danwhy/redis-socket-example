module.exports = function storeMessage (client, data, cb) {
  client.rpush("message-list", data, function (err, data) {
    client.lrange("message-list", 0, -1, function (err, data){
      cb(data);
    });
  });
};
