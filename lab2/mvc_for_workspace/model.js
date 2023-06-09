function Model() 
  {
    this.sessionData = [];
  }
  
  Model.prototype.getSessionData = function() 
  {
    return this.sessionData;
  };
  
  Model.prototype.addSessionData = function(sessionName, timerDisplay) 
  {
    this.sessionData.push(sessionName + ' - ' + timerDisplay);
  };