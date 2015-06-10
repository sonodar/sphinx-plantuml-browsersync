# Sphinx + PlantUML + Gulp + BrowserSync

## Get Started

### Clone repository

```bash
git clone https://github.com/sonodar/sphinx-plantuml-browsersync.git
cd sphinx-plantuml-browsersync
```

### Windows

```dos
rem Install Chocolatey (Administrators only)
powershell -NoProfile -ExecutionPolicy unrestricted -Command ^
            "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))"

rem Install Dependencies (Administrators only)
%ALLUSERSPROFILE%\chocolatey\bin\choco.exe install -y jre8 nodejs.install pip graphviz

rem Download PlantUML
powershell -NoProfile -ExecutionPolicy unrestricted -Command ^
  "wget http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -OutFile plantuml.jar"

rem Sphinx-PlantUML
pip install Sphinx sphinxcontrib-plantuml

rem Install node packages
npm install
```

### Linux

```bash
# Install Dependencies (for Redhat/CentOS)
sudo yum install epel-release
sudo yum install java-1.8.0-openjdk graphviz python-pip nodejs npm make
# Install Dependencies (for Debian/Ubuntu)
sudo add-apt-repository ppa:chris-lea/node.js && sudo apt-get update
sudo apt-get install openjdk-8-jdk graphviz python-pip nodejs npm

# PlantUML
wget http://sourceforge.net/projects/plantuml/files/plantuml.jar/download -O plantuml.jar

# Sphinx-PlantUML
sudo pip install Sphinx sphinxcontrib-plantuml

# Install node packages
npm install
```

## How to use

### Run Browser-Sync by gulp (watch *.rst)

```bash
./node_modules/.bin/gulp
```

