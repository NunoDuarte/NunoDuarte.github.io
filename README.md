## NunoDuarte homepage
personal website which includes
- deadlines for desired top conferences/journals/workshops
- CV (per request TODO)
- GitHub account 
- YouTube account (research demos and presentations)
- Relevant Publications and Projects

## How to update deadlines
1. add conference deadline info to statis/data/conferences.json
2. previous conference info is in static/data/past_conferences.txt


## Steps to load webpage locally 
ideal for testing new template updates or add content
1. ```sudo gem install bundler``` or ```sudo gem install bundler -v 2.4.2``` (if newer version is not working)
2. create Gemfile
3. write to Gemfile:
```vim
source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "webrick", "~> 1.7" # Required for Jekyll on Ruby 3.x

```
4. ```bundle exec jekyll serve```
5. open ```http://127.0.0.1:4000/```
