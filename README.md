## NunoDuarte homepage
personal website which includes
- deadlines for desired top conferences/journals/workshops
- CV (not updated)
- GitHub account 
- YouTube account (research demos and presentations)
- miscelaneous

## Future conf deadlines
- add conference deadline info to statis/data/conferences.json
- previous conference info is in static/data/past_conferences.txt

## Steps to load webpage locally (ideal for testing new template updates or add content):
1. ```sudo gem install bundler``` or ```sudo gem install bundler -v 2.4.2``` (if newer version is not working)
2. ```vim Gemfil```
```vim
source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "webrick", "~> 1.7" # Required for Jekyll on Ruby 3.x

```
3. ```bundle exec jekyll serve```
4. open ```http://127.0.0.1:4000/```
