# NunoDuarte Homepage

A personal academic website featuring conference deadlines, CV, publications, and research demos.
  
## :star2: Features
- **Personal Bio** - Short bio of my personal career
- **Conference Deadlines** - Track submission deadlines for top-tier conferences, journals, and workshops
- **GitHub Integration** - Direct link to code repositories and projects
- **YouTube Channel** - Research demonstrations and presentations
- **Publications & Projects** - Curated list of relevant academic work

## :bookmark_tabs: Updating Conference Deadlines

1. Add new conference information to `static/data/conferences.json`
2. Archive past conferences in `static/data/past_conferences.txt`

## :hourglass_flowing_sand: TODO list 
- [ ] update bio to include robotic grasping and object reconstruction using vision
- [ ] change CV link to point to cv
- [x] add short bio link
- [ ] update photo - more professional
- [ ] add EN and PT short bio

## :house: Local Development

To test template updates or add content locally:
### Dependencies

- Jekyll 4.3.0
- Ruby 3.x
- Webrick 1.7
  
### Prerequisites

Install Bundler:
```bash
sudo gem install bundler
```

Or specify version 2.4.2 if needed:
```bash
sudo gem install bundler -v 2.4.2
```

### Setup
  
1. Create a `Gemfile` in the project root

2. Add the following content to `Gemfile`:
```vim
source "https://rubygems.org"

gem "jekyll", "~> 4.3.0"
gem "webrick", "~> 1.7"  # Required for Jekyll on Ruby 3.x
```

3. Install dependencies:
```bash
bundle install
```

4. Start the local server:
```bash
bundle exec jekyll serve
```

5. View the site at: http://127.0.0.1:4000/

