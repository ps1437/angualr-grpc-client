// package: 
// file: todo-service.proto

var todo_service_pb = require("./todo-service_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var TodoService = (function () {
  function TodoService() {}
  TodoService.serviceName = "TodoService";
  return TodoService;
}());

TodoService.getTodos = {
  methodName: "getTodos",
  service: TodoService,
  requestStream: false,
  responseStream: false,
  requestType: todo_service_pb.EmptyRequest,
  responseType: todo_service_pb.Todos
};

TodoService.addTodo = {
  methodName: "addTodo",
  service: TodoService,
  requestStream: false,
  responseStream: false,
  requestType: todo_service_pb.Todo,
  responseType: todo_service_pb.Todo
};

exports.TodoService = TodoService;

function TodoServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

TodoServiceClient.prototype.getTodos = function getTodos(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TodoService.getTodos, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

TodoServiceClient.prototype.addTodo = function addTodo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(TodoService.addTodo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.TodoServiceClient = TodoServiceClient;

