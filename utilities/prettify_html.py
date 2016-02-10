# Updates Zola iFrame with removed header

import requests as req
import sys
from bs4 import BeautifulSoup

try:
 	r=req.get("http://www.mattandracheltietheknot.com")
except:
 	print "error getting the page"
 	sys.exit(1)

try:
	print "Parsing HTML..."
	soup = BeautifulSoup(r.text, 'html.parser')
except:
	print "error processing HTML"


try:
	print "Creating new index_pretty.html file..."
	f=open('../index_pretty.html','w')
	f.write(soup.prettify().encode("UTF-8"))
	f.close()
except:
	print "Error creating file"

print "Done."