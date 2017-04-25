import React from 'react';
import ReactDOM from 'react-dom';

const notifications = [{
	content: 'A',
	date: new Date(),
	time: '01:01:01'
}, {
	content: 'B',
	date: new Date(),
	time: '02:02:02'
}, {
	content: 'C',
	date: new Date(),
	time: '03:03:03'
}];

ReactDOM.render(
  <PushModule/>,
  document.getElementById('root')
);

function PushModule() {
	const pushNotifications = notifications.map((notification, index) => (
			<PushNotification content={notification.content} date={notification.date.toDateString()} time={notification.time} key={index}/>
		));

	return (
		<div id="push-module">
			<div id="control">
				<h3>Scheduled Pushes</h3>
			</div>
			<div id="header">
				<div>Content</div>
				<div>Date</div>
				<div>Time</div>
			</div>
			<div id="notifications">
				{ pushNotifications }
			</div>
		</div>
	);
}

function PushNotification(notification) {
	return (
		<div className="notification">
			<div>{ notification.content }</div>
			<div>{ notification.date }</div>
			<div>{ notification.time }</div>
		</div>
	);
}