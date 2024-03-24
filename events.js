document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: 'dayGridMonth',
		customButtons: {
			iCalLink: {
				text: 'subscribe',
				click: function() {
					navigator.clipboard.writeText('https://user.fm/calendar/v1-b7dba231c10196cd1a992a98f81fca30/triangle%20bike%20camping.ics').then(
						() => {
							alert('.ical URL copied! Subscribe in your favorite calendar app.');
						}
					);
				},
				hint: 'Copy ICS URL to clipboard'
			}
		},
		headerToolbar: {
			start: 'dayGridMonth,listMonth iCalLink',
			center: 'title',
			end: 'prev,today,next'
		},
		events: [
			{
				id: 'weekly-cruise-4',
				title: 'Cruise: Bi-weekly Social Ride',
				start: '2024-02-07T17:30:00',
				end: '2024-02-07T19:30:00',
				url: 'https://buytickets.at/trianglebikecamping/1068381'
			},
			{
				id: 'weekly-cruise-5',
				title: 'Cruise: Bi-weekly Social Ride',
				start: '2024-02-21T17:30:00',
				end: '2024-02-21T19:30:00',
				url: 'https://buytickets.at/trianglebikecamping/1068381'
			},
			{
				id: 'weekly-cruise-6',
				title: 'Cruise: Bi-weekly Social Ride',
				start: '2024-03-06T18:00:00',
				end: '2024-03-06T20:00:00',
				url: 'https://buytickets.at/trianglebikecamping/1068381'
			},
			{
				id: 'weekly-cruise-7',
				title: 'Cruise: Bi-weekly Social Ride',
				start: '2024-03-20T18:00:00',
				end: '2024-03-20T20:00:00',
				url: 'https://buytickets.at/trianglebikecamping/1068381'
			},
			{
				id: 'weekly-cruise-8',
				title: 'Cruise: Bi-weekly Social Ride',
				start: '2024-04-03T18:00:00',
				end: '2024-04-03T20:00:00',
				url: 'https://buytickets.at/trianglebikecamping/1068381'
			},
			{
				id: 'weekly-cruise-9',
				title: 'Cruise: Bi-weekly Social Ride',
				start: '2024-04-17T18:00:00',
				end: '2024-04-17T20:00:00',
				url: 'https://buytickets.at/trianglebikecamping/1068381'
			},
			{
				id: 'raleigh-clayton',
				title: 'Cruise: Raleigh to Clayton',
				start: '2024-03-30T11:00:00',
				end: '2024-03-30T14:00:00',
				url: 'https://www.tickettailor.com/events/trianglebikecamping/1200207?'
			},
			{
				id: 'coastal',
				title: 'Coastal Ride 2024',
				start: '2024-04-26',
				end: '2024-04-28',
				url: 'https://ncsports.org/event/cyclenc_coastal_ride/'
			},
			{
				id: 'may11umstead',
				title: 'Campout: Umstead',
				start: '2024-05-11T14:00:00',
				end: '2024-05-12T11:00:00',
				url: 'https://www.tickettailor.com/events/trianglebikecamping/1110939'
			},
			{
				id: 'ragbrai',
				title: 'RAGBRAI 2024',
				start: '2024-07-20',
				end: '2024-07-27',
				url: 'https://ragbrai.com'
			}
		],
		eventClick: function(info) {
			info.jsEvent.preventDefault(); // don't let the browser navigate

			if (info.event.url) {
			window.open(info.event.url);
			}
		},
		eventColor: '#09e',
		eventTextColor: '#fff'
	});
	calendar.render();
});