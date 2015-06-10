@echo off
cd %~dp0
%JAVA_HOME%\bin\java -jar plantuml.jar %*
exit /b %ERRORLEVEL%

