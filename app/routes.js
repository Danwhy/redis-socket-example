module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: function(request, reply){
        reply.view('index');
      }
    }
  },
  {
    method: 'GET',
    path: '/public/{path*}',
    handler: {
      directory: {
        path: './public'
      }
    }
  }
];
