chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
      
      document.querySelector('.timeline-new-comment .BtnGroup details summary').click();
      document.querySelector('.timeline-new-comment .BtnGroup details details-menu > label:first-child').setAttribute('disabled', 'disabled');
      document.querySelector('.timeline-new-comment .BtnGroup details details-menu > label:last-child').click();
      document.querySelector('.timeline-new-comment .BtnGroup details').click();

    }
	}, 10);
});