run:
	docker build -t teamservice .
	docker run -d -p 1500:80 teamservice