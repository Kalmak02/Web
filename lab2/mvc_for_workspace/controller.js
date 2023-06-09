function Controller(model, view)
  {
    this.model = model;
    this.view = view;
    this.timerInterval = null;
    this.time = 0;
    this.isPaused = false;
  }
  
  Controller.prototype.startTimer = function() 
  {
    var self = this;
    this.timerInterval = setInterval(function() {
      if (!self.isPaused) 
      {
        self.time++;
        var minutes = Math.floor(self.time / 60);
        var seconds = self.time % 60;
        var timerDisplay = document.getElementById('timerDisplay');
        timerDisplay.innerText = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);
      }
    }, 1000);
  };
  
  Controller.prototype.pauseTimer = function()
  {
    this.isPaused = true;
  };
  
  Controller.prototype.continueTimer = function()
  {
    this.isPaused = false;
  };
  
  Controller.prototype.stopTimer = function()
  {
    clearInterval(this.timerInterval);
    this.time = 0;
    var timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.innerText = '0:00';
  };
  
  Controller.prototype.handleFormSubmit = function(event)
  {
    event.preventDefault();
    var sessionName = document.getElementById('sessionName').value;
    var timerDisplay = document.getElementById('timerDisplay').innerText;
    this.model.addSessionData(sessionName, timerDisplay);
    this.view.updateSessionList(this.model.getSessionData());
    document.getElementById('sessionName').value = '';
    this.stopTimer();
  };
  
  var startBtn = document.getElementById('startBtn');
  var pauseBtn = document.getElementById('pauseBtn');
  var continueBtn = document.getElementById('continueBtn');
  var stopBtn = document.getElementById('stopBtn');
  var sessionForm = document.getElementById('sessionForm');
  
  var model = new Model();
  var view = new View();
  var controller = new Controller(model, view);
  
  startBtn.addEventListener('click', function()
  {
    controller.startTimer();
  });
  pauseBtn.addEventListener('click', function()
  {
    controller.pauseTimer();
  });
  continueBtn.addEventListener('click', function()
  {
    controller.continueTimer();
  });
  stopBtn.addEventListener('click', function()
  {
    controller.stopTimer();
  });
  sessionForm.addEventListener('submit', function(event)
  {
    controller.handleFormSubmit(event);
  });