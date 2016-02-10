# Updates Zola iFrame with removed header

import requests as req
import sys
from bs4 import BeautifulSoup

try:
 	r=req.get("https://widget.zola.com/v1/widget/registry/mattandracheltietheknot/html?maxItems=12")
except:
 	print "error getting the page"
 	sys.exit(1)

try:
	print "Parsing HTML..."
	soup = BeautifulSoup(r.text, 'html.parser')
	print "Finding header..."
	header=soup.find_all("div","registry-header")[0]
	print "Removing header..."
	header.extract()
	print "Fixing images..."
	bimgs=soup.find_all("img","product-image")
	for bimg in bimgs:
		bimg['src'] = u'http:' + bimg['src']
	print "removing tracking scripts..."
	soup('script')[0].extract()
	print "Fixing formatting..."
	bimgs=soup.find_all("span","bullet")
	for bimg in bimgs:
		bimg.extract()
except:
	print "error processing HTML"


try:
	print "Creating new zola.html file..."
	f=open('../zola.html','w')
	f.write(soup.prettify().encode("UTF-8"))
	f.close()
except:
	print "Error creating file"

print "Done."