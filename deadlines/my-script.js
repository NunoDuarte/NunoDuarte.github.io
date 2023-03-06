
// Define your conference data
var conference = {
  name: 'RSS 2023',
  date: 'July 10-14, 2023',
  location: 'Daegu, Republic of Korea',
  deadline: 'February 3, 2023',
  timezone: 'CET'
};

// Define your Handlebars template
var source = '<div id="rss" class="RO-conf">' +
             '  <div class="row">' +
             '    <div class="col-xs-12 col-sm-6">' +
             '      <a href="https://roboticsconference.org/"><b>{{name}}</b></a>' +
             '      <div class="meta">{{date}} // <a href="http://maps.google.com/?q={{location}}">{{location}}</a></div>' +
             '    </div>' +
             '    <div class="col-xs-12 col-sm-6">' +
             '      <span class="timer"></span>' +
             '      <div class="deadline">' +
             '        <div>Deadline: <span class="deadline-time">{{deadline}}</span></div>' +
             '      </div>' +
             '      <div class="calendar"></div>' +
             '    </div>' +
             '  </div>' +
             '  <hr>' +
             '</div>';

// Compile your template
var template = Handlebars.compile(source);

// Render your template with your conference data
var html = template(conference);

// Add your rendered HTML to the page
document.getElementById('conference').innerHTML = html;

// Get the conference date in the correct timezone
var confDate = moment.tz(conference.deadline + ' 23:59:59', conference.timezone);

// Render countdown timer
$('#rss .timer').countdown(confDate.toDate(), function(event) {
  $(this).html(event.strftime('%D days %Hh %Mm %Ss'));
});
$('#rss .deadline-time').html(confDate.toString());

// Add calendar button
var myCalendar = createCalendar({
  options: {
    class: 'calendar-obj',
    id: 'rss'
  },
  data: {
    title: 'RSS deadline',
    start: confDate.toDate(),
    duration: 60
  }
});
document.querySelector('#rss .calendar').appendChild(myCalendar);

// Check if date has passed, add 'past' class to it
var today = moment();
if (today.diff(confDate) > 0) {
  $('#rss').addClass('past');
}
