'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the minovateApp
 */
app
  .controller('CalendarCtrl', function ($scope,$compile,uiCalendarConfig) {

    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    
    var indexer = 0;

    /* event source that pulls from google.com */
    $scope.eventSource = {
      url: 'http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic',
      className: 'gcal-event',           // an option!
      currentTimezone: 'America/Chicago' // an option!
    };

    /* event source that contains custom events on the scope */
    $scope.events = [
//      {Objective:'Leave',Days:'3',title: 'Sick Leave',start: new Date(y, m, 1), className: ['b-l b-2x b-greensea'],comment:'I just had an accident'},
//        
//        
//      {Objective:'mongodb',desc:'happy mongodb',title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2), className: ['bg-dutch'],comment:'i dont care.'},
//      {Objective:'loopback',desc:'do it for me',id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false, className: ['b-l b-2x b-primary'],comment:'I love you sweetie.'},
//      {Objective:'nodejs',desc:'i dont care',id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false, className: ['b-l b-2x b-primary'],comment:'Im in need of you.'},
//      {Objective:'express',desc:'who is who boss',title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false, className: ['b-l b-2x b-default'],comment:'hoza nana'},
//      {Objective:'anguler',desc:'i love angulerjs',title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/', className: ['b-l b-2x b-hotpink'],comment:'thuskee.'},
//      {Objective:'killing',desc:'hoza nana',title: 'Make cupcakes', start: new Date(y, m, 2), className: ['b-l b-2x b-info'], location:'Bratislava', comment:'The best in whole world.'},
//      {Objective:'deployment',desc:'khaya fm friday',title: 'Call wife', start: new Date(y, m, 6),end: new Date(y, m, 7), className: ['b-l b-2x b-red'], location:'Piestany', comment:'And say her hello.'}
    ];

    /* alert on dayClick */
    $scope.precision = 400;
    $scope.lastClickTime = 0;
    $scope.doubleClick = function( date, jsEvent, view ){
      var time = new Date().getTime();
      if(time - $scope.lastClickTime <= $scope.precision){
        $scope.events.push({
          title: 'New Activity',
          desc:'description',    
          start: date,
          className: ['b-l b-2x b-info'],
          comment:'add comment'   
        });
      }
      $scope.lastClickTime = time;
    };

    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
      $scope.alertMessage = ('Event Droped to make dayDelta ' + delta);
    };
   
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view){
      $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };

    $scope.overlay = angular.element('.fc-overlay');

    $scope.alertOnMouseOver = function( event, jsEvent, view ){
      $scope.event = event;
      $scope.overlay.removeClass('left right');
      var wrap = angular.element(jsEvent.target).closest('.fc-event');
      var cal = wrap.closest('.calendar');
      var left = wrap.offset().left - cal.offset().left;
      var right = cal.width() - (wrap.offset().left - cal.offset().left + wrap.width());
      if( right > $scope.overlay.width() ) {
        $scope.overlay.addClass('left');
      } else if ( left > $scope.overlay.width() ) {
        $scope.overlay.addClass('right');
      }
      if (wrap.find('.fc-overlay').length === 0) {
        wrap.append( $scope.overlay );
      }
    };
    
    /* config object */
    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        header:{
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        dayClick: $scope.doubleClick,
        eventDrop: $scope.alertOnDrop,
        eventResize: $scope.alertOnResize,
        eventMouseover: $scope.alertOnMouseOver
      }
    };

    /* add custom event document.getElementById("obj").value */
    $scope.addEvent = function() {
        $scope.events.push({
        Objective: $scope.objective[$scope.curr].objectname,  
        desc:$scope.objective[$scope.curr].desc,
        dur: $scope.objective[$scope.curr].duration,   
        title: 'New Activity',
        start: new Date(y, m, d),
        className: ['b-l b-2x b-info'],
        comment:'add comment'
      });
    };

    /* remove event */
    $scope.remove = function(index) {
      $scope.events.splice(index,1);
    };
     /* remove leave */
    $scope.removes = function(index) {
      $scope.leaves.splice(index,1);
    };

    /* Change View */
    $scope.changeView = function(view, calendar) {
      angular.element('.calendar').fullCalendar('changeView', view);
    };

    $scope.today = function(calendar) {
      angular.element('.calendar').fullCalendar('today');
    };

    /* event sources array*/
    $scope.eventSources = [$scope.leaves,$scope.events];
   
    
/*get the index of selected objective*/
    $scope.setCurrent = function setCurrent(index) {
    $scope.curr = index;
};

    /*get the index of selected leave*/
    $scope.setCurrents = function setCurrents(index) {
    $scope.curre = index;
};

    
    $scope.leave = ["Annual Leave", "Maternity Leave", "Sick Leave","Family Responsibility Leave","Study Leave","Leave for religious holidays","Unpaid leave"];

    $scope.getLvIndex = function getLvIndex(index) {
    $scope.currIndex = index;  
   $scope.returnedLeav = $scope.leave[$scope.currIndex];
};

    $scope.objective =[{objectname:"Strongloop",desc:"Please study this for exam",duration:"8 days"},
                       {objectname:"MongoDB",desc:"back-end must be done using mongodb",duration:"5 days"},
                       {objectname:"Linex",desc:"we are about to hack",duration:"3 days"}];
    
    $scope.leaves =[];
    /* add custom leave document.getElementById("obj").value */
    $scope.addLeave = function() {
        $scope.leaves.push({
        Objective: 'Leave',    
        leavetype: $scope.leave[$scope.curre],  
        start: new Date(y, m, d),
        end: new Date(y, m, d + 1),     
        className: ['b-l b-2x b-info'],
        comment:'add comment'    
      });
    };
    
            $scope.IsVisibleA = false;
            $scope.IsVisibleL = false;
            $scope.ShowPassport = function (value) {
                if($scope.IsVisibleA = value == "A"){
                    $scope.IsVisibleA = true;
                    $scope.IsVisibleL = false;
                }else if($scope.IsVisibleL = value == "L"){
                    $scope.IsVisibleL = true;
                    $scope.IsVisibleA = false;
                }
        
            }
           
    
  });




