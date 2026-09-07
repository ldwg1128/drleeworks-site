@echo off
setlocal
cd /d "%~dp0"
if exist "%~dp0.cache\node-v22.23.2-win-x64\node.exe" set "PATH=%~dp0.cache\node-v22.23.2-win-x64;%PATH%"
set "ASTRO_TELEMETRY_DISABLED=1"
call npm.cmd run dev -- %*
