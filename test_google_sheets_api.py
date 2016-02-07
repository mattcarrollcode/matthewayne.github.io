import requests

URL = "https://docs.google.com/forms/d/1R3BWEDSiHFkrmWwXUJIjfFWmh_yrp5d6aHmQ5DtzWvw/formResponse"
	   https://docs.google.com/forms/d/1R3BWEDSiHFkrmWwXUJIjfFWmh_yrp5d6aHmQ5DtzWvw/viewform
https://docs.google.com/forms/d/1R3BWEDSiHFkrmWwXUJIjfFWmh_yrp5d6aHmQ5DtzWvw/viewform?usp=send_form
PREFIX = "0"

for x in range(3):

	PREFIX = str(x)

	DATA = {
		"entry.45887170" : PREFIX + "test-verb",
		"entry.2129797444" : PREFIX + "test-attendee 1, attendee 2, attendee 4",
		"entry.1609226526" : PREFIX + "YEAH MAN!"
		"entry.1852817864" : PREFIX + "test-adj1",
		"entry.520876080" : PREFIX + "test-adj2",
		"entry.983619700" : PREFIX + "test-noun1",
		"entry.400415055" : PREFIX + "test-noun2"
	}

	res = requests.post(URL, data=DATA)

